import Link from "next/link";
import Image from "next/image";
import { executivePanel, ExecMember } from "@/data/executivePanel";
import SectionShell from "@/components/SectionShell";

function initials(name: string) {
  const parts = name.trim().split(" ");
  const a = parts[0]?.[0] ?? "A";
  const b = parts[1]?.[0] ?? "S";
  return (a + b).toUpperCase();
}

function byOrder(a: ExecMember, b: ExecMember) {
  return (a.order ?? 999) - (b.order ?? 999);
}

function byOrderThenName(a: ExecMember, b: ExecMember) {
  const d = (a.order ?? 999) - (b.order ?? 999);
  if (d !== 0) return d;
  return a.name.localeCompare(b.name);
}

function buildTeamTree(teamMembers: ExecMember[]) {
  // Prefer a "root" (no reportsTo) with the lowest order as head.
  // If a team has NO roots (everyone reports to someone outside this team),
  // fall back to a flat list so nobody disappears.
  const roots = teamMembers.filter((m) => !m.reportsTo);

  // If there is an explicit head, use that.
  const explicitHead = teamMembers.find((m) => m.isHead);

  // If there are multiple independent roots and no explicit head,
  // show a flat list (otherwise we'd hide everyone except the first "head").
  if (!explicitHead && roots.length !== 1) {
    return { head: null, levels: [teamMembers.slice().sort(byOrderThenName)] };
  }

  if (!roots.length && !explicitHead) {
    return { head: null, levels: [teamMembers.slice().sort(byOrderThenName)] };
  }

  const head = (explicitHead ? [explicitHead] : roots)
    .slice()
    .sort(byOrderThenName)[0] ?? null;

  const childrenMap = new Map<string, ExecMember[]>();
  for (const m of teamMembers) {
    if (!m.reportsTo) continue;
    if (!childrenMap.has(m.reportsTo)) childrenMap.set(m.reportsTo, []);
    childrenMap.get(m.reportsTo)!.push(m);
  }
  for (const [k, arr] of childrenMap.entries()) {
    arr.sort(byOrderThenName);
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
    levels.push([...teamMembers].sort(byOrderThenName));
  }

  return { head, levels };
}

function PersonNode({ m, size }: { m: ExecMember; size: "head" | "member" }) {
  const imgSize = size === "head" ? 84 : 64;

  return (
    <SectionShell glow="trbl">
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
    </SectionShell>
  );
}

export default function ExecutivePanelPage() {
  // --- Desired layout (as requested) ---
  // 1) order 1 (solo)
  // 2) order 2 (solo)
  // 3) order 3 (solo)
  // 4) order 4 + 5 (side-by-side)
  // 5) order 10 + 11 + 12 (side-by-side)
  // 6) from order 6 onwards: team-wise "tree" sections

  const pickByOrders = (orders: number[]) =>
    orders
      .map((o) => executivePanel.find((m) => m.order === o))
      .filter(Boolean) as ExecMember[];

  const topSolo = pickByOrders([1, 2, 3]);
  const topRow2 = pickByOrders([4, 5]);
  const topRow3 = pickByOrders([10, 11, 12]);
  const used = new Set([...topSolo, ...topRow2, ...topRow3].map((m) => m.slug));

  // Temporary team overrides (so order-6 can become a department section without changing your sheet right now)
  const TEAM_OVERRIDE: Record<string, string> = {
    "shahriar-abdullah": "Finance",
    "istiak-ahmed-anik": "Finance",
  };

  const rest = executivePanel
    .filter((m) => !used.has(m.slug))
    .map((m) => ({ ...m, team: TEAM_OVERRIDE[m.slug] ?? m.team }));

  const teamsMap = rest.reduce<Record<string, ExecMember[]>>((acc, m) => {
    const t = m.team?.trim() || "Other";
    (acc[t] ||= []).push(m);
    return acc;
  }, {});

  // Explicit team ordering (no alphabetical sorting)
  const TEAM_ORDER = [
    "Finance",
    "Strategy and Planning",
    "Logistics",
    "Social Media",
    "PR",
    "Industry Relation",
    "Creatives",
    "Publication",
    "Admin",
    "Other",
  ];

  const teams = [
    ...TEAM_ORDER.filter((t) => (teamsMap[t] ?? []).length > 0),
    // any teams not in TEAM_ORDER go at the end, but still not alphabetically forced
    ...Object.keys(teamsMap).filter((t) => !TEAM_ORDER.includes(t)),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
        Executive Panel
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-fg">
        Executive Panel Structure
      </h1>
      <p className="mt-2 text-muted-fg max-w-3xl">
        Top leadership is shown first in the exact order you set. After that,
        departments are shown in a hierarchy (head → reports).
      </p>

      {/* --- Top pattern layout --- */}
      <div className="mt-10 space-y-10">
        {/* 1 / 2 / 3 (solo) */}
        {topSolo.map((m) => (
          <div key={m.slug} className="flex justify-center">
            <PersonNode m={m} size="head" />
          </div>
        ))}

        {/* 4 + 5 */}
        {topRow2.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8">
            {topRow2.map((m) => (
              <PersonNode key={m.slug} m={m} size="head" />
            ))}
          </div>
        )}

        {/* 10 + 11 + 12 */}
        {topRow3.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8">
            {topRow3.map((m) => (
              <PersonNode key={m.slug} m={m} size="head" />
            ))}
          </div>
        )}
      </div>

      {/* --- Team-wise tree (from order 6 onwards) --- */}
      <div className="mt-14 space-y-12">
        {teams.map((team) => {
          const teamMembers = (teamsMap[team] ?? []).slice().sort(byOrderThenName);

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
