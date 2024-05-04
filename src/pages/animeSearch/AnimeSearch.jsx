export const AnimeSearch = ({searchAnime}) => {
  return (
      <div className="container mx-auto">
      <div className="mt-12 space-y-6">
        <h1 className="font-semibold text-2xl">tes</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-5 gap-y-3 items-center justify-center gap-x-3">
            {[searchAnime] &&
              searchAnime.map((anime) => (
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
  );
};
