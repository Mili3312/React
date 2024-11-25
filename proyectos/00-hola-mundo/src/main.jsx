
import { createRoot } from 'react-dom/client'
import {App} from './App'
import './index.css'

// Se crea la raíz de la aplicación React en el DOM en el elemento con id "root".
createRoot(document.getElementById('root')).render(
  <App />// Renderiza el componente principal de la aplicación (App).
)
