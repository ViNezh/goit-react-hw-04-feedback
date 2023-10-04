import { useState } from 'react';

import { Section } from './Section/section';
import { FeedbackOptions } from './Feedback/feedback';
import { Statistics } from './Statictic/statistic';
import { Notification } from './Notification -/Notification ';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // Функція додавання при натисканні кнопки
  const handleClick = keyState => {
    switch (keyState) {
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
  };
  // Підрахунок загальної кількості
  const countTotalFeedback = good + neutral + bad;

  // Функція розрахунку відсотку позитивних відповідей
  const countPositiveFeedbackPercentage = () => {
    // Повернення результату 0 за умови відсутності відгуків
    return countTotalFeedback === 0 ? 0 : (good / countTotalFeedback) * 100;
  };

  const positivePercentage = Math.ceil(countPositiveFeedbackPercentage());
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
