import React, { useEffect, useState } from "react";
import axios from "axios";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import "../index.css";

const RandomUser = () => {
  const [data, setData] = useState(null);

  const userApi = "https://randomuser.me/api/";

  const fetchData = async () => {
    try {
      const response = await axios.get(userApi);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <div className="container">
       
          {data && (
            <div style={{textAlign:"center"}}>
              <div style={{ display: "flex", alignItems: "center", marginRight:"4rem"}}>
                <img
                  style={{ borderRadius: "70px", marginTop: "4rem", }}
                  src={data.results[0].picture.large}
                  alt=""
                />

                <h2 style={{ marginLeft: "40px", marginTop:"70px"}}>
                  {data.results[0].name.title}{" "}
                  <span>{data.results[0].name.first}</span>{" "}
                  <span>{data.results[0].name.last}</span>
                </h2>
            
              </div>

     <div style={{marginLeft:"70px"}}> <div style={{display: "flex", alignItems: "center"}}>
              
                <img className="icons" src={email} alt="" />
                <p>{data.results[0].email}</p>
              </div>


              <div style={{display: "flex", alignItems: "center"}}>
              
                    <img className="icons" src={phone} alt="" />
              <p>{data.results[0].phone}</p>
            </div>
      
            <div style={{display: "flex", alignItems: "center"}}>
              
            <img className="icons" src={location} alt="" />
              <p>
                {data.results[0].location.city} -{" "}
                <span>{data.results[0].location.country}</span>
              </p>
      </div>

              
              <p>Age: {data.results[0].registered.age}</p>
              <p>
                Register Date:{" "}
                {getFormattedDate(data.results[0].registered.date)}
              </p>
            </div></div>
             
          )}
        </div>
      </div>
      <div className="buton">
        <button onClick={fetchData}>Random User</button>
      </div>
    </div>
  );
};

export default RandomUser;
