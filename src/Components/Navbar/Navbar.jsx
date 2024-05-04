import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "../Search/Search";
import axios from "axios";
import { AnimeSearch } from "../../pages/animeSearch/AnimeSearch";

export const Navbar = ({ setSearchAnime }) => {
  const [query, setQuery] = useState("");
  const [searchAnime, setSearchAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const getAnimes = async (params) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${params}&sfw`
      );
      const data = await response.data.data;
      navigate("/anime-search");
      setSearchAnime(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    getAnimes(query);
  };

  return (
    <>
      <nav className="flex justify-between items-center py-8">
        <h1 className="text-2xl font-bold">MyAnimeList</h1>
        <div className="space-x-7 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/popular">Top Anime</Link>
          <Link to="/top-rated">Top Manga</Link>
        </div>
        <Search query={query} setQuery={setQuery} onSubmit={handleSubmit} />
      </nav>
      {isLoading && (
        <AnimeSearch searchAnime={searchAnime} />
      )}
    </>
  );
};
