import React from "react";

export const Search = ({ onSubmit, query, setQuery }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Anime..."
        className="px-4 py-2 outline-none ring-2 ring-blue-500 rounded-md ring-opacity-20 shadow-md transition-all focus:ring-opacity-100 focus:-translate-x-1 focus:-translate-y-1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};
