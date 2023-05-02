import React from 'react'

const Income = () => {
    return (
        <div>
            <div>
                <label htmlFor="income">Income source</label><br />
                <input type="text" name="income source" id="income source" placeholder='Enter source of income here' /><br />
            </div>
            <div>
                <label htmlFor="amount">Amount of income</label><br />
                <input type="number" name="amount" id="amount" placeholder='Enter amount of income' /><br />
            </div>
            <div>
                <label htmlFor="date">Date of income</label><br />
                <input type="date" name="date" id="date" /><br />
            </div>
            <button type="submit">Add income</button>
        </div>
    )
}

export default Income