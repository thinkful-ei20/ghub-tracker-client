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

export class Leaderboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPublicLeaderboard(""));
  }

  render() {
    // console.log('HERE',this.props)
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
        <h2>Leaderboard</h2>
        <table>
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
    );
  }
}


const mapStateToProps = state => ({
  leaderboard: state.leaderboard.leaderboard
});

export default requiresLogin()(connect(mapStateToProps)(Leaderboard));
