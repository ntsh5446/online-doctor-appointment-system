'use client'
import React from "react";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const DiseaseCard=()=> {
  const list = [
    {
    name: "Lung Cancer1",
    img: "DiseaseCard.png",
    
  },
{
    name: "Lung Cancer2",
    img: "DiseaseCard.png",
  },
    {
        name: "Lung Cancer3",
        img: "DiseaseCard.png",
      },
    {
        name: "Lung Cancer4",
        img: "DiseaseCard.png",
    
      },
    
  ];

  return (
    <div>
        <h1 className=" text-center font-bold text-2xl mb-10">Learn about disease symptoms and preventive measure</h1>
        <div className=" m-4 p-4"> <Button color="secondary">View All Disease</Button></div>
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
           <div className="mt-4">
             <h1 className="text-center mx-16"><b>{item.name}</b></h1></div>
        </Card>
      ))}
    </div>
    </div>
  );
}

export default DiseaseCard