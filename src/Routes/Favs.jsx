import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    // Cargar favoritos desde localStorage
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    dispatch({ type: 'SET_FAVS', payload: favs });
  }, [dispatch]);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      <div className='card-grid'>
        {state.favs.length > 0 ? (
          state.favs.map(dentist => (
            <Card
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
              
            />
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
      </div>
    </>
  );
};

export default Favs;
