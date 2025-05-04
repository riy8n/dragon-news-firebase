import { FaStar, FaRegEye } from "react-icons/fa";
import { Link } from "react-router";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    id,
  } = news;

  const publishedDate = new Date(news.author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-box shadow-md overflow-hidden grid grid-cols-1 gap-2 my-3">
     <div className="border-b flex justify-around bg-base-200">
     <div className="flex items-center gap-4 p-4 ">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">{publishedDate}</p>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <span><CiBookmark size={24}/></span>
       <span><CiShare2  size={24}/></span>

      </div>
     </div>

      <div className="px-4 pt-4">
        <h1 className="text-lg font-bold mb-3">{title}</h1>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      <div className="p-4 text-sm text-gray-600">
        
          {details.length > 200?(
              <>
                 {
                  details.slice(0, 200)
                 } ...
               
                 <Link
          to={`/news-details/${id}`}
          className="text-orange-500 font-semibold mt-2 inline-block"
        >
          Read More
        </Link>
                 
              </>

          )
        
            
            :( details)}
       
      
      </div>

      <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "text-orange-500" : "text-gray-300"} />
          ))}
          <span className="ml-2 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
