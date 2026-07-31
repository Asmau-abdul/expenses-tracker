import React from 'react'
import '../styles/summary.scss'

const Summary = ({items}) => {
    let balance = 0
    let income = 0
    let expenses = 0

    {items.forEach(t => {
        if(t.category === 'income') {
            income += t.amount
        }else{
            expenses += Math.abs(t.amount)
        }
    })}

    balance = income - expenses
  return (
    <>
        <div className='summary-row'>
            <div className="balance">
                <p>Balance</p>
                <h3 style={balance > 0 ? {color: '#1a9707'} : {color: '#b31010'}}>${balance.toLocaleString()}</h3>
            </div>

            <div className="income">
                <p>Income</p>
                <h3 style={{color: '#1a9707'}}>${income.toLocaleString()}</h3>
            </div>

            <div className="expenses">
                <p>Expenses</p>
                <h3 style={{color: '#b31010'}}>${expenses.toLocaleString()}</h3>
            </div>
        </div>
    </>
  )
}

export default Summary