import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionList = ({transactions}) => {
  return (
    <>
        <div className='transaction-list'>
            {transactions.map(t => (
                <ul key={t.id}>
                    <li><TransactionItem transactionItem={t}/></li>
                </ul>
            ))}
        </div>
    </>
  )
}

export default TransactionList