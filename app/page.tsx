import ExpenseForm from "@/components/expense-form";
import { getExpense } from "@/lib/expense";
export default async function Home() {
  const expense = await getExpense();

  return (
    <section className="py-24 px-5">
      <div className="container">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <h2 className="text-zinc-500">Using Neon: Serverless Postgres</h2>

        <div className="mt-8 flex items-center justify-between gap-10">
          <div className="grow">
            <h3 className="text-xl font-bold">Items</h3>
            <ul className="mt-4 flex flex-col gap-1">
              {expense.map((expense) => (
                <li key={expense.id} className="flex justify-between">
                  <span>{expense.title}</span>
                  <span>{expense.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <ExpenseForm />
        </div>
      </div>
    </section>
  );
}
