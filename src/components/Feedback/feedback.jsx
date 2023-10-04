import PropTypes from 'prop-types';
import css from './feedback.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      {/* <button type="button" onClick={onLeaveFeedback('good')}></button>
      <button type="button" onClick={onLeaveFeedback('neutral')}></button>
      <button type="button" onClick={onLeaveFeedback('bad')}></button> */}
      {options.map(option => (
        <button
          className={css.feedbackBtn}
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
