# Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a browser, making it possible to build server-side applications and tools using JavaScript. The primary difference from client-side JavaScript (which runs in a browser) is that Node.js runs directly on your operating system, and you can interact with the file system, network, and other system-level resources.

## V8 Engine:

The V8 engine is an open-source JavaScript engine developed by Google for use in the Chrome browser. It compiles JavaScript directly into machine code, enabling high-performance execution.
C++ Integration: Node.js leverages the V8 engine, which is written in C++, to execute JavaScript code, but it also exposes a rich set of APIs written in C++ to interact with the operating system, file system, and network, which allows JavaScript to operate outside of the browser.

## NPM (Node Package Manager)

NPM is the default package manager for Node.js. It is used to install, share, and manage dependencies for Node.js projects. With NPM, you can install thousands of libraries (or packages) created by other developers, and integrate them into your project.

### To install a package, use:

<b>npm install package-name</b><br>
The installed packages are saved in the node_modules folder, and the information about the installed packages (including versions) is stored in the package.json file.

### Creating a Node.js Project

To create a Node.js project, follow these steps:

Open a terminal or command prompt.

Run the command to initialize a Node.js project:

<b>npm init</b><br>
This will prompt you to fill out some information about your project (name, version, description, etc.), and will generate a package.json file that stores this information.

You can skip the prompts and accept the default values by using:

<b>npm init -y</b><br>
After the project is initialized, you can start adding dependencies (like libraries) via NPM and write your own JavaScript code for the project.

### Running a Node.js Project

Once you've created a file (e.g., app.js), you can run the file using the Node.js runtime by running:

<b>node app.js</b><br>
This will execute the JavaScript code in app.js and print the output (if any) to the terminal.

You don't have to add the .js extension when running the file in Node.js (it will automatically recognize .js as the default file extension for JavaScript files).

The project will run on the local machine, and if it's a server, you can use it to handle requests from clients (for example, by using the http module in Node.js).

### Key Points:

Node.js allows JavaScript to run outside the browser, making it suitable for server-side programming.

NPM is used to manage external libraries and dependencies.
V8 Engine makes Node.js fast by compiling JavaScript into machine code.

No Browser Features: Unlike browsers, Node.js does not have built-in support for things like the DOM (Document Object Model) or alert() because it's meant for backend/server-side operations.
