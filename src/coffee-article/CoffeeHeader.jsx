import React from 'react'

const CoffeeHeader = (props) => {
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <h3 className="text-center">
          {props.name}
        </h3>
      </div>
    </div>
  )
}

export default CoffeeHeader
