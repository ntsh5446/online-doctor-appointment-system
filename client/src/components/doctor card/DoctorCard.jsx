 'use client'
import React from "react";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const DoctorCard=()=> {
  const list = [
    {
      name: "Anirudh Chaudhary",
      speciality:"Cardiologist",
      img: "/doctor-image.jpg",
      book: "Book Now",
    },
    {
        name: "Anirudh Chaudhary",
        speciality:"Cardiologist",
        img: "/doctor-image.jpg",
        book: "Book Now",
      },
      {
        name: "Anirudh Chaudhary",
        speciality:"Cardiologist",
        img: "/doctor-image.jpg",
        book: "Book Now",
      },
      {
        name: "Anirudh Chaudhary",
        speciality:"Cardiologist",
        img: "/doctor-image.jpg",
        book: "Book Now",
      },
   
  ];

  return (
    <div>
        <h1 className=" text-center font-bold text-2xl mb-10">Appointment with top Doctors</h1>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[350px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-around">
            <b>{item.speciality}</b>
             <Button color="primary">
                  Button
               </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
    </div>
  );
}

export default DoctorCard