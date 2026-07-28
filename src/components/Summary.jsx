import React from 'react'
import '../styles/summary.scss'

const Summary = () => {
  return (
    <>
        <div className='summary-row'>
            <div className="balance">
                <p>Balance</p>
                <h3>$1,240</h3>
            </div>

            <div className="income">
                <p>Income</p>
                <h3>$2,000</h3>
            </div>

            <div className="expenses">
                <p>Expenses</p>
                <h3>$760</h3>
            </div>
        </div>
    </>
  )
}

export default Summary