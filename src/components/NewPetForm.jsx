import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPetForm(props){
  let _name = null;

  function handleNewPetFormSubmission(event) {
    event.preventDefault();
    props.onNewPetCreation({name: _name.value, id: v4()});
    _name.value = '';
  }

    return (
      <div>
       <form onSubmit={handleNewPetFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_name = input;}}/>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

NewPetForm.propTypes = {
  onNewPetCreation: PropTypes.func
};

export default NewPetForm;
