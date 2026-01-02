import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import './styles/global.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<App />)