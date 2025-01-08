import React, { useState } from 'react'
import { useContext } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react';

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const [bestseller,setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProducts=products.filter((item)=>(item.bestseller));
        setBestSeller(bestProducts.slice(0,5));
    },[])
  return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLER'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Though it helps many people, this medication may sometimes cause addiction. This risk may be higher if you have a substance use disorder (such as overuse of or addiction to drugs/alcohol). Take this medication exactly as prescribed to lower the risk of addiction. Ask your doctor or pharmacist for more details.</p>
            </div>
            {/* Rendering Product */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestseller.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    ))
                }
            </div>
        </div>
  )
}

export default BestSeller