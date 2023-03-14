import css from './Statistics.module.css'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
<div>
    <ul className={css.statisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>
        Positive feedback: {positivePercentage() ? positivePercentage() : 0}%
      </li>
    </ul>
  </div >
);
