import React, {useContext , useState, useEffect} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Home () {
  const {state, dispatch} = useContext(ContextGlobal);

  const addToFavorites = (dentist) => {
    dispatch({ type: 'ADD_FAV', payload: dentist });
  };

  return (
    <main className={`grid ${state.theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => (
          <Card id={dentist.id} name={dentist.name} username={dentist.username} addToFavorites={addToFavorites} />
        ))}
      </div>
    </main>
  )
}

export default Home