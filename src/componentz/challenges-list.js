import React from 'react';
import './challenges-list.css';

export default ({ challenges }) => {
  if (!challenges) {
    return null;
  }

  const rows = challenges.challenges.map((challenge, index) =>
    <tr key={index}>
      <td>{challenge.receiver}</td>
      <td>{challenge.status}</td>
      <td>{challenge.sent}</td>
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
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </section>
  );
}