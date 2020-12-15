import styles from './Feedback.module.css';
import { useState } from 'react';

import Section from './Section';
import Controls from './FeedbackOptions';
import Statistic from './Statistic';
import Notification from './Notification';

export default function Feedback() {
  let total = 0;
  let positiveFeedbackPercentage = 0;
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  console.log(good, neutral, bad, total, positiveFeedbackPercentage);

  const onLeaveFeedback = e => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
    console.log(good, neutral, bad, total, positiveFeedbackPercentage);
  };
  const countTotalFeedback = () => {
    total = total + 1;
  };
  const countPositiveFeedbackPercentage = () => {
    return (positiveFeedbackPercentage = Math.round((good / total) * 100));
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
          {!total && <Notification message="No feedback given"></Notification>}
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
      {/* <Section title={'Please leave feedback'} className="Section">
        <div className={styles.Controls}>
          <Controls
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </div>
      </Section>
      <div className={styles.Statistic}>
        <Section title={'Statistic'} className="Section">
          {!total && <Notification message="No feedback given"></Notification>}
          {total && (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </div> */}
    </div>
  );
}
// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     // total: 0,
//     // positiveFeedbackPercentage: 0,
//   };

// countPositiveFeedbackPercentage = () => {
//   // this.setState(prevState => {
//   return (positiveFeedbackPercentage = Math.round(
//     (this.state.good / total) * 100,
//   ));

//     // });
//   };
//   countTotalFeedback = () => {
//     // this.setState(prevState => {
//     return (total = total + 1);

//     // });
//   };

// onLeaveFeedback = type => {
//   this.setState(prevState => {
//     return { [type]: prevState[type] + 1 };
//   });
//   this.countTotalFeedback();
//   this.countPositiveFeedbackPercentage();
// };

//   render() {
//     return (
//       <div>
//         <Section title={'Please leave feedback'} className="Section">
//           <div className={styles.Controls}>
//             <Controls
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.onLeaveFeedback}
//             />
//           </div>
//         </Section>
//         <div className={styles.Statistic}>
//           <Section title={'Statistic'} className="Section">
//             {!total && (
//               <Notification message="No feedback given"></Notification>
//             )}
//             {total && (
//               <Statistic
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 total={total}
//                 positivePercentage={positiveFeedbackPercentage}
//               />
//             )}
//           </Section>
//         </div>
//       </div>
//     );
//   }
// }
// export default Feedback;
