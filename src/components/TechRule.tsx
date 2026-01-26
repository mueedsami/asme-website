export default function TechRule() {
  return (
    <div className="mt-4 flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <span
        className="h-1 w-10 rounded-full"
        style={{ background: "var(--tech)" }}
      />
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
