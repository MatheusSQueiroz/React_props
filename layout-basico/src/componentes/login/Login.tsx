import { useState } from 'react'

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);


    return(
        <div>
            {loggedIn ? (
                <h1>Bem Vindo</h1>
            ):(
                <button onClick={() => setLoggedIn(true)}>Entrar</button>
            )   
        }
        </div>
    )
}

export default Login