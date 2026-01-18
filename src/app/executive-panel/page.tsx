import Link from "next/link";
import Image from "next/image";
import { executivePanel, ExecMember } from "@/data/executivePanel";

function initials(name: string) {
  const parts = name.trim().split(" ");
  const a = parts[0]?.[0] ?? "A";
  const b = parts[1]?.[0] ?? "S";
  return (a + b).toUpperCase();
}

function byOrder(a: ExecMember, b: ExecMember) {
  return (a.order ?? 999) - (b.order ?? 999);
}

function buildTeamTree(teamMembers: ExecMember[]) {
  const head = teamMembers.find((m) => m.isHead) ?? null;

  const childrenMap = new Map<string, ExecMember[]>();
  for (const m of teamMembers) {
    if (!m.reportsTo) continue;
    if (!childrenMap.has(m.reportsTo)) childrenMap.set(m.reportsTo, []);
    childrenMap.get(m.reportsTo)!.push(m);
  }
  for (const [k, arr] of childrenMap.entries()) {
    arr.sort(byOrder);
    childrenMap.set(k, arr);
  }

  // BFS levels: [[head], [direct reports], [their reports], ...]
  const levels: ExecMember[][] = [];

  if (head) {
    levels.push([head]);

    let queue = [head.slug];
    while (queue.length) {
      const nextLevel: ExecMember[] = [];
      const nextQueue: string[] = [];

      for (const parentSlug of queue) {
        const kids = childrenMap.get(parentSlug) ?? [];
        for (const child of kids) {
          nextLevel.push(child);
          nextQueue.push(child.slug);
        }
      }

      if (!nextLevel.length) break;
      levels.push(nextLevel);
      queue = nextQueue;
    }
  } else {
    // fallback if no head declared
    levels.push([...teamMembers].sort(byOrder));
  }

  return { head, levels };
}

function PersonNode({ m, size }: { m: ExecMember; size: "head" | "member" }) {
  const imgSize = size === "head" ? 84 : 64;

  return (
    <div className="flex flex-col items-center text-center">
      <Link
        href={`/executive-panel/${m.slug}`}
        className={[
          "group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition",
          size === "head" ? "h-[84px] w-[84px]" : "h-[64px] w-[64px]",
          "hover:shadow-md",
        ].join(" ")}
        aria-label={`View profile of ${m.name}`}
      >
        {/* initials fallback behind image */}
        <div className="absolute inset-0 grid place-items-center text-sm font-bold text-muted-fg">
          {initials(m.name)}
        </div>

        <Image
          src={m.photo}
          alt={m.name}
          width={imgSize}
          height={imgSize}
          className="h-full w-full object-cover"
        />
      </Link>

      <div
        className={[
          "mt-3 font-semibold text-fg leading-snug",
          size === "head" ? "text-base" : "text-sm",
        ].join(" ")}
      >
        {m.name}
      </div>

      <div className="mt-1 text-xs text-muted-fg">{m.role}</div>

      <Link
        href={`/executive-panel/${m.slug}`}
        className="mt-2 text-xs font-semibold text-primary hover:underline"
      >
        View details
      </Link>
    </div>
  );
}

export default function ExecutivePanelPage() {
  // Exclude "Core" (as you said there will be no core)
  const teams = Array.from(
    new Set(
      executivePanel
        .map((m) => m.team)
        .filter((t) => t && t.toLowerCase() !== "core")
    )
  ).sort();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
        Executive Panel
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-fg">
        Executive Panel Structure
      </h1>
      <p className="mt-2 text-muted-fg max-w-3xl">
        Departments are shown in a hierarchy: department head first, followed by
        members under them.
      </p>

      <div className="mt-10 space-y-12">
        {teams.map((team) => {
          const teamMembers = executivePanel
            .filter((m) => m.team === team)
            .sort(byOrder);

          const { levels } = buildTeamTree(teamMembers);

          return (
            <section key={team} className="pb-10 border-b border-border last:border-b-0">
              {/* Department title (left aligned) */}
              <div className="flex justify-center">
  <h2 className="text-xl font-semibold text-fg">{team}</h2>
</div>


              {/* BFS levels */}
              <div className="mt-8 space-y-10">
                {levels.map((level, idx) => (
                  <div key={idx} className="relative">
                    {/* connector line between levels */}
                    {idx > 0 && (
                      <div className="absolute -top-5 left-0 right-0 mx-auto h-px w-[92%] bg-border/60" />
                    )}

                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                      {level.map((m) => (
                        <PersonNode
                          key={m.slug}
                          m={m}
                          size={idx === 0 ? "head" : "member"}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
