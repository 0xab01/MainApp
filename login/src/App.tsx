// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import './index.css';
import Navbar from './components/navbar';
import { CardWithForm } from './components/cards';
import { LoginPage } from './components/login';
import { Com } from './components/com';


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col h-screen">
          <div className="flex justify-end p-4">
            <ModeToggle />
          </div>

          <div className="flex-grow">
            <Routes>
              {/* Centered components */}
              <Route
                path="/register"
                element={
                  <div className="flex items-center justify-center h-full">
                    <CardWithForm />
                  </div>
                }
              />

              <Route
                path="/"
                element={
                  <div className="flex items-center justify-center h-full">
                    <CardWithForm />
                  </div>
                }
              />

              <Route
                path="/login"
                element={
                  <div className="flex items-center justify-center h-full">
                    <LoginPage />
                  </div>
                }
              />

              {/* Other routes */}
              <Route path="/navbar" element={<Navbar />} />

              {/* New route for the 'Com' component */}
              <Route
                path="/com"
                element={
                  <div className="flex items-center justify-center h-full">
                    <Com />
                  </div>
                }
              />
            </Routes>
          </div>

          {/* Render LinesComponent behind the form */}
         
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
