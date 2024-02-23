import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const SelectTransaction = props => {
  const {id, transaction} = props
  if (transaction === 'Income') {
    return (
      <option value={id} selected>
        {transaction}
      </option>
    )
  }
  return <option value={id}>{transaction}</option>
}
// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: 'Income',
    transactionArr: [],
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmountInput = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeTypeInput = event => {
    console.log(event.target.value)
    this.setState({
      typeInput: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: typeInput,
    }
    if (typeInput === 'Income') {
      this.setState(prevState => ({
        balanceAmount: prevState.balanceAmount + parseInt(amountInput),
        incomeAmount: prevState.incomeAmount + parseInt(amountInput),
      }))
    }
    if (typeInput === 'Expenses') {
      this.setState(prevState => ({
        expensesAmount: prevState.expensesAmount + parseInt(amountInput),
        balanceAmount: prevState.balanceAmount - parseInt(amountInput),
      }))
    }
    console.log(newTransaction)
    this.setState(prevState => ({
      transactionArr: [...prevState.transactionArr, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: '',
    }))
  }

  onDeleteButtonClicked = (id, amount, type) => {
    const {
      balanceAmount,
      incomeAmount,
      expensesAmount,
      transactionArr,
    } = this.state
    const filteredArr = transactionArr.filter(each => each.id !== id)
    console.log(filteredArr)
    this.setState({
      transactionArr: filteredArr,
    })
    if (type === 'Expenses') {
      this.setState(prevState => ({
        expensesAmount: prevState.expensesAmount - parseInt(amount),
        balanceAmount: prevState.balanceAmount + parseInt(amount),
      }))
    }
    if (type === 'Income') {
      this.setState(prevState => ({
        incomeAmount: prevState.incomeAmount - parseInt(amount),
        balanceAmount: prevState.balanceAmount - incomeAmount,
      }))
    }
  }

  render() {
    const {
      titleInput,
      amountInput,
      typeInput,
      transactionArr,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.state
    return (
      <div className="bg-container">
        <div className="head-container">
          <h1 className="heading">Hi, Chakradhar</h1>
          <p className="head-para">
            Welcome back to your
            <span className="span-style">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            balance={balanceAmount}
            income={incomeAmount}
            expenses={expensesAmount}
          />
        </div>
        <div className="transaction-history-container">
          <div className="transaction-container">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form onSubmit={this.onAddTransaction}>
              <div className="inputs-container">
                <label htmlFor="title" className="label-style">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="input-style"
                  placeholder="TITLE"
                  onChange={this.onChangeTitleInput}
                  value={titleInput}
                />
              </div>
              <div className="inputs-container">
                <label htmlFor="amount" className="label-style">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="input-style"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmountInput}
                  value={amountInput}
                />
              </div>
              <div className="inputs-container">
                <label htmlFor="type" className="label-style">
                  TYPE
                </label>
                <select
                  className="input-style"
                  id="type"
                  onChange={this.onChangeTypeInput}
                  value={typeInput}
                >
                  {transactionTypeOptions.map(type => (
                    <SelectTransaction
                      key={type.optionId}
                      value={type.optionId}
                      transaction={type.displayText}
                    />
                  ))}
                </select>
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="transactions-list">
              <li className="attributes-container">
                <p className="attributes-heading">Title</p>
                <p className="attributes-heading">Amount</p>
                <p className="attributes-heading">Type</p>
                <p className="dummy-heading">.</p>
              </li>

              {transactionArr.map(each => (
                <TransactionItem
                  key={each.id}
                  title={each.title}
                  amount={each.amount}
                  type={each.type}
                  onDeleteButtonClicked={this.onDeleteButtonClicked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
