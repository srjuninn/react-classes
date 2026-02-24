import PokemoonGu from './components/PokeComponent/PokeCard'
import Card from './components/CardComponent/Card'
import indoAliImg from './assets/images/indoAli.jpeg'
import { useState, useEffect } from 'react';

function App() {
  
  const [data, setData] = useState({})

  useEffect(()=> {
    
    fetch('https://pokeapi.co/api/v2/pokemon/eevee')
    .then((res) => res.json())
    .then((data)=> setData(data))

  }, [])

  console.log("aqui é o state", data)

  return (
    <>
      <h1>We live, we love, we lie</h1>
      {/* <Card 
      title={data.title} 
      description={data.description}
      price={data.price}
      category={data.category}
      image={data.image}
      >
      </Card> */}
      <PokemoonGu
      name={data?.name}
      image={data?.sprites?.front_default}
      type={data?.types?.[0]?.type?.name}
      >
      

      </PokemoonGu>
    </>
  );
}

export default App;
