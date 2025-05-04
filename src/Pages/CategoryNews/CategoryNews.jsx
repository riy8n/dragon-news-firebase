import { } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard/NewsCard';

const CategoryNews = () => {
    const {id}=useParams()
    const data=useLoaderData()
    const [categoryNews,setCategoryNews]=useState([])
    useEffect(()=>{
        if(id==0){
            setCategoryNews(data)
            return;
        }
        else if(id=="1"){
            const flirtedData=data.filter((news)=>news.others.is_today_pick==true)
            setCategoryNews(flirtedData)
        }
        else{  const flirtedData=data.filter((news)=>news.category_id==id)
            setCategoryNews(flirtedData)}
     
  
    },[data,id])
    return (
        <div>
            <h1 className='font-bold mb-5 '>Total <span className='text-secondary'> {categoryNews.length}</span> news found</h1>
            <div>
                {
                    categoryNews.map((news)=>(
                        <NewsCard key={news.id} news={news}></NewsCard>
                    ))
                }
            </div>

        </div>
    );
};

export default CategoryNews;