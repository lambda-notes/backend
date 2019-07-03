**Contributers**
- [Henry Neal](https://github.com/henron1)
- [Alex King](https://github.com/Alex-AK)
- [Mike Landers](https://github.com/mlanders)
- [Nathan Thomas](https://github.com/nwthomas)

# EXPRESS REST POSTGRES

This directory contains boilerplate for an Express and Postgres server built using RESTful API methodology.

## GETTING STARTED

- Fork or clone the repository
- Add a `.env` file with the following conditions
  - Create a Postgres database somewhere like Heroku or use Docker locally to run an instance of it, and set a `DATABASE_URL` variable
  - Create a `PORT` variable with the port number you want to run your server on (defaults to `8000` if you don't set anything)
  - Create a JWT_SECRET variable for your JSON Web Token creation
- Install all dependencies with `yarn install` or `npm install` including:
  - `bcryptjs`
  - `cors`
  - `dotenv`
  - `faker`
  - `helmet`
  - `jsonwebtoken`
  - `knex`
  - `morgan`
  - `pg`
  - `cross-env`
  - `jest`
  - `nodemon`
  - `supertest`
- Run `yarn start` or `npm start` to launch server
