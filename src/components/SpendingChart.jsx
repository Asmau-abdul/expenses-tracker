import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import '../styles/SpendingChart.scss'

const COLORS = {
    food: '#ea9e10',
    transport: '#62abe7',
    health: '#079097',
    utility: '#a855f7',
    income: '#1a9707'
}

const SpendingChart = ({transactions}) => {
    const data = ['food', 'transport', 'health', 'utility'].map(category => {
        const total = transactions.filter(t => t.category === category && t.amount < 0)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0)
        return {
            category: category.charAt(0).toUpperCase() + category.slice(1),
            amount: total,
            key: category
        }
    }).filter(d => d.amount > 0)

    if (data.length === 0) return null

  return (
    <>
        <div className='spending-chart'>
            <p className="chart-title">Spending by category</p>
            <ResponsiveContainer width='100%' height={200}>
                <BarChart data={data} margin={{top: 10, left: -20, bottom: 0}}>
                    <XAxis dataKey='category' tick={{fontSize: 13}}/>
                    <YAxis tick={{fontSize: 12}}/>
                    <Tooltip 
                    formatter={(value) => [`₦${value}`, 'Amount']}
                    cursor={{fill: '#f5f5f5'}}
                    />

                    <Bar dataKey='amount' radius={[6, 6, 0, 0]}>
                        {data.map((entry) => (
                            <Cell key={entry.key} fill={COLORS[entry.key] || '#ccc'}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </>
  )
}

export default SpendingChart