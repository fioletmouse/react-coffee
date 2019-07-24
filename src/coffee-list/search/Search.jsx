import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../../store/actions';


function Search (props) {
  const prepareSearchData = (event) => {
    const _value = event.target.value;
    props.changeSearch(_value);
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">       
        <div className="form-group row">          
          <div className="col-sm-10">
            <label htmlFor="search" className="sr-only">Search</label>
            <input className="form-control" id="search" placeholder="Enter the name" value={props.search} 
            onChange={prepareSearchData} />
          </div>
          <button type="submit" className="btn btn btn-dark" onClick={props.clearSearch}>
            <FontAwesomeIcon icon={faTrash} />      
          </button>
        </div>       
      </div>
    </div>
  )
}

Search.propTypes  = {
  onSearch: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
}

const putStateToProps = (state) => {
  return {
    search: state.search
  }
}

const putActionToProps = (dispatch) => {
  return {
    changeSearch: bindActionCreators(actions.changeSearchString, dispatch),
    clearSearch: bindActionCreators(actions.clearSearchString, dispatch)
  }
}

export default connect(putStateToProps, putActionToProps)(Search);