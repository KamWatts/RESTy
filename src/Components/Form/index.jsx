import React, { useState } from 'react';
import './Form.scss';


function Form({ handleApiCall }) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: body
    };
    handleApiCall(formData);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.id.toUpperCase());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span id='get' className={ method === 'GET' ? 'active' : ''} onClick={handleMethodChange}>GET</span>
          <span id='post' className ={ method === 'POST' ? 'active' : ''} onClick={handleMethodChange}>POST</span>
          <span id='put' className={ method === 'PUT' ? 'active' : ''} onClick={handleMethodChange}>PUT</span>
          <span id='delete' className={ method === 'DELETE' ? 'active' : ''} onClick={handleMethodChange}>DELETE</span>
        </label>
        {(method === 'POST' || method === 'PUT')  &&
        <label>
          <span> Body: </span>
          <textarea name='body' value={body} onChange={ (e) => setBody(e.target.value)} />
        </label>}
      </form>
    </>
  );
}

export default Form;
