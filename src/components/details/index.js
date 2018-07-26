// import React from 'react';

// export const Details = ({commits}) => {
//   let detailList;
//   if(commits) {
//     detailList = Object.keys(commits).map(function(key, index) {
//       return <li key={index}>{key}: {commits[key]}</li>;
//    });
    
//   }

//   return (
//     <div>
//       <h3>Details</h3>
//       <ul>
//         {detailList}
//       </ul>
//     </div>
//   )
// } 

// export default Details;


import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchProtectedData } from '../../actions/protected-data';

export class Details extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }
  
  render() {
    let commitNum = 0;
    let detailList;
    let commitList = this.props.protectedData.repos;

    if(commitList) {

      detailList = commitList.map(function(currElement, index) {
        commitNum = commitNum + currElement.commits;
        return (
        <li> {currElement.name} - commits: {currElement.commits} </li>);
      });
    }

    return (
      <div className="detail">
        <div className="detail-username">
          Username: {this.props.username}
        </div>
        <div className="detail-commits">
          Commits: { commitNum }
        </div>
        <div>
          <h3>Details</h3>
            <ul>
              {detailList}
            </ul>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;

  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Details));
