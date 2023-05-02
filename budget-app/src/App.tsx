// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     count: 0
//   }
//   handleClick() {
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {
//     return (
//       <div>App
        
//         <button onClick={this.handleClick.bind(this)}>
//           Clicked {this.state.count}</button>
//       </div>
//     )
//   }
// }

// // export default App

import React, { useEffect, useState } from 'react'

import Greetings from './component/Greetings'
import Count from './component/Count'
import Income from './component/Income'
import Expense from './component/Expense'
import Target from './component/Target'
import Transfer from './component/Transfer'

const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  useEffect(() => {

  },[])
  return (
    <div>
      {/* <Greetings/>
      Current count: {count}
      <Count count={count} handleClick={handleClick} /> */}

      <Income />
      <Expense />
      <Target />
      <Transfer />
    </div>
  )
}

export default App
