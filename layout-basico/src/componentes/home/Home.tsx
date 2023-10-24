import { useState, useEffect } from 'react'

const Home = () => {
    const[revelar, setRevelar] = useState(false);
    const[framework, setFramework] = useState('');

    useEffect(() => {
        if(revelar){
            setFramework(".NET, ASPNET, Entity Framework, Blazor")
        }
    }, [revelar])
    
    return(
        <div>
        <h1>C-Sharp</h1>
        <h3>{framework}</h3>
        <p>Descubra os frameworks de C-Sharp clicando no botão</p>
        <button onClick={() => setRevelar(true)}>Ver Frameworks</button>
    </div>
)
}
export default Home