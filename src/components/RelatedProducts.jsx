import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
    const {products}=useContext(ShopContext);
    const[related,setRelated]=useState([]);
    useEffect(()=>{
        if(products.length > 0){
        let productsCopy=products.slice();
        productsCopy=productsCopy.filter((item)=>category===item.category);
        productsCopy=productsCopy.filter((item)=>subCategory===item.subCategory);
        setRelated(productsCopy.slice(0,5));
        }
    },[products])
  return (    <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        {/* <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Though it helps many people, this medication may sometimes cause addiction. This risk may be higher if you have a substance use disorder (such as overuse of or addiction to drugs/alcohol). Take this medication exactly as prescribed to lower the risk of addiction. Ask your doctor or pharmacist for more details.</p> */}
    </div>
    {/* Rendering Product */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            related.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
    </div>
</div>
  )
}

export default RelatedProducts