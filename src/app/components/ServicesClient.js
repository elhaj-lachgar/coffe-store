"use client";

import Card from "./Card";
import { getCafeStore } from "./apistaf";

import { handlerLocation } from "./location";
import React, { useContext, useEffect, useState } from "react";

import "./ServicesStyles.css";
import Heading from "./Heading";

import { ACTION_TYPE, GlobalContext } from "../../../context/context";

function ServicesClient() {

  let [ value , setValue ] = useState(false);
  let { dispatch, state } = useContext(GlobalContext);

  let [globalData, setGlobalData] = useState([]);

  const { latlong, loading, locationErroMessage, trackerLocation } =
    handlerLocation();

  useEffect(() => {
    if (latlong) {
      getCafeStore(latlong, false)
        .then((res) => {
          setGlobalData(res);
          dispatch({
            type: ACTION_TYPE.SET_COFFE_STORE,
            payload: {
              data: res,
            },
          });
        })
        .catch((error) => console.log(error));
    }
  }, [latlong]);
  useEffect(() => {
    setValue(false)
    if (globalData.length == 0) {
      setGlobalData(state.data);
    }
  }, []);
  return (
    <div className="services-sites">
      <button
        onClick={() => {
          trackerLocation();
          setValue(true);
        }}
        className="btn"
      >
        {loading ? "lacoting..." : "get near one"}
      </button>
  
        <Heading content="near to you" pointer={true} />

      <div className="near-coffee">
        <div className="erro">
          {locationErroMessage
            ? `Samething is wrong : ${locationErroMessage}`
            : null}
        </div>
        <>
          {globalData ? (
            <>
              <div className="container-cards">
                {globalData.map((element) => {
                  return (
                    <Card
                      key={element.data.fsq_id}
                      pointer={false}
                      id={element.data.fsq_id}
                      name={element.data.categories[0].name}
                      urlimg={element.image}
                      lines={latlong}
                    />
                  );
                })}
              </div>
            </>
          ) : null}
        </>
      </div>
    </div>
  );
}

export default ServicesClient;
