import React from 'react';
import { PieChart, Legend } from 'react-easy-chart';
import './repos-chart.css';

export default ({ repos }) => {
  if (!repos) {
    return null;
  }

  const data = repos.repos.map((repo, index) => {
    return {
      key: `${repo.name} (${repo.commits.length})`,
      value: repo.commits.length
    };
  })

  return (
    <section className="repos-chart">
      <h3>Commits per Repo</h3>
      <div className="chart-wrapper">
        <PieChart
          className="pie-chart"
          size={600}
          innerHoleSize={200}
          padding={10}
          labels
          data={data}
        />
      </div>
      <div className="legend-wrapper">
        <Legend
          data={data}
          dataId={'key'}
        />
      </div>
      <div className="clearfix" />
    </section>
  );
}