"use client";

import { useOptimistic } from "react";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { deleteExpenseAction } from "@/lib/actions";

export type Expense = {
  id: string;
  title: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function ExpenseList({ expense }: { expense: Expense[] }) {
  const [optimisticExpense, setOptimisticExpense] = useOptimistic(
    expense,
    (currentExpense, expenseId) => {
      return currentExpense.filter((expense) => expense.id !== expenseId);
    }
  );

  const removeExpenseById = async (expenseId: string) => {
    setOptimisticExpense(expenseId);
    await deleteExpenseAction(expenseId);
  };

  return (
    <section className="py-12 px-6 md:px-10 h-full bg-gray-50">
      <div className="container mx-auto max-w-2xl bg-white p-6 shadow-lg rounded-lg">
        <div className="mt-6">
          <ul className="mt-4 flex flex-col gap-3">
            {optimisticExpense.map((expense) => (
              <li
                key={expense.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
              >
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">
                    {expense.title}
                  </span>
                  <span className="text-gray-600">{expense.amount}₹</span>
                </div>
                <form action={removeExpenseById.bind(null, expense.id)}>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="hover:bg-red-600"
                  >
                    <Trash2Icon className="w-5 h-5" />
                  </Button>
                </form>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
