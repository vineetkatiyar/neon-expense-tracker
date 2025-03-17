import ExpenseForm from "@/components/expense-form";
import { getExpense } from "@/lib/expense";
import ExpenseList from "./expense-list";
import { Header } from "@/components/header";
export default async function Home() {
  const expense = await getExpense();

  return (
    <section className="py- px-10 h-full">
      <div className="container">
        <Header />
        <div className="mt-8 flex items-center justify-between gap-10">
          <ExpenseList expense={expense} />
          <ExpenseForm />
        </div>
      </div>
    </section>
  );
}
