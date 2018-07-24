import React from 'react';

export const Details = ({commits}) => {
  let detailList;
  if(commits) {
    detailList = Object.keys(commits).map(function(key, index) {
      return <li key={index}>{key}: {commits[key]}</li>;
   });
    
  }

  return (
    <div>
      <h3>Details</h3>
      <ul>
        {detailList}
      </ul>
    </div>
  )
} 

export default Details;