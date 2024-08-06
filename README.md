# OJT TRAINING

This project is a web application built using Ruby on Rails for the backend and Vue.js as the frontend framework. Vite is used for bundling and serving the Vue.js code, providing a modern development experience with fast Hot Module Replacement (HMR).

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Ruby (version 2.7 or higher)
- Rails (version 6 or higher)
- Node.js (version 14 or higher)
- Yarn (version 1 or higher)
- MySql

### Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject
    ```

2. Install the Ruby gems:

    ```sh
    bundle install
    ```

3. Install the Node.js dependencies:

    ```sh
    yarn install
    ```

4. Setup the database:

    ```sh
    rails db:create
    rails db:migrate
    rails db:seed
    ```

## Usage

### Running the Rails Server

Start the Rails server with the following command:

```sh
rails server
```

By default, the server will run on http://localhost:3000

### Running the Vite Development Server
In a separate terminal, start the Vite development server:

```sh
yarn dev
```
