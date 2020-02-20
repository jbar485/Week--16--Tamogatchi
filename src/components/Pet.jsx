import React from "react";
import PropTypes from "prop-types";


function Pet(props){
  
  setInterval(() => {
    props.dHealth(props.id)
  }, 1000);


  return(
    <div>
    <h4> {props.name}</h4>
    <div>
    <p>{props.health}</p>
    <button onClick={() => props.onIncreseHealth(props.id)} type='submit'>Feed</button>
    </div>
    </div>
  );
}

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired
};

export default Pet;
