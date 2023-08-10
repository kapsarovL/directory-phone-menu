// Import React necessary packages
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
   // setting up state variables 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [directory, setDirectory] = useState([]);

  // Loading previous records
  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('directory')) || [];
    setDirectory(records);
  }, []);

  const addRecord = () => {
    const newRecord = { name, phone };
    const updatedDirectory = [...directory, newRecord];
    setDirectory(updatedDirectory);
    localStorage.setItem('directory', JSON.stringify(updatedDirectory));
    setName("");
    setPhone("");
  };

  const deleteRecord = (index) => {
    const updatedDirectory = directory.filter((_, i) => i !== index);
    setDirectory(updatedDirectory);
    localStorage.setItem('directory', JSON.stringify(updatedDirectory));
  };

  return (
    <div className="App">
      <h1 className="app__title">Directory Phone Menu</h1>
      <div className="form-container">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
        <button onClick={addRecord}>Save</button>
      </div>
      <div className="directory-container">
        {directory.map((record, i) => (
          <div key={i} className="directory-item">
            <div>{record.name}</div>
            <div>{record.phone}</div>
            <button onClick={() => deleteRecord(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
