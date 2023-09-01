import { FeedbackOptions } from './Buttons/FeedbackOptions';
import { Statistics } from './Statistic/Statistics';
import { Section } from './SectionWrapper/Section';
import { Notification } from './Notification/Notification';
const { useState } = require('react');

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleFeedback = type => {
        if (type === 'good') {
            setGood(prevGood => prevGood + 1);
        } else if (type === 'neutral') {
            setNeutral(prevneutral => prevneutral + 1);
        } else if (type === 'bad') {
            setBad(prevBad => prevBad + 1);
        }

        switch (type) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setGood(neutral + 1);
                break;
            case 'bad':
                setGood(bad + 1);
                break;
            
            default:
                break;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const totalFeedback = countTotalFeedback();
        return totalFeedback= === 0 ? 0 : Math.round((good / total) * 100);
}

    }
