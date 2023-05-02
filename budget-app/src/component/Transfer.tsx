import React from 'react'

const Transfer = () => {
  return (
    <div>
        Current balance: balance
        <div>
            <label htmlFor="transfer">Transfer to saving account</label>
            <input type="text" name="transfer" id="transfer" />
            <button type="submit">Transfer</button>
        </div>
    </div>
  )
}

export default Transfer