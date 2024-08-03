import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';

const ProgramList = ({ programs, isAdmin, onEdit, onDelete, onPublish }) => {
  return (
    <div className="row gx-0">
      {programs.map(program => (
        <div
          className="col-md-3"
          key={program.id}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bestoffer_col1 py-3">
            <img src={program.imageUrl} alt="" className="img-fluid pb-3" />
            <h4>{program.name}</h4>
            <p>{program.description}</p>
            {isAdmin ? (
              <div>
                <Button variant="warning" onClick={() => onEdit(program)}>Edit</Button>
                <Button variant="danger" onClick={() => onDelete(program.id)}>Delete</Button>
                <Button variant="success" onClick={() => onPublish(program.id)}>Publish</Button>
              </div>
            ) : (
              <button>
                Learn More
                <FontAwesomeIcon icon={faArrowRight} className="ps-2" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramList;
