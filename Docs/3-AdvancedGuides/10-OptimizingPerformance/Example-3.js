//Para a compilação de produção mais eficiente do Brunch, instale o uglify-js-brunchplug-in:

// # If you use npm
// npm install --save-dev uglify-js-brunch

// # If you use Yarn
// yarn add --dev uglify-js-brunch

//brunch build -p

//---------------------------

//Para o build de produção Browserify mais eficiente, instale alguns plugins:

// # If you use npm
// npm install --save-dev envify uglify-js uglifyify 

// # If you use Yarn
// yarn add --dev envify uglify-js uglifyify 

// browserify ./index.js \
//   -g [ envify --NODE_ENV production ] \
//   -g uglifyify \
//   | uglifyjs --compress --mangle > ./bundle.js

//------------------------------

// Para a compilação de produção do Rollup mais eficiente, instale alguns plug-ins:

// # If you use npm
// npm install --save-dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-uglify 

// # If you use Yarn
// yarn add --dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-uglify 

// plugins: [
//     // ...
//     require('rollup-plugin-replace')({
//       'process.env.NODE_ENV': JSON.stringify('production')
//     }),
//     require('rollup-plugin-commonjs')(),
//     require('rollup-plugin-uglify')(),
//     // ...
//   ]