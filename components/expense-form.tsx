"use client";

import { useActionState } from "react";
import { createExpenseActions } from "@/lib/actions";

export default function NewExpenseForm() {
  const [state, action, isPending] = useActionState(createExpenseActions, null);
  console.log(state);

  return (
    <div className="w-1/3">
      <h3 className="text-xl font-bold">Add new</h3>
      <form className="mt-3 flex flex-col gap-4" action={action}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border border-zinc-300 p-2"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="border border-zinc-300 p-2"
        />
        <button
          disabled={isPending}
          type="submit"
          className="bg-purple-600 p-2 text-white disabled:bg-slate-500"
        >
          Add
        </button>
      </form>
    </div>
  );
}
