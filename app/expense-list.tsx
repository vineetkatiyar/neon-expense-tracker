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
      <div className="container mx-auto w-full max-w-2xl bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expenses</h2>

        <div className="mt-4">
          <ul className="flex flex-col divide-y divide-gray-200">
            {optimisticExpense.map((expense, index) => (
              <li
                key={expense.id}
                className={`grid grid-cols-3 items-center p-4 rounded-md ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">
                    {expense.title}
                  </span>
                  <span className="text-gray-600">{expense.amount}₹</span>
                </div>
                <span className="text-gray-500 text-sm">
                  {new Date(expense.createdAt).toLocaleDateString()}
                </span>
                <form
                  action={removeExpenseById.bind(null, expense.id)}
                  className="flex justify-end"
                >
                  <Button
                    variant="destructive"
                    size="icon"
                    className="hover:bg-red-600 transition-all"
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
