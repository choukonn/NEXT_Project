import logo from './logo.svg';
import './App.css';
import React from 'react';
import useSWR from 'swr';
import {Pokemon} from './components/Pokemon'

const url = 'https://pokeapi.co/api/v2/pokemon'
const fetcher = (...args)=>fetch(...args).then((res)=>res.json())

function App() {
  const {data: result, error} = useSWR(url, fetcher)

  if(error) return <div>fail to load</div>
  if(!result) return <div>loading...</div>

  return(
    <main className='App'>
      <h1>Pokedex</h1>
      <div>
        {
          result.results.map((pokemon)=>(
            <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
          ))
        }
      </div>
    </main>
  )
}

export default App;
