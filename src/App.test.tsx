import { render, screen } from '@testing-library/react'
import { debug } from 'jest-preview'
import App from './App'

test('App.tsx', () => {
  render(<App />)
  debug()
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})
