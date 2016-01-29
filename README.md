# ReactFlux-Starter
ReactFlux-Starter project

# Takeaways
* React
* JSX
* Browserify
* npm
* Sass

# Getting started
1. Install node
2. Verify installation
..* npm --version (e.g. v2.11.3)
..* node --version (e.g. v0.12.7)
3. npm install
..* on linux/os x, sudo

Okay, you're all set.

# Building the code
In the 'package.json' file certain scripts (tasks) are provided. These scripts can be run by issuing **npm run *<script>***.

* **npm run clean**, cleans (removes) the dist(ribution) folder.
* **npm run build**, builds the code and copies it to the dist(ribution) folder
* **npm run watch**, watches the code and builds it, on change. (**Use watch**. :-))

# Serving the distribution
This starter project ships with a server.js which uses **express** as a web server. It can be ran by issuing **node server.js** within the root folder (=location where server.js resides).

Hoorah, you can go and check out your code by browsing to 'http://localhost:3000'.

# Livereload
You can also use the power of livereload by installing the livereload plugin in Chrome (or firefox).
