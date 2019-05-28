import React from "react"
import {UserContext} from "../contexts/user"

const LoginLayout = props =>
  <UserContext.Consumer>
  { context => 
      <section>
        <p>You are not logged in</p>
        <button 
          onClick={() => context.authenticateUser('password')}>Click to authenticate</button>
      </section>
  }
  </UserContext.Consumer>

export default LoginLayout
