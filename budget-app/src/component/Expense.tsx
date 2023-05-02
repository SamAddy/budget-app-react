import React from 'react'

const Expense = () => {
  return (
        <div>
            <div>
                <label htmlFor="income">Expense source</label><br />
                <input type="text" name="expense" id="expense" placeholder='Enter source of expense here' /><br />
            </div>
            <div>
                <label htmlFor="amount">Amount of expense</label><br />
                <input type="number" name="amount" id="amount" placeholder='Enter amount of expense' /><br />
            </div>
            <div>
                <label htmlFor="date">Date of expense</label><br />
                <input type="date" name="date" id="date" /><br />
            </div>
            <button type="submit">Add expense</button>
        </div>
    )
}

export default Expense