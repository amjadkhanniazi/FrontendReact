# MY TO DOs

My TO DOs is a modern, responsive web application for managing tasks. It provides an intuitive interface for creating, organizing, and tracking tasks with features like drag-and-drop, dark mode, and user authentication.

## Features

- User authentication (login and signup)
- Create, read, update, and delete tasks
- Drag-and-drop functionality to mark tasks as complete
- Dark mode toggle
- Responsive design for mobile and desktop
- Modern UI with smooth animations

## Technologies Used

- React.js
- Next.js (App Router)
- Tailwind CSS for styling
- Framer Motion for animations
- React DnD for drag-and-drop functionality
- Axios for API requests
- React Icons for icons

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn package manager
- A running backend server (Make sure your backend API is set up and running)

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```
   git clone https://github.com/amjadkhanniazi/FrontendReact.git
   ```

2. Navigate to the project directory:
   ```
   cd myapp
   ```

3. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add your backend API URL:
   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
   ```

5. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/components`: Reusable React components
- `/src`: contain App.js, globals.css, index.js 
- `/public`: Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React DnD](https://react-dnd.github.io/react-dnd/)
- [React Icons](https://react-icons.github.io/react-icons/)
