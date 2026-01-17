import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './styles/global.css'
import './styles/theme.css'

import './styles/login.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)