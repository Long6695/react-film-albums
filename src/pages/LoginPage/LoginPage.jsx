import React from 'react';
import {Form, Input, Button, Typography} from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useFilmsContext } from '../../context/FilmContext';
const LoginPage = () => {
  const { loginUser } = useFilmsContext()
  

  const formItemLayout = {
    wrapperCol: { span: 24 },
  }

  const onFinish = (value) => {
    loginUser(value)
  }
  
  return (
    <div style={{padding: '10px'}}>
    <Typography.Title level={2} style={{textAlign: 'center', color: '#fff', marginTop: '50px'}}>Sign In</Typography.Title>
      <Form
        style={{margin: '0 auto', maxWidth: '800px', width: '100%'}}
        {...formItemLayout}
        name="login"
        initialValues={{remember: true}}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {required: true, message: 'Please input your Email!'},
            {type:"email", message: 'The input is not valid Email!'}
          ]}
        >
          <Input 
            prefix={<MailOutlined /> } placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your password'}]}
          >
          <Input prefix={<LockOutlined />} placeholder="Password" type="password"/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
      </div>
  )
};

export default LoginPage;
