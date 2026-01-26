import SectionShell from "@/components/SectionShell";
export default function AboutPage() {
  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-fg">About</h1>
      <p className="mt-3 text-muted-fg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    </SectionShell>
  );
}
