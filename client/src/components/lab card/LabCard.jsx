'use client'
import React from "react";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const LabCard=()=> {
  const list = [
    {
    name: "Fever profile1",
    test:" 5 test included",
    img: "labCard.png",
    price: "NPR 500",
    
  },
{
    name: "Fever profile2",
    test:" 5 test included",
    img: "labCard.png",
    price: "NPR 500",
   
  },
    {
        name: "Fever profile3",
        test:" 5 test included",
        img: "labCard.png",
        price: "NPR 500",
     
      },
    {
        name: "Fever profile4",
        test:" 5 test included",
        img: "labCard.png",
        price: "NPR 500",
    
      },
    
  ];

  return (
    <div>
        <h1 className=" text-center font-bold text-2xl mb-10">Book Lab Appointment</h1>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[200px]"
              src={item.img}
            />
          </CardBody>
          
            <CardFooter className=" flex-col text-small justify-center items-center">
            <div>
             <b>{item.name}</b>
            </div> 
            <div>{item.test}</div>
             <div>{item.book}</div>
             <div><b>{item.price}</b></div>
          </CardFooter>
        </Card>
      ))}
    </div>
    </div>
  );
}

export default LabCard