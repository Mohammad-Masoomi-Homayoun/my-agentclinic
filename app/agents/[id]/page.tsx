import { notFound } from "next/navigation";
import { Severity } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { addAilment, editAilment, removeAilment } from "@/app/actions/ailment";

export const dynamic = "force-dynamic";

const severityStyles: Record<Severity, string> = {
  mild: "bg-green-100 text-green-800",
  moderate: "bg-yellow-100 text-yellow-800",
  severe: "bg-red-100 text-red-800",
};

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const agent = await prisma.agent.findUnique({
    where: { id },
    include: { ailments: { orderBy: { name: "asc" } } },
  });

  if (!agent) notFound();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-1">{agent.name}</h1>
      <p className="text-gray-500 text-sm mb-8">{agent.model}</p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Ailments</h2>
        {agent.ailments.length === 0 ? (
          <p className="text-gray-400 text-sm">No ailments on record.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {agent.ailments.map((ailment) => (
              <li key={ailment.id} className="py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-3 sm:contents">
                  <span className="flex-1 text-sm font-medium">{ailment.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${severityStyles[ailment.severity]}`}
                  >
                    {ailment.severity}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <EditAilmentForm ailment={ailment} />
                  <form action={removeAilment}>
                    <input type="hidden" name="ailmentId" value={ailment.id} />
                    <input type="hidden" name="agentId" value={agent.id} />
                    <button
                      type="submit"
                      className="text-xs text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Add ailment</h2>
        <form action={addAilment} className="flex flex-col gap-3 w-full sm:max-w-sm">
          <input type="hidden" name="agentId" value={agent.id} />
          <input
            name="name"
            required
            placeholder="Ailment name"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <select
            name="severity"
            defaultValue="mild"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
          <button
            type="submit"
            className="self-start bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            Add ailment
          </button>
        </form>
      </section>
    </div>
  );
}

function EditAilmentForm({
  ailment,
}: {
  ailment: { id: string; name: string; severity: Severity; agentId: string };
}) {
  return (
    <form action={editAilment} className="flex items-center gap-2">
      <input type="hidden" name="ailmentId" value={ailment.id} />
      <input type="hidden" name="agentId" value={ailment.agentId} />
      <input
        name="name"
        defaultValue={ailment.name}
        required
        className="border border-gray-200 rounded px-2 py-1 text-xs w-36 focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
      <select
        name="severity"
        defaultValue={ailment.severity}
        className="border border-gray-200 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-gray-400"
      >
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
      </select>
      <button
        type="submit"
        className="text-xs text-blue-600 hover:underline"
      >
        Save
      </button>
    </form>
  );
}
