import { useEffect, useState } from 'react'
import './App.css'
import Summary from './components/Summary'
import TransactionForm from './components/TransactionForm'
import FilterBar from './components/FilterBar'
import TransactionList from './components/TransactionList'

function App() {
  // const [transaction, setTransaction] = useState([])
  const [filter, setFilter] = useState('all')


  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : [
      {id: crypto.randomUUID(), description: 'Salary', amount: 2000, category: 'income', date: '2026-07-22'},
      {id: crypto.randomUUID(), description: 'Gym membership', amount: -40, category: 'health', date: '2026-07-23'},
      {id: crypto.randomUUID(), description: 'Uber ride', amount: -8, category: 'transport', date: '2026-07-24'},
      {id: crypto.randomUUID(), description: 'Lunch', amount: -12, category: 'food', date: '2026-07-25'},
    ]
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  },[transactions])

  const filteredTransactions = filter === 'all' ? transactions : transactions.filter(
    t => t.category.toLowerCase() === filter
  )

  const handleAdd = (newTransaction) => {
    setTransactions(prev => [...prev, newTransaction])
  }

  const handleDelete = (id) => {
    setTransactions(prev => prev.filter(f => f.id !== id))
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

        <TransactionList transactions={filteredTransactions} handleDelete={handleDelete}/>

      </div>
    </>
  )
}

export default App
