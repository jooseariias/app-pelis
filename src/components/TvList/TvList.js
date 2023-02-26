import React, { useEffect, useState } from "react";
import "./TvList.css";
import { useParams } from "react-router-dom";
import CardsTv from "../card/CardTv/CardTv";

const TvList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getDataTv();
  }, []);

  useEffect(() => {
    getDataTv();
  }, [type]);

  const getDataTv = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="tv__list">
      <h2 className="list__title_tv">
        {(type ? type : "SERIES").toUpperCase()}
      </h2>
      <div className="list__cards_tv">
        {movieList.map((tv) => (
          <CardsTv tv={tv} />
        ))}
      </div>
    </div>
  );
};

export default TvList;