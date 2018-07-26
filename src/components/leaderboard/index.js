// import React from 'react';

// export function Leaderboard({ data }) {
//   let leaders
//   if (data) {
//     leaders = data.map(data => {
//       return (
//         <tr>
//         <td>{data.rank}</td>
//         <td>{data.username}</td>
//         <td>{data.commits}</td>
//         </tr>
//       )
//     })
//   }
//   return (
//     <div className="leaderboard">
//       <h2>Leaderboard</h2>
//       <table>
//         <thead>
//           <th>Rank</th>
//           <th>Username</th>
//           <th>Commits</th>
//         </thead>
//         <tbody>
//           { leaders }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Leaderboard


import React from 'react';
import { getPublicLeaderboard } from '../../actions/leaderboard';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';

import './leaderboard.css';

export class Leaderboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPublicLeaderboard(""));
  }

  render() {
    let leaders
    let data = this.props.leaderboard;
    if (data) {
      leaders = data.map(data => {
        return (
          <tr>
            <td>{data.rank}</td>
            <td>{data.username}</td>
            <td>{data.commits}</td>
          </tr>
        )
      })
    }

    return (
      <div className="leaderboard">
        

        <div className="tables">
        <h2 className="mainTitle">Leaderboard</h2>
          <div className="daily">
            <h3 className="dayTitle">Daily</h3>
            <table className="dailyTable">
              <thead>
                <th>Rank</th>
                <th>Username</th>
                <th>Commits</th>
              </thead>
              <tbody>
                { data }
              </tbody>
            </table>
          </div>

          <div className="weekly">
            <h3 className="weekTitle">Weekly</h3>
            <table className="weeklyTable">
              <thead>
                <th>Rank</th>
                <th>Username</th>
                <th>Commits</th>
              </thead>
              <tbody>
                { data }
              </tbody>
            </table>
          </div>

          <div className="monthly">
            <h3 className="monthTitle">Monthly</h3>
            <table className="monthlyTable">
              <thead>
                <th>Rank</th>
                <th>Username</th>
                <th>Commits</th>
              </thead>
              <tbody>
                { data }
              </tbody>
            </table>
          </div>

          <div className="allTime">
            <h3 className="allTitle">Alltime</h3>
            <table className="allTable">
              <thead>
                <th>Rank</th>
                <th>Username</th>
                <th>Commits</th>
              </thead>
              <tbody>
                { data }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
    );
  }
}


const mapStateToProps = state => ({
  leaderboard: state.leaderboard.leaderboard
});

export default requiresLogin()(connect(mapStateToProps)(Leaderboard));
