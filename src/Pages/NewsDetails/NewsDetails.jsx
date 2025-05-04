import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import RightAside from '../../Components/HomeLayout/RightAside/RightAside';
import NewsDetailsCard from '../NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import Header from '../../Components/Header/Header';

const NewsDetails = () => {
    const data=useLoaderData()
    const {id}=useParams()
    
    const[news,setNews]=useState({})
    useEffect(()=>{
        const newsDetails=data.find((singleNews)=>singleNews.id==id)
        setNews(newsDetails)

    },[data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
        <header className='py-3'>
            <Navbar></Navbar>
        </header>
        <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 py-12'>
        <section className='col-span-9'>
            <h2 className='font-bold mb-5'>News details</h2>
            <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className='col-span-3'>
           <RightAside></RightAside>
        </aside>

        </main>
        </div>
    );
};

export default NewsDetails;