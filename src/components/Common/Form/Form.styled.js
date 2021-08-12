import styled from '@emotion/styled';

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Form = {
  FormRow,
  FormGroup,
  FormLabel,
};

export default Form;
