import React from "react";

function Child(props) {
  return (
    <div>
      <h1>{props.info}</h1>
      <button className="edit" onClick={() => props.editItem(props.index)}>
        Edit
      </button>
      <button className="delete" onClick={() => props.deleteItem(props.index)}>
        Delete
      </button>
    </div>
  );
}
export default Child;
