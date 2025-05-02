import React, { use } from 'react';
import { NavLink } from 'react-router';
const CategoryPromise=fetch("/categories.json").then((res)=>res.json())
const Categories = () => {
    const Categories=use(CategoryPromise)
    console.log(Categories)
    return (
        <div>
            <h2 className='font-bold text-center'>All Categories{Categories.length}</h2>
            <div className='grid grid-cols-1 mt-3'>
                {
                    Categories.map(Category=>(
                        <NavLink key={Category.id}
                         className={`btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent`}
                         to={`/category/${Category.id}`}>
                        {Category.name}
                        </NavLink>
                    ))
                }
            </div>

            
        </div>
    );
};

export default Categories;