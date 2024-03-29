/**
 * Imports styles components
 */
import { Container } from './Timer.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const Timer = () => {
  const { timer, winner } = useGame();
  if (!winner) return null;
  return (
    <Container className="timer">
      {'Time:'} {timer.minutes < 10 ? '0' + timer.minutes : timer.minutes}:
      {timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}
    </Container>
  );
};
