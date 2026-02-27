<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project is a robust **User API** built with the [Nest](https://github.com/nestjs/nest) framework. It provides a complete CRUD for user management and a secure authentication system. 

Data validation and transformation are strictly handled at the application border, ensuring that all incoming requests (like email and password payloads) are properly sanitized and verified before reaching the business logic.

### 🛠 Tech Stack

* **Framework:** NestJS
* **Database & ORM:** SQLite with Prisma ORM & Prisma Client
* **Authentication:** JSON Web Token (JWT)
* **Security:** `bcrypt` for secure password hashing
* **Validation:** `class-validator` and `class-transformer` for strict DTO validation and payload formatting (e.g., auto-trimming strings).

---

## API Endpoints

The API exposes the following routes. Most user routes are protected by a JWT Authentication Guard, requiring a valid token in the `Authorization` header, except for the login and user registration endpoints.

### Authentication
* `POST /auth/login` - Authenticates a user with email and password, returning a JWT.

### Users
* `POST /users` - Creates/Registers a new user (Public).
* `GET /users` - Retrieves a list of all users (**Protected**).
* `GET /users/:id` - Retrieves a specific user by their ID (**Protected**).
* `PATCH /users/:id` - Updates user information (**Protected**).
* `DELETE /users/:id` - Deletes a user from the database (**Protected**).



## Project Setup

1. **Install the dependencies:**
   Download the required npm packages for this project:
   ```bash
   npm install
   ```

2. **Configure the environment variables:**
   Create a `.env` file in the root directory of the project and add the following information:
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your_jwt_secret"
   ```

3. **Set up Prisma ORM:**
   Run the database migrations and generate the Prisma client:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Author

- **David Ramalho Teixeira de Carvalho** 
- GitHub - [davidrtc14](https://github.com/davidrtc14)
- LinkedIn - [David Carvalho](www.linkedin.com/in/davidrtc14)
- Email - [davidrtc14@gmail.com](mailto:davidrtc14@gmail.com)
## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
