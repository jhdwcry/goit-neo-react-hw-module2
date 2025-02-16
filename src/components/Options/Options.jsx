import css from './Options.module.css'

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <div className={css.btn_container}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
      </div>
    </div>
  );
};

export default Options;
