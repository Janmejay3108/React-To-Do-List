# React To-Do List App

A simple and modern To-Do List application built with React.

## Features

- Add new tasks with input validation.
- Mark tasks as completed.
- Remove tasks.
- Filter tasks (All, Active, Completed).
- Sort tasks (A-Z, Z-A, Completed First).
- Persist tasks using browser's localStorage.
- Modern and responsive user interface.
- Animated circular checkboxes for task completion.

## Technologies Used

- React 
- JSX
- CSS
- JavaScript
- localStorage API
- SVG for icons

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

```bash
node -v
npm -v
```

### Installation

1. Clone the repository (if applicable, otherwise navigate to the project directory):

   ```bash
   # If the code is in a repository
   # git clone <repository_url>
   # cd <repository_name>
   ```
   Navigate to the `todo-app` directory created by create-react-app:
   ```bash
   cd todo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   # yarn install
   ```

### Running the App

Start the development server:

```bash
npm start
# or
# yarn start
```

The app will open in your default browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
todo-app/
├── public/
├── src/
│   ├── components/
│   │   └── TodoList.js  # The main To-Do List component
│   ├── App.js         # Main application component
│   ├── App.css
│   ├── index.js       # Entry point
│   ├── index.css
│   ├── reportWebVitals.js # Removed usage
│   ├── service-worker.js
│   ├── serviceWorkerRegistration.js
│   ├── setupTests.js
│   └── logo.svg
├── package.json
├── README.md          # This file
└── ... other files
```

## Future Improvements

- Add task editing functionality.
- Implement drag-and-drop for reordering tasks.
- Add categories or tags for tasks.
- Backend integration for multi-user support and data sync.
- Accessibility enhancements.
- More advanced animations and transitions.

## License

This project is open source and available under the [MIT License](LICENSE). 
