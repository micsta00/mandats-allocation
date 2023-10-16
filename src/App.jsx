import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Results from './components/Results'
import UserForm from './components/UserForm'

function App() {
  const [passed, setPassed] = useState(false)
  const [data, setData] = useState({})

  function getData(data) {
    setData(data)
  }


  return (
    <>
      <UserForm getData={getData} />
      {data && <Results partiesData={data} />}
    </>
  )
}

export default App
