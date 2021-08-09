import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttons">
      {options.map((option) => (
        <button
          className={s.Btn}
          type="button"
          name={option}
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
