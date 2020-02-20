import React from "react";
import Pet from "./Pet"
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap'


function PetList(props){
  console.log(props.petList);

  function handleIncreaseHealth(){

  }
  return (
    <div>
    <Row>
      <Col></Col>
      <Col>
        {props.petList.map((pet) =>
             <Pet
             onIncreseHealth = {props.onIncreseHealth}
             dHealth = {props.dHealth}
             name={pet.name}
              health = {pet.health}
              id ={pet.id}
              key={pet.id}/>
         )}
      </Col>
      <Col></Col>
    </Row>
    </div>
  );
}

PetList.propTypes = {
  petList: PropTypes.array
};


export default PetList;
