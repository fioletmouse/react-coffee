import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import styles from './Cloud.module.css';

class Cloud extends Component {
  render() {
    return (
      <div className={styles.appOuter}>
        <div className={styles.appInner}>
          <TagCloud  className={styles.tagCloud}>
            <div>GI Joe</div>
            <div>Inspector Gadget</div>
            <div>Bugs Bunny</div>
          </TagCloud>    
        </div>
      </div>
      
    
    );
  }
}

export default Cloud;