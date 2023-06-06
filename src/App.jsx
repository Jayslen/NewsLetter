import { useState } from 'react'
import { RegisterSection } from './components/RegisterSection'
import { SuccessSection } from './components/SuccessSection'

function App () {
  const [register, setRegister] = useState(false)
  const [email, setEmail] = useState()
  const [wrong, setWrong] = useState(false)

  const handleClick = () => {
    setRegister(!register)
    setEmail('')
    setWrong(!wrong)
  }

  const input = (event) => {
    setEmail(event.target.value)
  }

  const handleClickEmail = () => {
    if(/@.+\.com/g.test(email)) {
      setRegister(!register)
    } else {
      setWrong(true)
    }
  }
 
  return (
    <>
      <main className='h-screen w-screen grid place-content-center px-8'>
        {!register ? <RegisterSection changeState={handleClickEmail} checkEmail={input} email={wrong}/> : <SuccessSection changeState={handleClick}/>}
      </main>
    </>
  )
}

export default App
