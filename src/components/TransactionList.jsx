import React from 'react'
import TransactionItem from './TransactionItem'
import '../styles/transactionList.scss'

const TransactionList = ({transactions}) => {
  return (
    <>
        <div className='transaction-list'>
            <ul>
                {transactions.map(t => (
                    <li key={t.id}><TransactionItem transactionItem={t}/></li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default TransactionList