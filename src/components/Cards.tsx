import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductType } from "./Product.type";

function Cards({ item }: ProductType) {
  return (
   
     <Link href={"/product/" + item.id}>

<div className="border-1 w-65 text-center mb-2 px-2 py-5 rounded-2xl">
    <div className="w-full h-64 relative flex items-center justify-center">
      <Image  src={item.image} alt={item.name} width={0} height={0} className="w-full object-contain h-full" />
    </div>
    <p>{item.name}</p>
    <p className="mt-2 font-bold">{item.axiom_monthly_price}</p>
    <p className="mt-2 font-bold text-xl">
      {item.sale_price.toLocaleString("ru")} som
    </p>
</div>
</Link>


  );
}

export default Cards;
