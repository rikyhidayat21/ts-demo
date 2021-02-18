import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from './components/TextField';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest'
}
// sampe sini
const App: React.FC<IAppOwnProps> = ({username, userType}): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()))
  const [counter, setCounter] = useState<number>(3)
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [username])
  
  const increaseNumber = ():void => {
    setCounter(counter + 1)
  }
  const decreaseNumber = ():void => {
    setCounter(counter - 1)
  }

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>):void => {
    setMessage(event.target.value);
  }


  return (
    <>

      <h1>
        Hallo, {username ? username : 'Mysterious Entity'} your user type is {username ? userType : 'irrelevant because I do not know you'}.
      
      </h1>
      <button onClick={() => increaseNumber()}>+</button>
      <button onClick={() => decreaseNumber()}>-</button>
      { counter < 1 ? (
        <p>Mohon maaf stock sudah habis</p>
      ) : (
        <p>{counter}</p>
      )}
      <TextField>

      </TextField>
      <p>{time.toTimeString()}</p>
      <br/>
      <input 
        type='text'
        placeholder='Enter your message here'
        value={message}
        onChange={handleTextChange}
      />
      <br/>
      <p>Your message: {message || ''}</p>

      <Link
        to="/userList"
      >
        User List
      </Link>
    </>
  )
}

export default App;
