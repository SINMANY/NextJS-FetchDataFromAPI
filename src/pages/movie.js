
import React from 'react'
import { API_KEY } from '@/library/key';
import CardComponent from '@/component/CardComponent';

export default function movies({ movies }) {
  const data = movies?.results || [];
  return (
    <div className='container'>
      <div className="d-flex justify-content-evenly flex-wrap">
          {data.length > 0 && data.map((movie) => {
            return (
              <CardComponent
                key={movie.id}
                title={movie.title}
                imagePath={movie.backdrop_path}
                id={movie.id}
                overview={movie.overview}
                onClick={() => handleClickUrl(movie.url)}
              />
            );
          })}
      </div>
    </div>
  );
}
// use getServerSideProps to fetch data from external api
export async function getServerSideProps() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const respone = await fetch(url);

  if (!respone) {
    console.log("Error fetching data")
  }

  const movies = await respone.json()

  if (!movies) {
    console.log("Error");
    return {
      props: {
        movies: [],
      }
    }
  }

  return {
    props: {
      movies,
    }
  }
}