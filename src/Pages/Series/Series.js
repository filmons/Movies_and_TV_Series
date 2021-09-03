import React, { useEffect, useState } from "react"
import axios from "axios";
import Genres from "../../components/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";

function Series ()  {
    const [content, setContent] = useState([]);
	const [page, setPage] = useState(1); //par defolte pour que la page comence par 1
	const [numOfPages, setnumOfPages] = useState(); //pour voir le numero de pade quon veux
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [genres, setGenres] = useState([]);
	const genreforURL = useGenre(selectedGenres);

	const fetcheMovis = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
		);
		setContent(data.results);
		setnumOfPages(data.total_pages);

		console.log(data);
	};
	useEffect(() => {
		fetcheMovis();
		// eslint-disable-next-line
	}, [page, genreforURL]);
	// call the function  genreforURL for uploding the page

    return (
        <div>
            <span className="pageTitle">TV Series</span>
            <p>f</p>
            <Genres 
				type="Tv"
				selectedGenres={selectedGenres}
				setSelectedGenres={setSelectedGenres}
				genres={genres}
				setGenres={setGenres}
				setPage={setPage}
			/>

            <div className="trending">
				{content &&
					content.map((c) => (
						<SingleContent
							key={c.id}
							id={c.id}
							poster={c.poster_path}
							title={c.title || c.name}
							date={c.first_air_date || c.release_date}
							media_type="tv"
							vote_average={c.vote_average}
						/>
					))}
			</div>
			{numOfPages > 1 && (
				<CustomPagination setPage={setPage} numOfPages={numOfPages} />
			)}
        </div>
    )
}

export default Series
