import React from "react"
import {Router} from "@reach/router"
import Home from "./pages/home"
import About from "./pages/about"
import Secret from "./pages/secret"
import Settings from "./pages/settings"
import {UserContextProvider} from "./contexts/user"

const App = props => {
  return (
  <UserContextProvider>
    <Router>
      <Home path="/"/>
      <About path="/about"/>
      <Secret path="/admin"/>
      <Settings path="/settings"/>
    </Router>
  </UserContextProvider>
)}

export default App
