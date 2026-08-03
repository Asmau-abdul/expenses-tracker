import React from 'react'
import '../styles/summary.scss'

const Summary = ({items}) => {
    let balance = 0
    let income = 0
    let expenses = 0

    {items.forEach(t => {
        const amt = Number(t.amount)
        if (isNaN(amt)) return
        if(t.category === 'income') {
            income += amt
        }else{
            expenses += Math.abs(amt)
        }
    })}

    balance = income - expenses
  return (
    <>
        <div className='summary-row'>
            <div className="balance">
                <p>Balance</p>
                <h3 style={{color: '#1a1a2e'} }>₦{balance.toLocaleString()}</h3>
            </div>

            <div className="income">
                <p>Income</p>
                <h3 style={{color: '#1a9707'}}>₦{income.toLocaleString()}</h3>
            </div>

            <div className="expenses">
                <p>Expenses</p>
                <h3 style={{color: '#b31010'}}>₦{expenses.toLocaleString()}</h3>
            </div>
        </div>
    </>
  )
}

export default Summary