import {img_300, unavailable} from "../confige/config";
import "./SingleContent.scss";


const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (
        <div className="media">
           <img className="poster"
            src={ poster ? `${img_300}/${poster}`:unavailable }  alt={title}/>
           <b className="title">
            {title}</b>
           <span className="sunTitlie">
               {media_type === "tv" ? "tv series" : "movie"}
               <span className="sunTitle"> 
               {date}</span>

           </span>
            
            </div>
    )
}

export default SingleContent
