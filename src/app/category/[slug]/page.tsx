"use client"
import Cards from '@/components/Cards'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


type CategorySlugType ={
    name:string,
    sale_price:number,
    image:string,
    axiom_monthly_price:string
    id:number
}
function Category() {
    const {slug}=useParams()
    const [currentPage,setCurrentPage]=useState(1)
    const [category,setCategory]=useState<CategorySlugType[]>()

    useEffect(()=>{
        axios.get(`https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${currentPage}`).then(res=>{
            console.log(res.data.data.products);
            setCategory(res.data.data.products)
        })
    },[])
  return (
    <div className='container mx-auto px-4'>   
      <div className='flex justify-between flex-wrap'>
        {
            category?.map(item=>{
                return <div key={item.id}>
                    <Cards item={item}/>
                </div>
            })
        }
      </div>

    </div>
  )
}

export default Category 