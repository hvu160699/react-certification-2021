import React from 'react';

import { useHistory } from 'react-router';
import { useAuthContext } from '../../providers/Auth';

import useForm from '../../utils/hooks/useForm';
import Modal from '../../components/Common/Modal';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

const LoginPage = () => {
  const history = useHistory();
  const {
    authActions: { handleLogin },
  } = useAuthContext();

  const [form, onChangeForm] = useForm({
    userName: '',
    password: '',
  });

  const onClose = () => history.goBack();

  const handleSubmit = async () => {
    try {
      const res = await handleLogin(form.userName, form.password);

      if (res) {
        history.replace('/');
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
        <div>
          <label htmlFor="userName">User name</label>
          <Input
            type="text"
            name="userName"
            value={form.userName}
            onChange={onChangeForm}
            placeholder="Username/ID"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={onChangeForm}
            placeholder="Password"
          />
        </div>
      </form>
    </Modal>
  );
};

export default LoginPage;
