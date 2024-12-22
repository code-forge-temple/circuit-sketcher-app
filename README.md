# circuit-sketcher-app
An application to draw circuits on a canvas, based on circuit-sketcher-core.

## Table of Contents

- [Features](#features)
- [Development](#development)
  - [Installation](#installation)
  - [Building](#building)
  - [Linting](#linting)
  - [Preview](#preview)
  - [Usage](#usage)
- [Demo](#demo)
- [License](#license)

## Features

- Draw and save circuit diagrams
- Load and save canvas and library data
- Save to Local Storage Library the customized circuit nodes
- Responsive design
- Interactive user interface

## Development

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/code-forge-temple/circuit-sketcher-app.git
    cd circuit-sketcher-app
    ```

2. Set the Node.js version:
    - For Unix-based systems:
        ```sh
        nvm use
        ```
    - For Windows:
        ```sh
        nvm use $(cat .nvmrc)
        ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

### Building

To build the project for production, run:
```sh
npm run build
```

### Linting
To lint the project, run:
```sh
npm run lint
```

### Preview
To preview the production build, run:
```sh
npm run preview
```

### Usage

1. Open the application in your browser.
2. Use the toolbar to draw and manipulate circuit elements.
3. Save your work using the save buttons.
4. Load previously saved canvases and libraries using the load buttons.

## Demo
You can view the deployed version of the application [here](https://code-forge-temple.github.io/circuit-sketcher-app).

## License
This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.