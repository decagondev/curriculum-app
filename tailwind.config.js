/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        // BloomTech Portal colors (updated to match image exactly)
        background: '#1A1F2C',      // Main dark background
        sidebar: '#161B25',         // Darker sidebar background
        card: '#252A37',            // Card background
        accent: '#FF4500',          // BloomTech orange accent color
        bloomOrange: {
          DEFAULT: '#FF4500',       // Main orange
          600: '#FF4500',           // For button hover
          700: '#E03E00',           // For button press
        },
        text: {
          primary: '#FFFFFF',       // White text
          secondary: '#A0AEC0',     // Light gray text
          muted: '#718096',         // Muted gray text
        },
        border: '#2D3748',          // Border color
        button: {
          primary: '#2D74DA',       // Blue button 
        }
      }
    },
  },
  plugins: [],
} 