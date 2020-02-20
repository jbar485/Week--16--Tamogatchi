import React from 'react';
import NewPetForm from './NewPetForm';
import PropTypes from 'prop-types';

class NewPetControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };

    }

  render()  {

    return (
      <div>
      <NewPetForm onNewPetCreation={this.props.onNewPetCreation}/>;
      </div>
    );
  }
}
NewPetControl.propTypes = {
  onNewPetCreation: PropTypes.func
};

export default NewPetControl;
