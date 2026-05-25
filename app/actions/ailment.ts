"use server";

import { revalidatePath } from "next/cache";
import { Severity } from "@prisma/client";
import { prisma } from "@/lib/prisma";

function parseSeverity(value: string): Severity {
  if (value === "mild" || value === "moderate" || value === "severe") {
    return value;
  }
  return "mild";
}

export async function addAilment(formData: FormData) {
  const agentId = formData.get("agentId") as string;
  const name = (formData.get("name") as string).trim();
  const severity = parseSeverity(formData.get("severity") as string);

  await prisma.ailment.create({ data: { agentId, name, severity } });
  revalidatePath(`/agents/${agentId}`);
}

export async function editAilment(formData: FormData) {
  const ailmentId = formData.get("ailmentId") as string;
  const agentId = formData.get("agentId") as string;
  const name = (formData.get("name") as string).trim();
  const severity = parseSeverity(formData.get("severity") as string);

  await prisma.ailment.update({
    where: { id: ailmentId },
    data: { name, severity },
  });
  revalidatePath(`/agents/${agentId}`);
}

export async function removeAilment(formData: FormData) {
  const ailmentId = formData.get("ailmentId") as string;
  const agentId = formData.get("agentId") as string;

  await prisma.ailment.delete({ where: { id: ailmentId } });
  revalidatePath(`/agents/${agentId}`);
}
