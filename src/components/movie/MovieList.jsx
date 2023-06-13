import React, { useEffect, useState } from "react";
import "./movielist.scss";

import tmdbApi from "../../api/tmdbApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import VideoCard from "../video-card/VideoCard";
const MovieList = ({ category, type, id }) => {
  const [movie, setMovie] = useState([]);
  let res = null;

  useEffect(() => {
    const getMovieType = async () => {
      if (type !== "similar") {
        switch (category) {
          case "movie":
            res = await tmdbApi.getMovieList(type);
            break;
          case "tv":
            res = await tmdbApi.getTvList(type);
            break;
          default:
            console.error();
        }
      } else {
        res = await tmdbApi.similar(category, id);
      }
      setMovie(res.data.results);
    };

    getMovieType();
  }, []);
  return (
    <div className="movie-list">
      <Swiper
        slidesPerView={4.7}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {movie.map((video, index) => {
          return (
            <SwiperSlide key={index}>
              <VideoCard category={category} video={video} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieList;
