// Style your elements here
import styled from 'styled-components'

export const GradientItem = styled.li`
  font-family: 'Roboto';
`

export const DirectionButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  height: 40px;
  width: 120px;
  margin: 10px;
  border: 0px;
  border-radius: 4px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
  outline: none;
`
