"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardsType, ProductType } from './Product.type'
import Link from 'next/link'
import Image from 'next/image'
import Cards from './Cards'

function Product() {
  const [products, setProducts] = useState<CardsType[]>()
  useEffect(()=>{
    axios.get('https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products').then(res=>{
      // console.log(res.data.data.data);
      setProducts(res.data.data.data)
    })
  },[])
  // if (!products) {
  //   return <div>loading</div>
  // }
  return (
    <div className='container mx-auto px-3'>
      <Image src={'https://mini-io-api.texnomart.uz/newcontent/slider/347/dyFPEw5MYDBCgQSopcXyBcpOE1HVhSugUCb7V3ad.webp'} alt='banner'className='w-full rounded-xl my-6'width={0} height={200}/>
      <h2 className='font-bold text-2xl'>Xit savdo</h2>
      <div className='flex flex-wrap justify-between '>
        {products?.map(item=>{
          return <Cards item={item}/>
        })}
      </div>
    </div>
  )
}

export default Product