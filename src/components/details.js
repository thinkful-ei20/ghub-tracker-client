import React from 'react';

export const Details = (commits) => {
  let detailList;
  if(commits) {
    for(let key in commits) {
      if (commits.hasOwnProperty(key)) {
        detailList = <li>{commits[key]}</li>
        return detailList
      } 
    }
    
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