import React from 'react'

interface CountProps {
    handleClick: () => void
    count: number
}

const Count = (props: CountProps) => {
  return (
    <div>
        <button onClick={props.handleClick}>  
        Clicked {props.count} times
      </button>
    </div>
  )
}

export default Count