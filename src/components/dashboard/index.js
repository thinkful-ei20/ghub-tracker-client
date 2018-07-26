// import React from 'react';
// import { connect } from 'react-redux';
// import requiresLogin from '../requires-login';
// import { fetchProtectedData } from '../../actions/protected-data';
// import UserData from '../user-data/';

// export class Dashboard extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(fetchProtectedData());
//   }
  
//   render() {
//     let commitNum = 0;
//     if(this.props.protectedData.repos) {
//       for(let i = 0; i < this.props.protectedData.repos.length; i++) {
//         if(this.props.protectedData.repos[i].commits) {
//           commitNum = commitNum + this.props.protectedData.repos[i].commits;
//         }
//       }
      
//     }

//     return (
//       <div className="dashboard">
//         {/* <div className="dashboard-username">
//           Username: {this.props.username}
//         </div> */}
//         {/* <div className="dashboard-name">
//           Name: {this.props.name}
//         </div> */}
//         {/* <div className="dashboard-protected-data">
//           Protected data: {this.props.protectedData}
//         </div> */}
//         {/* <div className="dashboard-commits">
//           Commits: { commitNum }
//         </div> */}
//         <UserData />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   const {currentUser} = state.auth;

//   return {
//     username: state.auth.currentUser.username,
//     name: `${currentUser.firstName} ${currentUser.lastName}`,
//     protectedData: state.protectedData.data
//   };
// };

// export default requiresLogin()(connect(mapStateToProps)(Dashboard));



import React from 'react';
import UserData from '../user-data/';

export const Dashboard = () => {
  
  return (
    <div>
      <UserData />
    </div>
  )
} 

export default Dashboard;
