import React, { } from 'react';
import { Link } from 'react-router';


const NewsDetailsCard = ({news}) => {
    console.log(news)
  
    return (
        <div className='space-y-5'>
            <img className='w-full h-[400px] object-cover' src={news.image_url} alt="" />
            <h1 className='text-2xl'>
                {news.title}
            </h1>
            <p>{news.details}</p>
            <Link className='btn btn-secondary rounded-2xl' to={`/category/${news.category_id}`}>All news in this category</Link>

        </div>
    );
};

export default NewsDetailsCard;