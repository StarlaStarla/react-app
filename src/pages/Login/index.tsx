import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd-mobile'
import styles from './index.module.scss'
import { EMAIL_REGX } from '../../constants/base'

function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Login'
  }, [])

  const onSubmit = () => {
    console.log('submit----')
  }

  const goToForgotPassword = () => {
    navigate('/landing/forgot-password')
  }

  const goToSignUp = () => {
    navigate('/landing/sign-up')
  }

  return (
    <div className={styles.wrapper}>
      <Form
        layout='horizontal'
        onFinish={onSubmit}
        footer={
          <Button block type='submit' color='primary' size='large' data-testid='submit-button'>
            Login
          </Button>
        }
      >
        <Form.Item
          name='email'
          rules={[
            { required: true, message: 'Email cannot empty' },
            {
              pattern: EMAIL_REGX,
              message: 'Please enter correct email address',
            },
          ]}
        >
          <Input placeholder='Email' data-testid='email' />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: 'Password cannot empty' }]}>
          <Input type='password' placeholder='Password' data-testid='password' />
        </Form.Item>
      </Form>
      <div className={styles['other-operation']}>
        <p onClick={goToForgotPassword} data-testid='forgot-password'>
          Forgot Password?
        </p>
        <p className={styles['sign-up']}>
          Don’t have an account yet?
          <span onClick={goToSignUp} data-testid='sign-up'>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
