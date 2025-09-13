import { useState } from "react";
// import Login from "./components/pages/Login";
import Sign from "./components/pages/Sign up";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router'
import { routes } from './routes'

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
