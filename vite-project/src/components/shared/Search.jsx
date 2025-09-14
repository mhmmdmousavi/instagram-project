import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { client } from "../lib/index";

const Search = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const response = await client.get(`/api/user/u/${query}`);
      setResults(response.data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Search</h1>
      <div className="flex items-center border rounded-md px-2 py-2 shadow-sm mb-4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search users..."
          className="flex-1 outline-none"
        />
      </div>

      <ul className="space-y-3">
        {results.map((user) => (
          <li
            key={user.id}
            className="flex items-center p-2 border rounded-md hover:bg-gray-50"
          >
            <img
              src={user.avatar}
              alt={user.username}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium">{user.username}</p>
              <p className="text-sm text-gray-500">{user.bio}</p>
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
