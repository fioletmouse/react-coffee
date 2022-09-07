import React from 'react';

function ArticleHeader(props) {
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <h3 className="text-center">
          {props.name}
        </h3>
        <button type="button" onClick={() => props.onClick(null)}>Close</button>
      </div>
    </div>
  );
}

export default ArticleHeader;
