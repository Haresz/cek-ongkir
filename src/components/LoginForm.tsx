'use client';

import { Button, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const token = uuidv4();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (username === 'pakkurir' && password === 'pakett!') {
      messageApi.open({
        type: 'success',
        content:
          'Login successfully. Your session will now start, and you will be redirected to the homepage.',
      });
      localStorage.setItem('token', token);
      Cookies.set('name', 'value', { expires: 1 / 24 });
      router.push('/dashboard');
      setLoading(false);
    } else if (username === '' || password === '') {
      messageApi.open({
        type: 'warning',
        content:
          'Input required. Please fill in both username and password to proceed.',
        className: 'mt-10',
      });
      setLoading(false);
    } else {
      messageApi.open({
        type: 'error',
        content:
          'Invalid username or password. Please check your credentials and try again.',
        className: 'mt-10',
      });
      setLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formTransition = {
    type: 'spring',
    stiffness: 50,
    delay: 0.2,
  };

  return (
    <div className="container-login">
      {contextHolder}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        transition={formTransition}
        className="max-w-md mx-2 mb-[20vh]"
      >
        <p className="login-title">Login</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: '10px' }}
            size="large"
            placeholder="User Name"
          />
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="large"
            placeholder="Password"
          />
          <Button size="large" type="primary" htmlType="submit" block>
            Submit
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginForm;
