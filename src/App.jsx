import { useState } from 'react'
import './App.css'
import Summary from './components/Summary'
import TransactionForm from './components/TransactionForm'
import FilterBar from './components/FilterBar'
import TransactionList from './components/TransactionList'

function App() {
  // const [transaction, setTransaction] = useState([])
  const [filter, setFilter] = useState('all')


  const [transactions, setTransactions] = useState([
    {id: 1, description: 'Salary', amount: 2000, category: 'income', date: '2026-07-22'},
    {id: 2, description: 'Gym membership', amount: -40, category: 'Health', date: '2026-07-23'},
    {id: 3, description: 'Uber ride', amount: -8, category: 'Transport', date: '2026-07-24'},
    {id: 4, description: 'Lunch', amount: -12, category: 'Food', date: '2026-07-25'},
  ])

  const filteredTransactions = filter === 'all' ? transactions : transactions.filter(
    t => t.category.toLowerCase() === filter
  )

  const handleAdd = (newTransaction) => {
    setTransactions(prev => [...prev, newTransaction])
  }

  return (
    <>
      <div>
        <div className='title-heading'>
          <h1>Expense tracker</h1>
          <p>Track your income and spending</p>
        </div>

        <Summary items={transactions}/>

        <TransactionForm onAdd={handleAdd}/>

        <FilterBar onFilter={setFilter} currentFilter={filter}/>

        <TransactionList transactions={filteredTransactions}/>

      </div>
    </>
  )
}

export default App
