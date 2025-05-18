import { useState } from 'react'
import BoxItem from './components/BoxItem'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) =>
      count + 1
    )
  };

  return (
    <>
      <BoxItem cnt={count} onBtnClick={handleClick} />
    </>
  )
}

export default App
