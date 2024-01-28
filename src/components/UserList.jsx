import { useEffect, useRef, useState } from "react";
import User from "./User";
import AddUser from "./AddUser";
import Header from "./Header";

export default function UserList() {
  const [userData, setUserData] = useState([]);
  const [query, setQuery] = useState('');
  // const [filteredUsers, setFilteredUsers] = useState([]);
  const filteredUsers = userData.filter((item) => item.name.includes(query));
  console.count('UserList rendered!');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);

      });
  };
  const onSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
   
  };
  return (
    <div>
      <Header></Header>
      <AddUser setUserData={setUserData}></AddUser>
      <div>
            <input type="text" placeholder="search user" onChange={onSearch}/>
        </div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <User data={user} />
          </li>
        ))}
      </ul>
      </div>
  );
}
