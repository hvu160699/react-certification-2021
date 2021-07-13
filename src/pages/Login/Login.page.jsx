import React from 'react';

import { useAuthContext } from '../../providers/Auth';

import useForm from '../../utils/hooks/useForm';
import Modal from '../../components/Common/Modal';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import Form from '../../components/Common/Form';

const LoginPage = (props) => {
  const {
    actions: { handleLogin },
  } = useAuthContext();

  const [form, onChangeForm] = useForm({
    userName: '',
    userPassword: '',
  });

  const onClose = () => props.history.goBack();

  const handleSubmit = async () => {
    try {
      const res = await handleLogin(form.userName, form.userPassword);

      if (res) {
        props.history.replace('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      title="Login"
      open
      onClose={onClose}
      hasFooter
      footer={<Button.PrimaryButton onClick={handleSubmit}>Login</Button.PrimaryButton>}
    >
      <form autoComplete="off">
        <Form.FormGroup>
          <Form.FormRow>
            <Form.FormLabel htmlFor="userName">User name</Form.FormLabel>
            <Input
              type="text"
              name="userName"
              value={form.userName}
              onChange={onChangeForm}
              placeholder="Username/ID"
            />
          </Form.FormRow>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.FormRow>
            <Form.FormLabel htmlFor="userPassword">Password</Form.FormLabel>
            <Input
              type="password"
              name="userPassword"
              value={form.userPassword}
              onChange={onChangeForm}
              placeholder="Password"
            />
          </Form.FormRow>
        </Form.FormGroup>
      </form>
    </Modal>
  );
};

export default LoginPage;
