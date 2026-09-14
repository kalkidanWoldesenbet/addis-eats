import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

function SignIn() {
    const [name, setName] = useState("");
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    function handleSubmit(e){
        e.preventDefault();
        if(!name.trim()) return;
        signIn(name.trim());
        navigate(from, {replace: true});
    }

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id='name' value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
}

export default SignIn
