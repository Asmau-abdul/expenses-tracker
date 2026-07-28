import React from 'react'

const TransactionItem = ({transactionItem}) => {
  return (
    <>
        <div className='transaction-item'>
            <p>{transactionItem.description}</p>
            <p>{transactionItem.category}</p>
            <p>{transactionItem.date}</p>
            <p>{transactionItem.amount}</p>
        </div>
    </>
  )
}

export default TransactionItem