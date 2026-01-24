# Copilot Instructions for Food Application Frontend

## Project Overview
This is a React frontend for a food ordering application built with Vite. It integrates with a backend API for authentication and data management.

## Architecture
- **Routing**: Use `react-router-dom` for navigation (not yet implemented in App.jsx)
- **State Management**: Custom React Context in `src/context/` for global state
- **API Integration**: Fetch-based API calls in `src/services/`
- **Components**: Reusable UI components in `src/components/`
- **Pages**: Route-based pages in `src/pages/`

## Authentication Pattern
- Store user data in `localStorage` as JSON string
- Dispatch `storageUpdate` event after login/logout for cross-component updates
- API endpoint: `https://recipe-backend-011q.onrender.com/api/auth/login`
- Redirect to `/dashboard` after successful login

## Code Patterns
- Use functional components with hooks
- Handle API errors with try/catch and user alerts
- Form validation with HTML `required` attribute
- Event handling with `onChange` for controlled inputs

## Development Workflow
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## File Structure Conventions
- Components: PascalCase filenames (e.g., `FoodCard.jsx`)
- Pages: PascalCase (e.g., `Home.jsx`)
- Services: Likely camelCase for API functions
- CSS: Component-specific stylesheets (e.g., `Navbar.css`)

## Key Files
- `src/App.jsx`: Main app component with routing setup
- `src/components/Navbar.jsx`: Navigation bar
- `src/pages/Login.jsx`: Authentication form (currently commented)</content>
<parameter name="filePath">c:\Users\nasri\FoodAplication_frontend\foodaplication\.github\copilot-instructions.md