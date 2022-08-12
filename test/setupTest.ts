import '@testing-library/jest-dom'
import { jestPreviewConfigure } from 'jest-preview'
import { excludeWarning } from './excludeWarning'

excludeWarning()
// Should be path from root of your project
jestPreviewConfigure({
  // publicFolder: './src/assets', // No need to configure if `publicFolder` is `public`
  autoPreview: true,
})
