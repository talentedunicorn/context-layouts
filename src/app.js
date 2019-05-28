import React from "react"
import AppLayout from "./layouts/app"
import {UserContextProvider} from "./contexts/user"

const App = props => {
  return (
  <UserContextProvider>
  <AppLayout>
    <main>
      What is App
    </main>
  </AppLayout>
  </UserContextProvider>
)}

export default App
