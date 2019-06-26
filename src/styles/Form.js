import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 90%;
`;

export const FormAlt = styled(Form)`
  padding: 1rem;
`;

export const CategoryMenu = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  text-transform: uppercase;
`;

export default Form;
