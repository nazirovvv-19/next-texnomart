"use client";
import { Button, Spin } from "antd";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProductPage() {
  type Mahsulotpage = {
    name: string;
    sale_price: number;
    large_images: string;
  };
  const [mahsulot, setMahsulot] = useState<Mahsulotpage>();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=` + id)
      .then((res) => {
        console.log(res.data.data.data);
        setMahsulot(res.data.data.data);
      });
  }, [id]);
  if (!mahsulot) {
    return <Spin/>
  }
  return (
    <div className="container">
      <div className="flex justify-around items-center mt-10">
        <Image src={mahsulot.large_images[0]} alt={mahsulot?.name} width={450} height={450}/>
        <div className="flex flex-col gap-5">
        <p className="text-2xl"> {mahsulot?.name}</p>
        <p className="font-bold text-2xl"> {mahsulot?.sale_price.toLocaleString("ru")} som</p>
        <div>
            <Button size="large" type="primary">xarid qilish</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
