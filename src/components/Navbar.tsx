"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Navbar() {
    type titleType = { title: string }
    
    const [navbar, setNavbar] = useState<titleType[]>([])

    useEffect(() => {
        axios.get('https://gw.texnomart.uz/api/web/v1/header/top-categories')
            .then(res => {
                setNavbar(res.data.data.data)
                console.log(res.data.data.data)
            })
    }, [])

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between p-4'>
                {
                    navbar.map((item, index) => {
                        return    <ul key={index} className=''>
                        <li className='text-xl font-bold'>{item.title}</li>
                    </ul>
                    })
                }
            </div>
        
        </div>
    )
}


export default Navbar
