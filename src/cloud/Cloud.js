import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';

class Cloud extends Component {
  render() {
    return (
      <div>
        <TagCloud 
        >
       <div>GI Joe</div>
            <div>Inspector Gadget</div>
            <div>Bugs Bunny</div>
      </TagCloud>
      </div>
     
    );
  }
}

export default Cloud;