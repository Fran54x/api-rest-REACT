import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const dataFromApi = [
    {
      id: 0,
      name: "Abraham",
      isComplete: true
    },
    {
      id: 1,
      name: "Manuel",
      isComplete: true
    },
    {
      id: 2,
      name: "Wicho",
      isComplete: true
    },
    {
      id: 3,
      name: "Pedro",
      isComplete: false
    },
    {
      id: 4,
      name: "Maria",
      isComplete: false
    },
    {
      id: 5,
      name: "Miguel",
      isComplete: true
    },
    {
      id: 6,
      name: "Toto",
      isComplete: false
    }
  ];
  const [apiData, setApiData] = useState([]);

  const [name, setName] = useState([]);

  const onSubmit = () => {
    fetch('https://example.com/posts', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      isComplete: false
    })
  })
    .then(response => response.json())
    .then(
      (result) => {
        // quiero que mandes a llamar a la api
        console.log('Success:', result)
      },
      (error) => {
          console.error('Error:', error);
    });
  }

  const onKeyUp = (e) => setName(e.target.value);

  const onChecked = (checkBox, id) => {
    const value = checkBox.target.checked
    console.log(id + ": " + value);
    // actualizar el item 
    // METODO PUT O POST
  //   fetch('https://example.com/posts', {
  //   method: 'POST',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     id: id,
  //     isComplete: value
  //   })
  // })
}
  

  useEffect(() => {
    // HACER METODO GET retorne objeto
    // fetch("https://jsonplaceholder.typicode.com/users/")
    //     .then(res => res.json())
    //     .then(
    //         (data) => {
    //           console.log(data)
    //           setApiData(data);
    //         },
    //         (error) => {
    //           console.log(error);
    //         }
    //     )
    setApiData(dataFromApi)
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={onSubmit}>
          <label>Name: </label>
        
              <input type="text" name='name' autoComplete='off'
                      onKeyUp={onKeyUp}></input>
              <input type="submit" value="Submit"></input>
        </form>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th className="checkbox-table">Complete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item, index) => (
              <tr key={index}>
                <td >{item.id}</td>
                <td >{item.name}</td>
                <td className="checkbox-table">
                  <input type={'checkbox'} 
                        defaultChecked={item.isComplete}
                        onChange={(checkBox) => onChecked(checkBox, item.id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
