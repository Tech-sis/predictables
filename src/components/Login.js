import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import styles from '../styles/login.module.css'

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className={styles.loginformforgot} href="/">
            Forgot password?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.loginformbutton}
            style={{
              background: '#410369',
              borderColor: '#410369',
              width: '-webkit-fill-available',
            }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
