import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [searchInput, setSearchInput] = useState("");
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  return (
    <div>
        <form>   
          <div class="search-area">
            <div class="search-bar">
              <div class="text-bar">
                  <input 
                      type="text" 
                      placeholder="Search teacher name or course code" 
                      onChange={handleChange} 
                      value={searchInput} 
                      autoComplete="off"
                      />
              </div>
              <button type="submit" onClick={() => props.onSearch(searchInput)}>
                  <i class="bi bi-search"></i>
              </button> 
            </div>
          </div>
        </form>
    </div>
  )
}

