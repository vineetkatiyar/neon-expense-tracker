"use server";

import { createExpense } from "@/lib/expense";
import { revalidatePath } from "next/cache";

export async function createExpenseActions(state: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const title = data.title as string;
  if (typeof title !== "string") {
    throw new Error("Title must be a string");
  }

  const amount = parseInt(data.amount as string);
  if (isNaN(amount)) {
    throw new Error("Amount must be a number ");
  }

  await createExpense({ title, amount })
  revalidatePath("/")
}
