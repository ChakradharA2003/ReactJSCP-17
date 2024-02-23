// Write your code here
import './index.css'

const TransactionItem = props => {
  const {id, title, amount, type, onDeleteButtonClicked} = props
  const onDelete = () => {
    onDeleteButtonClicked(id, amount, type)
  }
  return (
    <li className="list-container">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default TransactionItem
