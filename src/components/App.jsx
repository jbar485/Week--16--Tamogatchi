import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header'
import PetList from './PetList'
import NewPetForm from './NewPetForm'
import NewPetControl from './NewPetControl';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterPetList: []
    };
    this.handleAddingNewPetToList = this.handleAddingNewPetToList.bind(this);
    this.handleIncreaseHealth = this.handleIncreaseHealth.bind(this);
  }

  handleAddingNewPetToList(newPet){
    let newMasterPetList = this.state.masterPetList.slice();
    newMasterPetList.push(newPet);
    this.setState({masterPetList: newMasterPetList});
  }

  handleIncreaseHealth(id){
    console.log('asdf');
    let newMasterPetList = this.state.masterPetList.slice();
    newMasterPetList.forEach(function(pet){
      if (pet.id == id) {
        pet.health += 1;
      }
    });
    this.setState({masterPetList: newMasterPetList});
  }

  render() {
    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><PetList petList={this.state.masterPetList} onIncreseHealth={this.handleIncreaseHealth}/>} />
        <Route path='/newpet' render={()=><NewPetForm onNewPetCreation={this.handleAddingNewPetToList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
}

export default App;
