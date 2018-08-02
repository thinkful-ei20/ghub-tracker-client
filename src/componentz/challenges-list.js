import React from 'react';
import './challenges-list.css';

export default (props) => {
  if (!props.challenges) {
    return null;
  }

  const rows = props.challenges.challenges.map((challenge, index) =>
    <tr key={index}>
      <td>{challenge.receiver}</td>
      <td>{challenge.status}</td>
      <td>{challenge.sent}</td>
      <td>
        {challenge.status === "pending" ? <button value={challenge} onClick={() => props.acceptChallenge(challenge)}>Accept</button> : <button>Give Up</button>}
      </td>
    </tr>
  );

  return (
    <section className="challenges">
      <table>
        <thead>
          <tr>
            <th>Reciever</th>
            <th>Status</th>
            <th>Sent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </section>
  );
}