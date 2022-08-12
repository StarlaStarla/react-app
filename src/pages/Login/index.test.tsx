import { render, screen, waitFor, within } from '@testing-library/react'
import Login from './index'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('test Login page', () => {
  let history: MemoryHistory

  const setup = () => {
    const mockValue = {
      email: 'user@gmail.com',
      password: '123456',
    }
    const utils = render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>,
    )

    const emailInput = within(screen.getByTestId('email')).getByPlaceholderText('Email') as Element
    const passwordInput = within(screen.getByTestId('password')).getByPlaceholderText('Password') as Element

    return {
      emailInput,
      passwordInput,
      mockValue,
      ...utils,
    }
  }

  beforeEach(() => {
    history = createMemoryHistory()
  })

  test('render form fields', () => {
    const { emailInput, passwordInput } = setup()

    expect(document.title).toBe('Login')
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  // test('all fields should be filled when user change values', () => {
  //   const { emailInput, passwordInput, mockValue } = setup()

  //   userEvent.type(emailInput, 'user@gmail.com')
  //   userEvent.type(passwordInput, '123456')

  //   expect(emailInput).toHaveValue(mockValue.email)
  //   expect(passwordInput).toHaveValue(mockValue.password)
  // })

  // test('submit login should jump to setup page', () => {
  //   const { emailInput, passwordInput } = setup()

  //   userEvent.type(emailInput, 'Tom@email.com')
  //   userEvent.type(passwordInput, '123456')

  //   userEvent.click(screen.getByTestId('submit-button'))

  //   return waitFor(() => {
  //     expect(history.location.pathname).toBe('/landing/setup')
  //   })
  // })

  // test('navigate to forgot-password when user fire on Forgot Password link', () => {
  //   setup()

  //   userEvent.click(screen.getByTestId('forgot-password'))

  //   expect(history.location.pathname).toBe('/landing/forgot-password')
  // })

  // test('navigate to sign-up when user fire on Sign Up link', () => {
  //   setup()

  //   userEvent.click(screen.getByTestId('sign-up'))

  //   expect(history.location.pathname).toBe('/landing/sign-up')
  // })
})
