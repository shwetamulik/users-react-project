import { memo, useRef, useState } from "react";

const AddUser = memo(({  setUserData }) =>
 {
  const [newUser, setNewUser] = useState("");

  console.count('AddUser rendered');

  const onHandleInput = (e) => {
    setNewUser(e.target.value);
  };

  const onAdd = () => {
    const payload = {
      name: newUser,
    };
    console.log("payload", payload);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((newData) => {
        setUserData((previousData) => [...previousData, newData]);
        setNewUser("");
      });
  };

  return (
    <label>
      Add User:
      <input placeholder="Add User" onChange={onHandleInput} value={newUser} />
      <button onClick={onAdd} >Add</button>
    </label>
  );
})
export default AddUser;