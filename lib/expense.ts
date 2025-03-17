import prisma from "@/lib/prisma";

export async function getExpense() {
  try {
    const todos = await prisma.expense.findMany({
      orderBy: { createdAt: "desc" },
    });
    return todos; // ✅ Always returns an array
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return []; // ✅ Returns an empty array on error instead of `undefined`
  }
}

export async function createExpense(data: { amount: number; title: string }) {
  return await prisma.expense.create({
    data,
  });
}

export async function deleteExpense(id: string) {
  return await prisma.expense.delete({
    where: { id },
  });
}
