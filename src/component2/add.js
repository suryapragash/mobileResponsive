import React from "react";
import { useState } from "react";

import Child from "./edit";

function Crud() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState();
  const [error, setError] = useState("");

  const onAdd = () => {
    if (name.length === 0) {
      setError("Please enter your name");
    } else {
      setData((newData) => [...newData, name]);
      setName("");
      setError("");
    }
  };

  const onDelete = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };
  const onEdit = (index) => {
    setName(data[index]);
    setEdit(index);
  };
  const onUpdate = () => {
    data.splice(edit, 1, name);
    setData([...data]);
    setName("");
  };

  return (
    <>
      <div>
        <div>
          <h1> CRUD Operations </h1>

          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>{error}</p>
          <button className="add" onClick={onAdd}>
            Add
          </button>
          <button className="update" onClick={() => onUpdate()}>
            Update
          </button>

          {data.map(function (item, index) {
            return (
              <Child
                info={item}
                index={index}
                deleteItem={onDelete}
                editItem={onEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Crud;
