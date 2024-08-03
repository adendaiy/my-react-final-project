


// src/components/BestOffer.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/goal1.png";
import img2 from "../assets/goal2.png";
import img3 from "../assets/goal3.png";
import img4 from "../assets/goal4.png";

const BestOffer = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await axios.get('http://localhost:5000/programs');
      setPrograms(response.data);
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  return (
    <div className="container-fluid BestOffers">
      <div className="container">
        <div className="row gx-0 py-4 align-items-center">
          <div className="col-md-7">
            <h1 className="main_heading pe-md-5 me-md-5">
              The Best Programs We Offer For You
            </h1>
          </div>
          <div className="col-md-5">
            <p>
              Stop searching, start thriving! We've handpicked programs just
              for you. Unlock your potential, from fitness feats to career
              climbs. Let's make magic happen!
            </p>
          </div>
        </div>
        <div className="row gx-0">
          {programs.filter(program => program.published).map(program => (
            <div
              className="col-md-3"
              key={program.id}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bestoffer_col1 py-3">
                <img src={img1} alt="" className="img-fluid pb-3" />
                <h4>{program.name}</h4>
                <p>{program.description}</p>
                <button>
                  Learn More <FontAwesomeIcon icon={faArrowRight} className="ps-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestOffer;

