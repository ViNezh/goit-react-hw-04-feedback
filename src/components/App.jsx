import { Component } from 'react';

import { Section } from './Section/section';
import { FeedbackOptions } from './Feedback/feedback';
import { Statistics } from './Statictic/statistic';
import { Notification } from './Notification -/Notification ';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // Функція додавання при натисканні кнопки
  handleClick = keyState => {
    this.setState(prevState => ({ [keyState]: prevState[keyState] + 1 }));
  };
  // Функція підрахунку загальної кількості
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // Функція розрахунку відсотку позитивних відповідей
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    // Повернення результату 0 за умови відсутності відгуків
    return total === 0 ? 0 : (good / total) * 100;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = Math.ceil(
      this.countPositiveFeedbackPercentage()
    );
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
