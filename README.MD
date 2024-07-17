# Kalderos Pokémon App

Kalderos Pokémon App is a full-stack application built with ASP.NET Core for the backend API (`PokemonApi`) and React for the frontend (`react-pokemon-frontend`). The application allows users to explore various Pokémon species, view detailed information about each Pokémon, and sort and filter Pokémon based on different attributes.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application Locally](#running-the-application-locally)
- [Publishing the Frontend](#publishing-the-frontend)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a list of Pokémon species with pagination.
- View detailed information about each Pokémon, including types, moves, abilities, and evolution.
- Sort Pokémon by different attributes such as number, name, generation, height, weight, and moves count.
- Filter Pokémon by number, name, type, generation, and moves.
- Responsive design using Material-UI for a modern and consistent user interface.
- Summary data about Pokémon, including counts per type and generation.
- Endpoints to get Pokémon details by number and name.

## Prerequisites

**Operating System:** Windows

### Backend

- [.NET SDK 7.0](https://download.visualstudio.microsoft.com/download/pr/08bbfe8f-812d-479f-803b-23ea0bffce47/c320e4b037f3e92ab7ea92c3d7ea3ca1/windowsdesktop-runtime-7.0.20-win-x64.exe)

### Frontend

- [Node.js 20.13.1](https://nodejs.org/download/release/v20.13.1/)
- [npm 10.5.2](https://www.npmjs.com/package/npm/v/10.5.2)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/PaladinKnightMaster/kalderos-pokemon-app.git
   cd kalderos-pokemon-app
   ```

## Running the Application Locally

### Backend Setup (PokemonApi)

1. **Navigate to the API project directory:**

   ```bash
   cd PokemonApi
   ```

2. **Publish the application:**

   ```bash
   dotnet publish -c Release -o ./publish
   ```

3. **Run the application:**

   ```bash
   dotnet run
   ```

   Alternatively, you can run the application from the published project:

   ```bash
   cd publish
   dotnet PokemonApi.dll
   ```

   The API will be running at `http://localhost:5000`.

### Frontend Setup (react-pokemon-frontend)

1. **Navigate to the frontend project directory:**

   ```bash
   cd ../react-pokemon-frontend
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

    - Copy the `.env.sample` file to `.env`:

        ```bash
        cp .env.sample .env
        ```

    - Open the `.env` file and set the required environment variables. This file should contain all necessary configuration variables like API base URL, etc.

4. **Start the frontend application:**

   ```bash
   npm start
   ```

   The frontend will be running at `http://localhost:3000`.

## Publishing the Frontend

To publish the frontend for production, follow these steps:

1. **Build the frontend application:**

   ```bash
   npm run build
   ```

   This will create a `build` directory with the production build of your app.

2. **Serve the build files:**

   You can serve the build files using a static file server or integrate it with your backend server. For example, using a simple static file server like `serve`:

   - Install `serve` globally if you haven't already:

     ```bash
     npm install -g serve
     ```

   - Serve the build directory:

     ```bash
     serve -s build
     ```

   If you encounter an execution policy error on Windows, follow these steps:

   - Open PowerShell as an Administrator and run:

     ```powershell
     Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
     ```

   - Serve the build directory again:

     ```bash
     serve -s build
     ```

   The production build will be served at `http://localhost:3000`.

## Project Structure

The project structure is organized as follows:

```
kalderos-pokemon-app/
├── PokemonApi/
│   ├── bin/
│   ├── Controllers/
│   ├── obj/
│   ├── Properties/
│   │   ├── launchSettings.json
│   ├── publish/
│   ├── appsettings.Development.json
│   ├── appsettings.json
│   ├── Pokemon.cs
│   ├── pokemon.json
│   ├── PokemonApi.csproj
│   ├── PokemonRepository.cs
│   ├── Program.cs
├── react-pokemon-frontend/
│   ├── build/
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── Filters.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── PokemonTable.jsx
│   │   │   └── SummarySection.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── PokemonDetail.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── .env.sample
│   ├── package.json
└── README.md
```

## Endpoints

- **Get Summary:**

  ```http
  GET /api/pokemon/summary
  ```

- **Get Paginated Pokémon List:**

  ```http
  GET /api/pokemon?page=1&pageSize=25
  ```

- **Get Pokémon by Number:**

  ```http
  GET /api/pokemon/{number}
  ```

- **Get Pokémon by Name:**

  ```http
  GET /api/pokemon/name/{name}
  ```

## Testing

### Frontend (react-pokemon-frontend)

This project uses Jest and React Testing Library for unit and integration testing.

**Run all tests:**

   ```bash
   npm test
   ```

### Sample Test Cases

- **PokemonTable Component:**
  - Renders the Pokémon table with data.
  - Sorts the table by number, name, generation, height, weight, and moves count.

- **PokemonDetail Component:**
  - Renders Pokémon details based on the route parameter.
  - Displays the evolution chain of the Pokémon.

## Technologies Used

- **Backend:**
  - ASP.NET Core 7.0
  - Newtonsoft.Json
- **Frontend:**
  - React
  - Axios
  - React Router
  - Material UI

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Open a pull request to the main repository.

Please ensure all tests pass before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.