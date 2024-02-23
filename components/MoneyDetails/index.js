// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <ul className="money-details-list">
      <li className="balance-list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="inside-list-container">
          <p className="title">Your Balance</p>
          <p className="para" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="income-list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="inside-list-container">
          <p className="title">Your Income</p>
          <p className="para" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="expenses-list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="inside-list-container">
          <p className="title">Your Expenses</p>
          <p className="para" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
