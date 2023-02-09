import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const urlHost = "https://localhost:7073/api";
  const [apiData, setApiData] = useState([]);

  const [name, setName] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`${urlHost}/TodoItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        isComplete: false,
      }),
    })
      .then((response) => response.json())
      .then(
        (result) => {
          // quiero que mandes a llamar a la api
          console.log("Success:", result);
          onGetItemsFromApi();
        },
        (error) => {
          console.error("Error:", error);
        }
      );
  };

  const onKeyUp = (e) => setName(e.target.value);

  const onChecked = (checkBox, item) => {
    const id = item.id;
    const value = checkBox.target.checked;
    console.log(id + ": " + value);
    // actualizar el item
    // METODO PUT O POST
    fetch(`${urlHost}/TodoItems/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name: item.name,
        isComplete: value,
      }),
    })
      .then((response) => response)
      .then(
        (result) => {
          onGetItemsFromApi();
        },
        (error) => {
          console.error("Error:", error);
        }
      );
  };

  const onGetItemsFromApi = () => {
    fetch(`${urlHost}/TodoItems`)
      .then((res) => res.json())
      .then(
        (data) => {
          setApiData(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    // HACER METODO GET retorne objeto
    onGetItemsFromApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <label>Name: </label>

          <input
            type="text"
            name="name"
            autoComplete="off"
            onKeyUp={onKeyUp}
          ></input>
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
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td className="checkbox-table">
                  <input
                    type={"checkbox"}
                    defaultChecked={item.isComplete}
                    onChange={(checkBox) => onChecked(checkBox, item)}
                  />
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
