import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  // BrowserRouter,
  createBrowserRouter,
  RouterProvider
  // Link
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/test',
    element: <div>baename test</div>
  }
]

const router = createBrowserRouter(routes, {
  basename: '/tictactoe'
})

const CustomApp = () => {
  return (<>
    <div id="sidebar">
        <h1>FESTUDY</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href={'/tictactoe/test'}>Site1</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <RouterProvider router={router} />
      </div>
  </>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomApp />
  </React.StrictMode>
)
