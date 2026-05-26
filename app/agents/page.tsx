import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AgentsPage() {
  const agents = await prisma.agent.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Agents</h1>
      {agents.length === 0 ? (
        <p className="text-gray-500">No agents found. Run the seed to populate the database.</p>
      ) : (
        <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500">
              <th className="pb-2 pr-6 font-medium">Name</th>
              <th className="pb-2 font-medium">Model</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr
                key={agent.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 pr-6">
                  <Link
                    href={`/agents/${agent.id}`}
                    className="font-medium text-gray-900 hover:underline"
                  >
                    {agent.name}
                  </Link>
                </td>
                <td className="py-3 text-gray-500">{agent.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
}
