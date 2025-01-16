# Setup instructions

1. Install & use Nodejs 20 or above, and Yarn package manager 1.22.5 or above
2. In the repository, run `yarn`
3. Then run `yarn dev`
4. Open your browser and go to `http://localhost:5173`

# Deployed version
This is deployed at https://frontend-dev-olive.vercel.app/ 

# Tech Stack
1. ReactJS 19
2. React Router v7
3. Material UI (mui) v6 for UI components
4. Recharts v2 for graphs
5. ViteJS 6 for build system

# Code Structure
1. `src/Pages` contains all the pages (like Dashboard, Settings etc)
2. `src/Components` contains all the reusable components
3. `src/Services` contains all the HTTP service calls (mocked)
4. `src/App.js` is the main file with Route definitions using react-router
5. `src/Mocks` contains mock data for the services

# Features
1. Layout with Side Navigation, Top Bar, responsive
2. Routing between Dashboard and Settings page
2. Dashboard with all financial summary and charts, mocked API call (1-second delay to simulate network calls), with loaders
3. Settings page with Edit Profile Form having -
   1. and mocked API call  (1-second delay to simulate network calls), 
   2. Form validations using HTML5 form validations
4. Lazily loading "Settings" page route for performance optimization. 