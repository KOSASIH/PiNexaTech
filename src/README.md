# PiNexa Source Code Overview

Welcome to the PiNexa source code repository! This README provides an overview of the `/src` directory structure and instructions for developers on how to contribute to and work with the source code.

## Directory Structure

The `/src` directory contains the source code for the PiNexa project. Here's an overview of the directory structure:

- `/src`
  - `backend/`: Contains backend code, including server, routes, controllers, models, middleware, and tests.
  - `frontend/`: Contains frontend code, including components, styles, scripts, and tests.
  - `shared/`: Contains code shared between the backend and frontend, such as utility functions and constants.
  - `tests/`: Contains test suites for both backend and frontend components.
  - `assets/`: Contains static assets such as images and fonts used in the frontend.

## Contributing

We welcome contributions from the community to improve PiNexa! To contribute, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and ensure they pass the tests locally.
4. Commit your changes: `git commit -am 'Add new feature'`.
5. Push to the branch: `git push origin feature-name`.
6. Submit a pull request to the `main` branch of the original repository.

Please ensure that your code follows the project's coding style and conventions. Include relevant test cases for new features or fixes, and update documentation as needed.

## Getting Started

To get started with PiNexa development, follow these steps:

1. Install Node.js and npm on your system if you haven't already.
2. Clone the repository to your local machine: `git clone https://github.com/KOSASIH/pinexa.git`.
3. Navigate to the `/src` directory: `cd pinexa/src`.
4. Install dependencies for both backend and frontend: `npm install`.
5. Start the development server: `npm start`.
6. Open your browser and navigate to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
