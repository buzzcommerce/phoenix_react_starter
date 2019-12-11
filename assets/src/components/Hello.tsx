import React, { useState } from 'react'

export default function Hello() {
  const [count, setCount] = useState(0)
  return (
    <div sx={{ fontSize: 12 }}>
      <h2>Hello from Phoenix React</h2>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
