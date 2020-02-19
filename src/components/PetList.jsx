import React from "react";

import Pet from "./Pet"
class PetList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterPets: [{
          title: 'test title',
          content: 'test content'
      },
    ]
    };
    this.addNewPetToList = this.addNewPetToList.bind(this);
  }
    addNewPetToList(post){
      var newMasterPets = this.state.masterPets.slice();
          newMasterPets.push(post);
          this.setState({masterPets: newMasterPets});
  }


render(){

  return(
    <div>
      {this.state.masterPets.map((post, index) =>
      <Pet title={post.title}
            content={post.content}
              key={index}/>
            )}
    </div>
  );
}
}

export default PetList;
