import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const Controls = ({ options, onLeaveFeedback }) => {
  return options.map(type => {
    return (
      <div key={type}>
        <button
          name={type}
          className={styles.buttons}
          type="button"
          onClick={onLeaveFeedback}
        >
          {type}
        </button>
      </div>
    );
  });
};

export default Controls;
Controls.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
