
import css from './Feedback.module.css'
import Notification from '../Notifications/Notifications';

const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage }) => {
  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <h2 className={css.feedback_title}>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total feedback: {totalFeedback}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default Feedback;
