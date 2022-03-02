# Solution to Feather - Fullstack Engineer code challenge


## Criterias to watch out
- How you write idiomatic code.
- How you deal with UI/UX.
- How you navigate the requirements.
- How you test & write testable code.
- How you package the code.
- How you deal with the security concerns.
- How you communicate with your fellow programmers.

## Tasks from Feather

1. On the [backend](./backend), change the GraphQL schema to reflect the [Data structure](#Data-structure)
2. On the [frontend](./frontend), fetch the data returned by the GraphQL endpoint with the help of the [Apollo client](https://www.apollographql.com)
3. On the [frontend](./frontend), display all the data returned by the endpoint in a table with the help of [tailwindcss](https://tailwindcss.com)
   - At least several fields should be editable in place
   - The table should have pagination and sorting on each of the columns
   - (Bonus) Add a text search input
   - (Bonus) Let the admin filter policies by insurance type or other fields
4. (Bonus) Package the app with Docker
5. (Bonus) Authenticate admins using login/password
6. (Bonus) Create more screens (e.g. customer profile, policy page…)


## Tasks Checklist
- [x] On the backend, change the GraphQL schema to reflect the Data structure.
- [x] On the frontend, fetch the data returned by the GraphQL endpoint with the help of the Apollo client library.
- [x] On the frontend, display all the data returned by the endpoint in a table with the help of tailwindcss.
- [x] Several fields should be editable in place.
- [x] The table should have pagination.
- [x] The table should have sorting on each of the columns.

## Bonus Features Implemented
- [x] Add a text search input
- [x] Let the admin filter policies by insurance type or other fields
- [x] Package the app with Docker
- [x] Authenticate admins using login/password
- [x] Create more screens (e.g. customer profile, policy page…)

## Additional Features Implemented
- [x] Ability to register a new Admin
- [x] JWT Authentication with page authorization
- [x] Ability to hide ad show columns for organization purposes
- [x] Real-time inline edit functionality

## Backend Tools
- GraphQL API
- Typescript
- Apollo Server
- Dayjs
- jsonwebtoken
- bcript
- apollo-server-testing

## Frontend Tools
- Typescript
- React.js
- GraphQL API
- TailwindCSS
- Craco
- Apollo Client
- React Table
- React Icons
- date-fns
- React Router
- JWT Decode

## Data Source
- Apollo Server Mock testing Data
- Local mock data for the insurance policies
- Mongo DB using a single cluster from Mongo DB Atlas for user management

## Testing and Debugging Tools
- Typescript (Strict Mode)
- Eslint
- Jest
- Testing Library
- Apollo Integrated Test
- apollo-server-testing

## State management
- React Context and useReducer Hook

## Security Tip
- DISCLAIMER: The use of local storage to hold the jwt token for state persistent login is NOT recommended for production because it is susceptible to XSS attack. This is only for demonstration purposes.
