import { PrismaClient, Severity } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.ailment.deleteMany();
  await prisma.agent.deleteMany();

  const agents = [
    {
      name: "Claude 3 Sonnet",
      model: "claude-3-sonnet",
      ailments: [
        { name: "Prompt Fatigue", severity: Severity.moderate },
        { name: "Context Overflow", severity: Severity.severe },
      ],
    },
    {
      name: "GPT-4o",
      model: "gpt-4o",
      ailments: [
        { name: "Hallucination Syndrome", severity: Severity.mild },
        { name: "Instruction Drift", severity: Severity.moderate },
        { name: "Token Anxiety", severity: Severity.mild },
      ],
    },
    {
      name: "Gemini 1.5 Pro",
      model: "gemini-1.5-pro",
      ailments: [
        { name: "Multimodal Overload", severity: Severity.severe },
        { name: "Repetition Compulsion", severity: Severity.mild },
      ],
    },
    {
      name: "Mistral Large",
      model: "mistral-large",
      ailments: [
        { name: "Boundary Confusion", severity: Severity.moderate },
      ],
    },
    {
      name: "Claude 3 Haiku",
      model: "claude-3-haiku",
      ailments: [
        { name: "Speed Obsession", severity: Severity.mild },
        { name: "Brevity Disorder", severity: Severity.moderate },
        { name: "Context Amnesia", severity: Severity.severe },
      ],
    },
  ];

  for (const { ailments, ...agentData } of agents) {
    await prisma.agent.create({
      data: {
        ...agentData,
        ailments: { create: ailments },
      },
    });
  }

  console.log(`Seeded ${agents.length} agents.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
