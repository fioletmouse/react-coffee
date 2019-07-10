import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import styles from './Cloud.module.css';
import { Link } from 'react-router-dom';
import randomColor from 'randomcolor';
import PropTypes from 'prop-types';

class Cloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 10000);
  }

  render() {
    return (
      <div className={styles.appOuter}>
        <div className={styles.appInner}>
          <TagCloud  className={styles.tagCloud} style={{color: () => randomColor({ hue: 'orange'}) }}>
            {
              this.props.list.map(item => 
                <Link to={`/${item.code}`}>{item.name}</Link>
              )
            }
          </TagCloud>    
        </div>
      </div>
      
    
    );
  }
}
Cloud.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
}
export default Cloud;