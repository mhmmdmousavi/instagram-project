import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { client } from "../lib/index";

const Search = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");


  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const response = await client.get(`api/user/searchUser?search=${query}`);
      setResults(response.data.users);
      console.log(results);
      
    } catch (error) {
      console.error("Search failed:", error);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  // async function renderSearch() {
  //   try {
  //     const response = await client.get("api/user/searchUser")
  //     setUsers(response.data.users)
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }



  return (
    <div className=" py-4 bg-white self-start px-4 rounded-xl w-6/12 ">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <div className="flex items-center  rounded-md px-2 py-2 shadow-sm mb-4 bg-gray-200 ">
       
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search users..."
          className="flex-1 outline-none text-lg"
        />
      </div>

      <ul className="space-y-3">
        {results.map((user) => (
          <li
            key={user._id}
            className="flex items-center p-2 border rounded-md hover:bg-gray-50"
          >
            <img
              src={user.profilePicture}
              alt={user.username}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium">{user.username}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </li>
        ))}
        {results.length === 0 && query && (
          <p className="text-gray-400">No results found</p>
        )}
      </ul>
    </div>
  );
};
export default Search;
