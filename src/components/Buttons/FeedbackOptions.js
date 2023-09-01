import { ButtonsWrappper, ButtonFeedback } from './FeedbackOptions.styled';

export function FeedbackOptions({ clickFeedback, options }) {
  return (
    <ButtonsWrappper>
      {options.map(option => (
        <ButtonFeedback key={option} onClick={() => clickFeedback(option)}>
          {option}
        </ButtonFeedback>
      ))}
    </ButtonsWrappper>
  );
}