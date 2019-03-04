import styled from '../../theme';

const Logo = styled.h1`
  font-size: 3rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-2deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
    text-transform: capitalize;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
    font-size: 2rem;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    display: flex;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
    }
  }
  .sub-bar {
    display: flex;
    justify-content: space-between;
  }
`;

export { Logo, StyledHeader };
