"use client";
import styles from "./page.css";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Card from "./components/Card";
import { getCafeStore } from "@/app/components/apistaf";
import { useEffect, useState } from "react";
import ServicesClient from "./components/ServicesClient";

export default function Home() {
  let [resourseData, setResourseData] = useState([]);

  useEffect(() => {
    getCafeStore("", true)
      .then((res) => {
        setResourseData(res);
      })
      .catch((error) => console.log(error));
  }, []);


  
  return (
    <main className={styles.main}>
      <div className="container">
        <Header />
        <ServicesClient />
        <Heading content="where ever the place " pointer={true} />
        {resourseData.length !== 0 ? (
          <div className="container-cards">
            {resourseData.map((ele) => {
              if (ele.data.categories[0].name === undefined) {
                return null;
              }
              return (
                <Card
                  key={ele.data.fsq_id}
                  Linkvalue={true}
                  id={ele.data.fsq_id}
                  name={ele.data.categories[0].name}
                  urlimg={ele.image}
                  adresse={ele.data.location.address}
                  pointer={false}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </main>
  );
}
