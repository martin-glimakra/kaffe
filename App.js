import './App.css';
import Form from './components/Form';
import Order from './components/Order';
import { useState } from 'react'

function App() {

  const [firstName, setFirstName] = useState('')
  const [cups, setCups] = useState(1)
  const [message, setMessage] = useState(null)
  const [step, setStep] = useState('form')

  function handleCupChanges (event) {
    if (event.target.value > 0) {
      setCups(event.target.value)
      setMessage(null)
    }
    else {
      setMessage('Du måste beställa minst en kopp kaffe')
      setCups(0)
    }
  }


  if (step === 'form') {
    return (
        <Form
        firstName={firstName}
        setFirstName={setFirstName}
        cups={cups}
        setCups={setCups}
        setStep={setStep}
        handleCupChanges={handleCupChanges}
        message={message}
        />
    );
  }

  if (step === 'order') {
    return (
        <Order
        firstName={firstName}
        cups={cups}
        />
    );
  }

}

export default App;
