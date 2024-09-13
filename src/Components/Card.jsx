import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id, addToFavorites }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const dentist = {name, username, id, addToFavorites};
    console.log({name})
    let favs = JSON.parse(localStorage.getItem('favs')) || [];
    favs.push(dentist);
    localStorage.setItem('favs', JSON.stringify(favs));
  }

  return (
    <div className="card">
      <img src='/images/doctor.jpg' alt='Logo' className="card-image" />
        <h2 className="card-title" >{name}</h2>
        <p className="card-username" >{username}</p>
        <p className="card-id" >ID: {id}</p>
        <Link to={`/dentist/${id}`} className="card-link">Ver detalles</Link>
        <button onClick={addFav} className="card-button">Add fav</button>
    </div>
  );
};

export default Card;
