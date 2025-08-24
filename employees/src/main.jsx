import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { PatientProvider } from "./contexts/PatientContext.jsx";
import { MessageProvider } from "./contexts/MessageContext.jsx";

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <PatientProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </PatientProvider>
    </AuthProvider>
  </StrictMode>,

)