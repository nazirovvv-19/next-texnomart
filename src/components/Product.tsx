"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductType } from './Product.type'
import Link from 'next/link'
import Image from 'next/image'

function Product() {
  const [products, setProducts] = useState<ProductType[]>()
  useEffect(()=>{
    axios.get('https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products').then(res=>{
      console.log(res.data.data.data);
      setProducts(res.data.data.data)
    })
  },[])
  // if (!products) {
  //   return <div>loading</div>
  // }
  return (
    <div className='container mx-auto px-3'>
      <h2 className='font-bold text-2xl'>Xit savdo</h2>
      <div className='flex flex-wrap justify-between '>
        {products?.map(item=>{
          return <div className='border-1 w-65 text-center mb-2 px-2 py-5 rounded-2xl' >
            <Link href={'/product/'+item.id}> <Image src={item.image} alt={item.name} width={300} height={200}/></Link>
            <p>{item.name}</p>
            <p className='mt-2 font-bold'>{item.axiom_monthly_price}</p>
            <p className='mt-2 font-bold text-xl'>{item.sale_price.toLocaleString('ru')} som</p>
            
          </div>
        })}
      </div>
    </div>
  )
}

export default Product