export default function Section({ children, className = "" }) {
  return (
    <section
      className={`min-h-screen pt-24 pb-16 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
