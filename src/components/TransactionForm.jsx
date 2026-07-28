import React from 'react'
import '../styles/transactionForm.scss'

const TransactionForm = () => {
  return (
    <>
        <div className='transaction-form-row'>
            <div className='transaction-form'>
                <input type="text" placeholder='Description e.g. Lunch' />
                <input type="number" placeholder='Amount e.g. 25' />
                <select name="category" id="category">
                    <option value="category">Category</option>
                    <option value="income">Income</option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="health">Health</option>
                </select>
                <input type="date" />
                <button>Add transaction</button>
            </div>
        </div>
    </>
  )
}

export default TransactionForm