"use server";

import { createExpense, deleteExpense } from "@/lib/expense";
import { revalidatePath } from "next/cache";

export async function createExpenseActions(
  prevState: unknown,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const title = data.title as string;
  if (typeof title !== "string") {
    throw new Error("Title must be a string");
  }

  const amount = parseInt(data.amount as string);
  if (isNaN(amount)) {
    throw new Error("Amount must be a number ");
  }

  await createExpense({ title, amount });
  revalidatePath("/");
}

export async function deleteExpenseAction(id: string) {
  await deleteExpense(id);
  revalidatePath("/");
}
