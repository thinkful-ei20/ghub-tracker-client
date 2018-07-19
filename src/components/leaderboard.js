import React from 'react';

export function Leaderboard({ data }) {
  let leaders
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
          { leaders }
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard