import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RestaurantProvider } from './components/Restorent/Contextapi.jsx';

// Import your context provider
 // Correct path

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap your App component in the RestaurantProvider */}
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </StrictMode>
);
