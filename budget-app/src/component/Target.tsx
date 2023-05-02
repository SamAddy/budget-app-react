import React from 'react'

const Target = () => {
  return (
    <div>
        <label htmlFor="target">Set target</label><br />
        <input type="number" name="target" id="target" placeholder='Enter target amount' /><br />
        <button type="reset">Reset</button>
    </div>
  )
}

export default Target