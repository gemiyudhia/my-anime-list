import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import axios from "axios";

export const TopManga = () => {
  const [popularManga, setPopularManga] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPopularAnimes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/top/manga`);
        const data = await response.data.data;
        setPopularManga(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPopularAnimes();
  }, []);

  return (
    <main className="mx-auto container">
      <Navbar setIsLoading={setIsLoading} />
      <div className="mt-12 space-y-6">
        <h1 className="font-semibold text-2xl">Top Manga</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-5 gap-y-3 items-center justify-center gap-x-3">
            {[popularManga] &&
              popularManga.map((popular) => (
                <ul key={popular.mal_id}>
                  <li>
                    <img
                      src={popular.images.webp.image_url}
                      alt={popular.title}
                      className="p-1 hover:bg-blue-500 rounded-md hover:scale-105 transition-all cursor-pointer"
                      style={{ width: "200px", height: "300px" }}
                    />
                  </li>
                </ul>
              ))}
          </div>
        )}
      </div>
    </main>
  );
};
