import { useState } from 'react'
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import './App.css'

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const updatedFeedback = { ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1 };
      localStorage.setItem('feedback', JSON.stringify(updatedFeedback));
      return updatedFeedback;
    });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.setItem('feedback', JSON.stringify({ good: 0, neutral: 0, bad: 0 }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />

      <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
    </div>
  );
}
export default App
