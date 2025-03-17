"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Input from "./Input";

type TopCategoryType = { title: string; slug: string };
function Navbar() {
  const [navbar, setNavbar] = useState<TopCategoryType[]>([]);

  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
      .then((res) => {
        setNavbar(res.data.data.data);
        console.log(res.data.data.data);
      });
  }, []);

  console.log();

  return (
    <div className="container mx-auto">
      <div className="p-2 pb-3 bg-amber-300 flex  items-center gap-20">
        <Link href={'/'}>
          <Image
            src={"https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"}
            alt="logo"
            width={200}
            height={50}
          />
        </Link>
       <Input/>
      </div>
      <div className="flex justify-between p-4">
        {navbar.map((item, index) => {
          return (
            <ul key={index} className="">
              <Link href={"/category/" + item.slug}>
                {" "}
                <li className="text-xl font-bold">{item.title}</li>
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
