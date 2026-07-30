import React, { useState } from 'react'
import '../styles/transactionForm.scss'

const TransactionForm = ({onAdd}) => {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const submitForm = () => {
        if(!description || !amount || !category || !date) return
        const parsedAmount = category === 'income' ? 
        Math.abs(Number(amount))
        : -Math.abs(Number(amount))

        onAdd( {
            id: crypto.randomUUID(),
            description,
            amount: parsedAmount,
            category,
            date
        })
        setDescription('')
        setAmount('')
        setCategory('')
        setDate('')

        // console.log(newTransaction)
    }

  return (
    <>
        <div className='transaction-form-row'>
            <div className='transaction-form'>
                <input type="text" placeholder='Description e.g. Lunch' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="number" placeholder='Amount e.g. 25' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <select name="category" id="category" value={category} onChange={handleCategory}>
                    <option value="" disabled>Category</option>
                    <option value="income">Income</option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="health">Health</option>
                </select>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                <button onClick={submitForm}>Add transaction</button>
            </div>

        </div>
    </>
  )
}

export default TransactionForm