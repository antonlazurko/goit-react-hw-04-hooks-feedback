import styles from './Feedback.module.css';
import { useState } from 'react';

import Section from './Section';
import Controls from './FeedbackOptions';
import Statistic from './Statistic';
import Notification from './Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);

        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);

        break;
      case 'bad':
        setBad(prevState => prevState + 1);

        break;
      default:
        return;
    }

    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  return (
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
          {!countTotalFeedback() && (
            <Notification message="No feedback given"></Notification>
          )}
          {countTotalFeedback() && (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
