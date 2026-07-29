import React from 'react'
import '../styles/transactionItem.scss'

const TransactionItem = ({transactionItem}) => {
  return (
    <>
        <div className='transaction-item'>
            <p>{transactionItem.description}</p>
            <p>{transactionItem.category}</p>
            <p>{transactionItem.date}</p>
            <p>{transactionItem.amount > 0 ? `+$${transactionItem.amount}` : `-$${Math.abs(transactionItem.amount)}`}</p>
        </div>
    </>
  )
}

export default TransactionItem