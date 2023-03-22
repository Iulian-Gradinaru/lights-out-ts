/**
 * Imports styled
 */
import { styled } from '@mui/system';

import { ContainerProps } from './BoardCell.types';

/**
 * Styles the container
 */
export const Container = styled('div', {
  shouldForwardProp: (propName) =>
    propName !== 'active' && propName !== 'gridSize',
})<ContainerProps>((props) => {
  const { active, gridSize } = props;

  const getSize = () => {
    if (gridSize > 5) return 50;
    if (gridSize > 3) return 95;
    return 100;
  };
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#2633238',
    transition: 'backgroundColor 0.3s ease',
    border: '1px solid black',
    ...(active && {
      backgroundColor: 'yellow',
    }),
  };
});
