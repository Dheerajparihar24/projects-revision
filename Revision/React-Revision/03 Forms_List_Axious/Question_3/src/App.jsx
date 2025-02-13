import { Search } from "./components/Search";
import { UserProfile } from "./components/UserProfile";
import userData from "./users.json";
import "./App.css";
import { useMemo, useState } from "react";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = useMemo(() => {
    // Use useMemo for optimization
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return users.filter((user) => {
      return user.name.toLowerCase().includes(lowerCaseSearchTerm); // Filter by name
    });
  }, [users, searchTerm]); // Dependency array is crucial

  return (
    <>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <div>
        {filteredUsers.map((user, index) => (
          <UserProfile
            key={index}
            img={user.img}
            name={user.name}
            bio={user.bio}
            location={user.location}
            skills={user.skills}
            isOnline={user.isOnline}
          />
        ))}
      </div>
    </>
  );
}

export default App;
