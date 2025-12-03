export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-2xl py-16">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <p className="mb-4">
        Here are some of my current investments:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Company A – short description</li>
        <li>Company B – short description</li>
        <li>Fund C – short description</li>
      </ul>
    </main>
  );
}
