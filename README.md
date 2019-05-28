# Using React Context to implement protected pages
> Creating an App with protected routes using context


## Running
- `yarn start`

## Structure
- `/src/app.js`: Handles routing and first mount, while wrapping contexts
- `/src/contexts/user.js`: The user context that handles auth
- `/src/layouts/public.js`: Public layout, does not consume the user context
- `/src/layouts/app.js`: Protected layout, requires authenticated user to render
- `/src/layouts/login.js`: Login layout to allow user authentication
