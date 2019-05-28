import React from "react"
import {UserContext} from "../contexts/user"
import LoginLayout from "./login"

const AppLayout = (props, context) =>
  <UserContext.Consumer>
      {contextValue => !contextValue.user ? 
          (<LoginLayout />):(
      <div className="App-layout">
        <header>
          <h1>App layout</h1>
        </header>
        {props.children}
      </div>
    )}
  </UserContext.Consumer>

export default AppLayout
