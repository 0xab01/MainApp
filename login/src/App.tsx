import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import "./index.css";
import { CardWithForm } from "./components/cards";
import { LoginPage } from "./components/login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col h-screen">
          <div className="flex justify-end p-4">
            <ModeToggle />
          </div>
          <div className="flex-grow flex items-center justify-center">
            <Routes>
              <Route path="/" element={<CardWithForm />} />
              <Route path="/register" element={<CardWithForm />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
