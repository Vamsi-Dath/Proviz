import { useEffect, useState } from 'react'
import BoxItem from './components/BoxItem'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<{ greeting: string }[]>([]);
  const handleClick = () => {
    setCount((count) =>
      count + 1
    )
  };
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {  
    fetch(BACKEND_URL + '/api/data',{
      method: 'GET'
    }).then((response) => response.json())
      .then((data) => {
        setData(data);
      })
  };

  return (
    <>
      <ul>
        {data && data.map((item, index) => (
          <li key={index}>{item.greeting}</li>
        ))}
      </ul>
      <BoxItem cnt={count} onBtnClick={handleClick} />
    </>
  )
}

export default App
