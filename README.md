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

## Usage

1. Open the app trough the `npm run preview` or `npm run dev` commands.
2. Start drawing your circuit on the canvas:
    - On the canvas, right-click to show the canvas menu, and select `Create Node`.
    - Right-click on the node to show the node menu, and select `Change Image` and select an image relevant to your circuit node.
    - Right-click on the node to show the node menu, and select `Add Port` and select the port location and type.
    - You can rename the circuit node label or port label by double-clicking on the label. The port or port label can also be deleted (right-click on the port to show the port menu and go from there).
    - After you are satisfied with your changes to the circuit node, and if you wish to save the circuit node to be able to reuse it in the current or a different circuit, you can right-click on the circuit node and press `Save Node to Library`.
    - You can reuse the node by right-clicking on the canvas and selecting `Add Node from Library`.
    - The connections between circuit nodes can be done by drag-and-dropping one port to the destination port (if it is a compatible port).



## Demo
You can view the deployed version of the application [here](https://code-forge-temple.github.io/circuit-sketcher-app).

## License
This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.