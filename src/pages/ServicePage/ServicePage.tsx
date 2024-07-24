import React, { useEffect, useState } from "react";
import { IService } from "./ServiceCard";

import { useAuth } from "../../store/auth";

const ServicePage: React.FC = () => {
  // useEffect(  () => {
  //     const fetchServices = async () => {
  //         try {
  //             const response = await fetch('http://localhost:5000/api/data/services');
  //             const data = await response.json();
  //             setServices(data);
  //             console.log(data);

  //         } catch (error) {
  //             console.error('Error fetching services:', error);
  //         }
  //     };
  //     fetchServices();
  // }, []);

  const { services } = useAuth();

  return (
    <section>
      <div className="container">
        <h1 className="text-center lg:text-left lg:m-10 underline">Serivces</h1>
      </div>
      <div className="service-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-28 lg:gap-x-40 gap-y-40  mb-28 ">
        {
       services.map((currElem, index) =>{
          const { service, price, description, provider } = currElem;
          return (
            <div
              className="card border rounded-xl w-[300px] items-center hover:shadow-slate-50 hover:shadow-lg"
              key={index}
            >
              <div className="flex ">
                <img
                  src="/images/design500x500.png"
                  alt="our services info"
                  width="400"
                  className="mx-auto my-2"
                />
              </div>
              <div className="card-details mx-1 px-4">
                <div className="grid grid-cols-2">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2 className="text-2xl font-extrabold mt-2">{service}</h2>
                <p className="mb-2 ">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicePage;
