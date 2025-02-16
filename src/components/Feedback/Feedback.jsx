
import css from './Feedback.module.css'
import Notification from '../Notifications/Notification';

const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage }) => {
  let content;
  if (totalFeedback > 0) {
    content = (
      <>
        <h2 className={css.feedback_title}>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total feedback: {totalFeedback}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </>
    );
  } else {
    content = <Notification />;
  }

  return <div>{content}</div>;
};

export default Feedback;
