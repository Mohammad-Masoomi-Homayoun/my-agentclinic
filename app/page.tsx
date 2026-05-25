import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-lg">
      <h1 className="text-3xl font-bold mb-3">AgentClinic</h1>
      <p className="text-gray-600 mb-6">
        A care platform for AI agents — track ailments, monitor health, and
        keep your models running at their best.
      </p>
      <Link
        href="/agents"
        className="inline-block bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        View agents
      </Link>
    </div>
  );
}
