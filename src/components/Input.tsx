import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type input = {
  image: string;
  name: string;
  sale_price: string;
  id: number;
};
type product = input[];
type obshiyinput = {
  total: number;
  products: product;
};
function Input() {
  const [input, setInput] = useState<string>();
  const [isOPen, setIsOpen] = useState(false);
  const [data, setData] = useState<obshiyinput>();

  useEffect(() => {
    if (input !== "") {
      axios
        .get(`https://gw.texnomart.uz/api/common/v1/search/result?q=${input}`)
        .then((res) => {
          console.log("xdcfvgbhn", res.data.data);
          setData(res.data.data);
        });
    }
  }, [input]);
  return (
    <div>
      <div className="flex items-center justify-center p-5">
        <div className="flex">
          <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="pointer-events-none absolute w-5 fill-gray-500 transition"
            >
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
            </svg>
          </div>
          <input
          placeholder="Qidirish"
            value={input}
            onChange={(e) => {
              setInput(e.currentTarget.value);
              console.log(input);
            }}
            onClick={() => {
              setIsOpen(true);
            }}
            type="text"
            className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
          />
          <input
            type="button"
            defaultValue="Search"
            className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
          />
        </div>
      </div>
      {isOPen && (
        
       <> 
       <div onClick={()=>{
        setIsOpen(false)
       }} className="absolute bg-black w-full left-0 h-full z-10 opacity-70"></div>
         <div className="bg-white w-[520px] overflow-auto z-20 absolute h-[650px] rounded-xl  ">
          <div className="flex justify-between items-center px-5 py-3">
            <p>Qidirilgan mahsulotlar</p>
            <p
              onClick={() => {
                setIsOpen(false);
                setInput("");
              }}
              className="font-bold "
            >
              X
            </p>
          </div>
          <div className=" w-[500px] flex flex-wrap justify-center border-0 h-full bg-white">
            {data?.products.map((item) => {
              return (
                <div className="flex justify-center flex-col items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                  />
                  <p className="w-30">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
       </>
      )}
    </div>
  );
}

export default Input;
