"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Card({ id, name, urlimg, Linkvalue, adresse, pointer, value, lines }) {
  let [ changes , setChanges ] = useState(false)
  async function fetchingData (){
    const url = '../api/CreateCaffeStore'
    const data = {
      id : id,
      name : name,
      adresse : adresse,
      crosse_adresse : adresse,
      image:urlimg,
    }

    const newdata = JSON.stringify(data);
    const response = await fetch( url , { method : 'POST' , body : newdata  })
                      .then((res)=>{
                        setChanges(true);
                      })
                      .catch((res)=>{
                        setChanges(false);
                      })

  }
  useEffect (()=>{
     fetchingData()
     console.log('hi')
  },[])
  return (
    <Link
      href={`/cafe-store/${id}?pointer=${pointer}&lines=${
        lines||"40.67,-73.95"
      }`}
      style={{ textDecoration: "none" }}
    >
      <div
        className="card"
        style={{
          width: "300px",
          height: "250px ",
          opacity: "0.8",
          backgroundColor: "#f6f6f6",
          borderRadius: "10px",
        }}
      >
        <div className="card-head">
          <h3
            style={{
              color: "rgb(64, 76, 198)",
              width: "80%",
              height: "45px",
              margin: "0px auto",
              overflow: "hidden",
              whiteSpace: "nowrap",
              paddingTop: "5px",
              textOverflow: "ellipsis",
            }}
          >
            {name}{" "}
          </h3>
        </div>
        <div
          className="photo"
          style={{
            margin: "auto",
            width: "80%",
            height: "70%",
            position: "relative",
          }}
        >
          <Image src={`${urlimg}`} alt="..." fill={true} />
        </div>
      </div>
    </Link>
  );
}
export default Card;
