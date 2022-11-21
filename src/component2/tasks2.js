import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

function Task() {
  const [details, setDetails] = useState({
    ten: "",
    list: "",
    event: "",
  });

  const [items, setItems] = useState([]);
  const data = [
    { country: "chennai", id: 1 },
    { country: "delhi", id: 1 },
    { country: "mumbai", id: 1 },
  ];
  const [options] = useState(data);

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems((newData) => [...newData, details]);
    console.log("asddf", items);
  };

  return (
    <div class="dropdown text-center p-5">
      <span className="fs-3">Input type</span>
      <button
        class="btn btn-secondary dropdown-toggle "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" href="#">
            <span>Name</span>
            <input
              value={details.event}
              name="event"
              type="name"
              onChange={onChange}
            ></input>
          </a>
        </li>
        <li>
          <a class="dropdown-item " href="#">
            <span>Date</span>
            <input
              value={details.list}
              name="list"
              type="date"
              onChange={onChange}
            ></input>
          </a>
        </li>
        <li>
          <a class="dropdown-item " href="#">
            <span>Number</span>
            <input
              value={details.ten}
              name="ten"
              type="number"
              onChange={onChange}
            />
          </a>
        </li>
        <li>
          <div>
            <h2>input type</h2>
            <Multiselect options={options} displayValue="country" />
          </div>
        </li>
      </ul>
      <button className="btn-primary mx-5" onClick={addItem}>
        SUBMIT
      </button>
      <br />
      <br />
      {items.map((item) => (
        <tr>
          <th className="px-2" key={item.id}>
            {" "}
            Name: {item.event}, Number :{item.ten}, Date:{item.list}
          </th>
        </tr>
      ))}
    </div>
  );
}
export default Task;
