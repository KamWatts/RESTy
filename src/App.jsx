import React, { useReducer } from 'react';
import './App.scss';
import History from './Components/History';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const initialState = {
  loading: false,
  response: null,
  request: null,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SET_RESPONSE':
      return { ...state, response: action.payload };
    case 'SET_REQUEST':
      return { ...state, request: action.payload };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApiCall = async (formData) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await fetch(formData.url, {
        method: formData.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.body),
      });
      const data = await response.json();
      dispatch({ type: 'SET_RESPONSE', payload: data });
      dispatch({ type: 'SET_REQUEST', payload: `${formData.method} ${formData.url}` });
      dispatch({
        type: 'ADD_TO_HISTORY',
        payload: { method: formData.method, url: formData.url, response: data },
      });
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the API call
    }
  };

  return (
    <>
      <Header />
      <Form request={state.request} setRequest={(req) => dispatch({ type: 'SET_REQUEST', payload: req })} setResponse={(res) => dispatch({ type: 'SET_RESPONSE', payload: res })} handleApiCall={handleApiCall} />
      <Results data={state.response} />
      <History history={state.history} setResponse={(res) => dispatch({ type: 'SET_RESPONSE', payload: res })} />
      <Footer />
    </>
  );
}

export default App;
