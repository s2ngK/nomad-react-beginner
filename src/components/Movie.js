import {Link} from "react-router-dom";

function Movie({ movie }) {
  return (
    <div>
      <h1>
        <Link to={`/movie/${movie.id}`}>
          {movie.title}
        </Link>
      </h1>
      <img src={movie.medium_cover_image} />
      <p>
        <strong>genre: </strong> {movie.genres.join(", ")}
      </p>
      <p>
        <strong>summary: </strong>
        {movie.summary}
      </p>
      <div>
        <strong>torrent: </strong>
        <ul>
          {movie.torrents.map((t) => (
            <li key={t.date_uploaded_unix}>
              <a href={t.url}>[{t.quality}]</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
