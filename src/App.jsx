import { useState } from 'react'
import './App.css'

function App() {
  // const [transaction, setTransaction] = useState([])
  const [filter, setFilter] = useState('all')

  const transaction = [
    {id: 1, description: 'Salary', amount: 2000, category: 'income', date: '2026-07-22'},
    {id: 2, description: 'Gym membership', amount: 40, category: 'Health', date: '2026-07-23'},
    {id: 3, description: 'Uber ride', amount: 8, category: 'Transport', date: '2026-07-24'},
    {id: 4, description: 'Lunch', amount: 12, category: 'Food', date: '2026-07-25'},
  ]

  return (
    <>
      <div>
        <div className='title-heading'>
          <h1>Expense tracker</h1>
          <p>Track your income and spending</p>
        </div>

        <div className='summary'>
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

        <div className='transaction-form'>
          <div>
            <input type="text" placeholder='Description e.g. Lunch' className='description' />
            <input type="text" placeholder='Amount e.g. 25' className='amount' />
            <select name="category" id="category">
              <option value="income">Income</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="health">Health</option>
            </select>
            <input type="date" name="" id="" />
            <input type="submit" value={'Add transaction'}/>
          </div>

          <div className='filter'>
            <p>All</p>
            <p>Income</p>
            <p>Food</p>
            <p>Transport</p>
            <p>Health</p>
          </div>

          <div>
            {transaction.map((item) => (
              <div>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.date}</p>
                <p>{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
