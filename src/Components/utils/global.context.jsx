import { createContext, useReducer, useEffect } from "react";

const TOGGLE_THEME = 'TOGGLE_THEME';
const SET_DENTISTS = 'SET_DENTISTS';
const ADD_FAV = 'ADD_FAV';

export const initialState = {theme: "light", dentists: [], favs: []};

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light'};
    case SET_DENTISTS:
      return { ...state, dentists: action.payload };
      case 'SET_FAVS':
      return { ...state, favs: action.payload };
      case ADD_FAV:
      return { ...state, favs: [...state.favs, action.payload] };
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch de la API para obtener los dentistas
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: SET_DENTISTS, payload: data }))
      .catch(error => console.error('Error fetching dentists:', error));
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
