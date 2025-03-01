
import css from './Feedback.module.css'
import Notification from '../Notifications/Notification';

const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <h2 className={css.feedback_title}>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
      <Notification message={totalFeedback === 0 ? "No feedback given yet" : ""} />
    </div>
  );
};



export default Feedback;
