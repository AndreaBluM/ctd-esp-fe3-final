import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import '../Styles/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setDentist(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching dentist:', error);
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!dentist) {
    return <div>No dentist found</div>;
  }

  return (
    <div className={`detail ${state.theme}`}>
      <h1>Detail Dentist id {id}</h1>
      <div className="detail-content">
        <p><strong>Name:</strong> {dentist.name}</p>
        <p><strong>Email:</strong> {dentist.email}</p>
        <p><strong>Phone:</strong> {dentist.phone}</p>
        <p><strong>Website:</strong> {dentist.website}</p>
      </div>
    </div>
  );
};

export default Detail;