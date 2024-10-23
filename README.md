# Activities App

The **Activities App** is an internship assignment by -Advenzone, it allows users to view and book various activities. This application features a frontend built in React.js, backend built with Node.js, utilizing Prisma ORM for database management with a PostgreSQL database. The app implements Zod for data validation on both GET and POST routes.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Setup the Database](#setup-the-database)
  - [Configuration](#configuration)
  - [Run the Application](#run-the-application)
- [API Endpoints](#api-endpoints)
  - [GET /activities](#get-activities)
  - [POST /activities](#post-activities)
- [Validation](#validation)
- [License](#license)

## Features

- View a list of available activities
- Book activities through a simple POST request
- Data validation using Zod to ensure input integrity
- Efficient database management with Prisma ORM

## Technologies

- Node.js
- React.js
- Express.js
- Prisma ORM
- PostgreSQL
- Zod for validation

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup

1. **Clone the repository**

   Open your terminal and run:

   - git clone https://github.com/aShubh-01/Activities-App.git
   - cd activities-app

2. **Specify the environment variables**

   There are two directories in the project viz :- frontend & backend, add a .env file in each one, then add following variables in respective .env files
   
   Environment variables in frontend dir:-
     1. VITE_BACKEND_URL = http://localhost:3000 (If you want a differenet port, you can specify it in env var or in config.js in /backend directory)
   
   Environment variables in backend dir :-
     1. DATABASE_URL = "your_postgreSQL_datbase_url" (Get your own postgreSQL service on Aiven :- [Aiven](https://aiven.io/postgresql))
     2. PORT = your_port (3000 by default, make sure to specify it in the VITE_BACKEND_URL in the frontend environment variables)

3. **Run the project**
   1. /frontend
      - npm run build
      - npm run dev
   2. /backend
      - npm run build
      - npm run start OR npm run dev
