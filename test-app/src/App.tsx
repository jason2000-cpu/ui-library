import { Button, TextInput } from 'ui-library';
import './App.css'

function App() {

  const handleClick = () => {
    alert("Button Clicked!")
  }

  return (
    <div className='space-y-5'>
      <TextInput name="name" label='First Name' type='text' color='#FFFFFF' placeholder='first name ...' />
      <Button variant='primary' label='Submit' onClick={handleClick} />      
    </div>
  )
}

export default App
