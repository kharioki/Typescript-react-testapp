import styled, { keyframes } from '../../theme';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  align-items: center;
  border: 5px solid white;
  padding: 20px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 1rem;
    color: black;
    justify-content: space-between;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    color: grey;
    border: 1px solid ${props => props.theme.lightGrey};
    margin-right: 1rem;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.primaryColor};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.black};
    color: white;
    border: 0;
    font-size: 1rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
  }
  input[type='checkbox'] {
    width: auto;
    background: ${props => props.theme.lightGrey};
    color: grey;
    font-size: 1.4rem;
    padding: 0.5rem 0.5rem;
  }
  .form-inline {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .checkbox-inline {
    display: flex;
    flex-flow: row wrap;
    margin-right: 2rem;
  }
`;

export default Form;
