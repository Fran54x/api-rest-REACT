import logo from './logo.svg';
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

  useEffect(() => {
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

        <form>
          <label> Id:
            <input type="number" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <label> Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <label> Complete:
            <input type="checkbox" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>

        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Complete</th>
          </thead>
            {apiData.map((item, index) => (
              <tr>
              <td key={index}>{item.id}</td>
              <td key={index}>{item.name}</td>
              <td key={index}><input type={'checkbox'} defaultChecked={item.isComplete}></input></td>
              </tr>
            ))}
        </table>

        {/* <div style={{display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "800px"}}>
          {apiData.map((item, index) => (
            <div key={index}>{"Nombre: " + item.name}{" Edad: " + item.age} + ","</div>
          ))}
        </div> */}
      </header>
    </div>
  );
}

export default App;
