import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Results from './Components/Results';
import Footer from './Components/Footer';

function App() {
  
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  
  const callApi = (params) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(data);
    setRequestParams(params);
  }
  
  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
