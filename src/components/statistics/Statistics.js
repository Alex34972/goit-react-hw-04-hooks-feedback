import React from "react";
import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className="title">Good:{good}</p>
      <p className="title">Neutral:{neutral}</p>
      <p className="title">Bad:{bad}</p>
      <p className="title">Total:{total}</p>
      <p className="title">
        Positive feedback:{Math.round(positivePercentage)}%
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
