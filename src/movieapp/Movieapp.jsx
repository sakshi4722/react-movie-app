import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./Moviecard";

const searchMovieByName = async (movieName = "") => {
  const params = new URLSearchParams({
    api_key: "3fd2be6f0c70a2a598f084ddfb75487c",
    query: movieName,
  });

  const URL = `https://api.themoviedb.org/3/search/movie?${params}`;
  const movies = await fetch(URL);
  const data = await movies.json();
  return data;
};

const Movieapp = () => {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchMovies = async (page) => {
       const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${page}`;
       const response = await fetch(URL);
        const data = await response.json();
        return data.results;
       };


  const URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

  useEffect(() => {
    const FetchData = fetch(URL);
    FetchData.then((response) => {
      return response.json();
    })
      .then((data) => {
        // console.log(data.results);
        setMovieData(data.results);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const loadMoreMovies = async () => {
      const moreMovies = await fetchMovies(page);
      setMovieData((prevMovies) => [...prevMovies, ...moreMovies]);
    };

    loadMoreMovies();
  }, [page]);

  useEffect(() => {
    const infinitescroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", infinitescroll);

    return () => {
      window.removeEventListener("scroll", infinitescroll);
    };
  }, [page]);

  useEffect(() => {
     console.log(search, "useeffect search");
    if (!search) {
      return;
    }
    async function getMovies() {
       const data = await searchMovieByName(search);
      setMovieData(data.results);
    }
    getMovies();
 }, [search]);
  return (
    <>
      <label className="m-5 flex justify-end">
        <input
          type="text"
          className="px-4 py-2 border rounded"
          placeholder="Search movies"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>

      <div className="flex flex-wrap justify-center">
        {movieData ? (
          movieData.map((movie, i) => {
            return <MovieCard key={i} data={movie} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Movieapp;

