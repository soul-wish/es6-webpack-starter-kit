# ES6 starter kit (with webpack and babel)

Example repo showing how to automatically generate a CSS bundle (from required Sass sources directly inside your JS components) and JS bundle (from ES6 modules and components) with Webpack.

## Includes
- [Babel](https://babeljs.io/)
- [Sass](http://sass-lang.com/) (based on [libsass](https://github.com/sass/libsass) compiler)
- [Autoprefixer](https://autoprefixer.github.io/)
- [Extract text plugin for webpack](https://github.com/webpack/extract-text-webpack-plugin)

## Additional features
- Component-based architecture
- Ready to use npm scripts
- Configured Webpack dev server with hot reload

## Usage
- `npm install`

#### Usecase #1

- `npm run start` to start a dev server
- go to `http://localhost:8080/webpack-dev-server/` and check your sample app and DevTools console
- try to change and save any component in `app/components/` and see what happens

#### Usecase #2

- `npm run build` to create a build
- take a look at the generated files in `build/` folder
