import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const submitNewExpenseHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...newExpenseData,
    };

    props.addNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitNewExpense={submitNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
