import { useState } from "react";
import { client } from "../lib/index";

const Search = () => {
  const [search, setSearch] = useState(false);
  const SearchBar = async () => {
    try {
      setSearch(true);
      const response = await client.get("/api/user/searchUser");
      const data = response.data;
      setSearch(data);
    } catch {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Search</h1>
      <div className=" border-b-2">
        <input
          type="text"
          placeholder="Search"
          className=" border rounded-md px-2 py-2"
        />
      </div>
      <div className=" flex justify-between">
        <p>Recent</p>
        <a>Clear all</a>
      </div>

      <div>
        <ul>
          <img src="" alt="" />
          <span></span>
          <p></p>
        </ul>
      </div>
    </div>
  );
};

export default Search;
