import '@testing-library/jest-dom'
import { jestPreviewConfigure } from 'jest-preview'

// Should be path from root of your project
jestPreviewConfigure({
  publicFolder: './src/assets', // No need to configure if `publicFolder` is `public`
  autoPreview: true,
})
