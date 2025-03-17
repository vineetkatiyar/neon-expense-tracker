"use client";

import { useActionState } from "react";
import { createExpenseActions } from "@/lib/actions";

export default function NewExpenseForm() {
  
  const [state, action, isPending] = useActionState(createExpenseActions, null);
  console.log(state);

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800">Add New Expense</h3>
      <form className="mt-4 flex flex-col gap-4" action={action}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="focus:outline-none border border-gray-300 p-2 rounded-md focus:ring focus:ring-gray-400"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="focus:outline-none border border-gray-300 p-2 rounded-md focus:ring focus:ring-gray-400"
          required
        />
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-all disabled:bg-gray-500"
        >
          {isPending ? "Adding..." : "Add Expense"}
        </button>
      </form>
    </div>
  );
}
