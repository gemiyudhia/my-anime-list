import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../../Components/Navbar/Navbar";

export const Home = () => {
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAnimes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime`);
        const data = response.data.data;
        setAnimes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAnimes();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Navbar setIsLoading={setIsLoading} />
        <div className="mt-12 space-y-6">
          <h1 className="font-semibold text-2xl">Anime</h1>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-5 gap-y-3 items-center justify-center gap-x-3">
              {animes.map((anime) => (
                <ul key={anime.mal_id}>
                  <li>
                    <img
                      src={anime.images.webp.image_url}
                      alt={anime.title}
                      className="p-1 hover:bg-blue-500 rounded-md hover:scale-105 transition-all cursor-pointer"
                      style={{ width: "200px", height: "300px" }}
                    />
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
