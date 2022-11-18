import React, { useState } from "react";

function Cruddd() {
  const [lists, setlist] = useState(list);
  return (
    <div>
      <Addlists setlist={setlist} />
      <br></br>
      <table>
        {lists.map((current) => (
          <tr>
            <td>{current.name}</td>
            <td>{current.age}</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

const list = [
  {
    id: 1,
    name: "surya",
    age: "23",
  },
  {
    id: 2,
    name: "pragash",
    age: "24",
  },
  {
    id: 3,
    name: "suryapragash",
    age: "25",
  },
];

function Addlists({ setlist }) {
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.element.name.value;
    const age = event.target.element.age.value;
    const newlist = {
      name,
      age,
    };
    setlist((prevList) => {
      return prevList.concat(newlist);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter your name"></input>
      <input type="text" name="age" placeholder="Enter your age"></input>
      <button type="submit">Add</button>
    </form>
  );
}
export default Cruddd;
