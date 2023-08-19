import { edenFetch } from '@elysiajs/eden';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fetch = edenFetch('http://localhost:3000'); // eslint-disable-line

  const onLogin = async () => {
    const response = await fetch('/user/login', {
      method: 'POST',
      body: {
        email,
        password,
      },
    });

    console.log(response);
  };

  return (
    <>
      <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={onLogin}>login</button>
    </>
  );
}

export default App;
