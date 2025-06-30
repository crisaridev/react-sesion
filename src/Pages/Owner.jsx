import Card from "../components/Card"
import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";
export default function Owner(){
    const [movies, setMovies] = useState([
      {
        title: "Aristogatos",
        description: "With the help of a smooth talking tomcat, a family of Parisian felines set to inherit a fortune from their owner try to make it back home after a jealous butler kidnaps them and leaves them in the country.",
        year: 1970,
        duration: "1h 18m",
        image: "https://m.media-amazon.com/images/M/MV5BMTU1MzM0MjcxMF5BMl5BanBnXkFtZTgwODQ0MzcxMTE@._V1_FMjpg_UX965_.jpg"
      },
      {
        title: "12 Years a Slave",
        description: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
        year: 2013,
        duration: "2h 14m",
        image: "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_FMjpg_UX509_.jpg"
      },
      {
        title: "The Emperor's New Groove",
        description: "Emperor Kuzco is turned into a llama by his ex-administrator Yzma, and must now regain his throne and his human form with the help of Pacha, a gentle llama herder.",
        year: 2000,
        duration: "1h 18m",
        image: "https://m.media-amazon.com/images/M/MV5BMjM2MWU5ZDEtNDZlZC00ZmQ2LThiOTEtMmZkMzAxMmI5MGIyXkEyXkFqcGc@._V1_FMjpg_UX810_.jpg"
      },
    ])
  return(
    <>
    <h1 style={{textAlign:"center", paddingTop:"30px"}}>About me</h1>
    <Card/>
    <div>
        <h2 style={{ fontSize: "20px", marginBottom: "0px", marginTop: "40px", textAlign: "center"}}>Movies</h2>
        <ul style={{ flexDirection: "column"}}>
                  {movies.map((movie) => {
                    console.log(movie.description);
                    return (
                      <li key={movie.title}>
                        <MovieList key={movie.title} movieObject={movie} />
                      </li>
                    );
                  })}
                </ul>
    </div>

    </>
  )
}