import React, { useState, useEffect } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  const [ request, setRequest ] = useState();
  const [ response, setResponse ] = useState(null)
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1/')
    .then( response => response.json())
    .then( data => {
      setData(data);
      setLoading(false);
    })
    .catch( error => console.error(error));
  }, []);

  return (
    <>
      <Header />
        <div>Request Method: {request}</div>
        <div>
          URL: {loading ? <p>Loading...</p> : <Results data={data}/>}
        </div>
        <Form request={request} setRequest={setRequest} setResponse={setResponse} />
        <Results data={response} />
        <Footer />
    </>
  )
}
// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }


export default App;