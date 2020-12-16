import styles from './Feedback.module.css';
import { useState, useEffect } from 'react';

import Section from './Section';
import Controls from './FeedbackOptions';
import Statistic from './Statistic';
import Notification from './Notification';
let positiveFeedbackPercentage = 0;
let total = 0;
export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] = useState(
  //   0,
  // );
  console.log(good, neutral, bad, total, positiveFeedbackPercentage);

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => (prevState += 1));
        console.log('good' + good);

        break;
      case 'neutral':
        setNeutral(prevState => (prevState += 1));
        console.log('neutral' + neutral);

        break;
      case 'bad':
        setBad(prevState => (prevState += 1));
        console.log('bad' + bad);

        break;
      default:
        return;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };
  const countTotalFeedback = () => {
    total += 1;
    // setTotal(prevState => (prevState += 1));
  };
  const countPositiveFeedbackPercentage = () => {
    positiveFeedbackPercentage = Math.round((good / total) * 100);
  };

  return (
    console.log(good, neutral, bad, total, positiveFeedbackPercentage),
    (
      <div>
        <Section title={'Please leave feedback'} className="Section">
          <div className={styles.Controls}>
            <Controls
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={onLeaveFeedback}
            />
          </div>
        </Section>
        <div className={styles.Statistic}>
          <Section title={'Statistic'} className="Section">
            {!total && (
              <Notification message="No feedback given"></Notification>
            )}
            {total && (
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedbackPercentage}
              />
            )}
          </Section>
        </div>
      </div>
    )
  );
}
