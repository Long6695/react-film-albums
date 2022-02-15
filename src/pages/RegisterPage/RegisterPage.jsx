import React from 'react';
import {Form, Input, Typography, Button} from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import { useFilmsContext } from '../../context/FilmContext';
const RegisterPage = () => {
  const { registerUser } = useFilmsContext()
  const formItemLayout = {
        wrapperCol: { span: 24 },
      }

  const onFinish = (value) => {
    registerUser(value)
  }
  return (
    <div style={{padding: '10px'}}>
        <Typography.Title level={2} style={{textAlign: 'center', color: '#fff', marginTop: '50px'}}>Sign Up</Typography.Title>
        <Form
        style={{margin: '0 auto', maxWidth: '800px', width: '100%'}}
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        >
          <Form.Item
          name="userName"
          rules={[{required: true, message: 'Please input your Username!'}]}
          >
            <Input prefix={<UserOutlined/>} placeholder="Username"/>
          </Form.Item>

          <Form.Item
          name="email"
          rules={[{required: true, message: "Please input your Email!"},
          {type:"email", message: 'The input is not valid Email!'}
          ]}
          >
            <Input prefix={<MailOutlined/>} placeholder="Email" />
          </Form.Item>

          <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your password'}
          ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Password'/>
          </Form.Item>
          <Form.Item
          name="confirm"
          dependencies={['password']}
          rules={[
            {
            required: true,
            message: 'Please confirm your password!',
            },
            ({getFieldValue}) => (
              {
                validator(_, value) {
                  if(!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'))
                }
              }
            )
          ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Confirm password'/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
            Or <Link to="/login">have an account!</Link>
          </Form.Item>
        </Form>
    </div>
  )
};

export default RegisterPage;
