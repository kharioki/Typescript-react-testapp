import styled from '../../theme';

const SickButton = styled.button`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.white};
  font-weight: 300;
  border: 0;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  display: inline-block;
  transition: all 0.5s;
  margin: 0.5rem;
  &[disabled] {
    opacity: 0.5;
  }
`;

export default SickButton;
