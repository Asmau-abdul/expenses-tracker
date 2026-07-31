import React from 'react'
import '../styles/transactionItem.scss'
import { Banknote, Car, HeartPulse, Trash2, UtensilsCrossed, Wallet } from 'lucide-react'

const TransactionItem = ({transactionItem, handleDelete}) => {
  const getCategoryIcon = (category) => {
    switch(category){
      case 'food': return <UtensilsCrossed size={50} style={{backgroundColor: 'rgba(234, 158, 16, 0.5)', 
        color: 'rgb(234, 158, 16)', padding: '12px', borderRadius: '8px'}}/>

      case 'transport': return <Car size={50} style={{backgroundColor: 'rgba(98, 171, 231, 0.5)', 
        color: 'rgb(98, 171, 231)', padding: '12px', borderRadius: '8px'}}/>

      case 'health': return <HeartPulse size={50} style={{backgroundColor: 'rgba(7, 144, 151, 0.5)', 
        color: 'rgb(7, 144, 151)', padding: '12px', borderRadius: '8px'}}/>

      case 'income': return <Banknote size={50} style={{backgroundColor: 'rgba(26, 151, 7, 0.5)', 
        color: 'rgb(26, 151, 7)', padding: '12px', borderRadius: '8px'}}/>
        
      default: return <Wallet size={50} style={{backgroundColor: 'rgba(26, 151, 7, 0.5)', 
        color: 'rgb(26, 151, 7)', padding: '12px', borderRadius: '8px'}}/>
    }
  }

  return (
    <>
        <div className='transaction-item'>
            <div className='leftSide'>
              <p>{getCategoryIcon(transactionItem.category)}</p>
              <div>
                <h3>{transactionItem.description}</h3>
                <p><span>{transactionItem.category} . </span> <span>{transactionItem.date}</span></p>
              </div>
            </div>
            <div className='rightSide'>
              <p className={transactionItem.amount > 0 ? 'greenColor' : 'redColor'}>{transactionItem.amount > 0 ? `+$${transactionItem.amount}` : `-$${Math.abs(transactionItem.amount)}`}</p>
              <button onClick={() => handleDelete(transactionItem.id)}>
                <Trash2 style={{backgroundColor: '#fff', padding: '5px', outline: 'none', border: 'none'}}/>
              </button>
            </div>
        </div>
    </>
  )
}

export default TransactionItem