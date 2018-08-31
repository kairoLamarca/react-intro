//Se você usar o Yarn , execute:
// yarn add --dev typescript

// Se você usar o npm , execute:
// npm install --save-dev typescript

// {
//     // ...
//     "scripts": {
//       "build": "tsc",
//       // ...
//     },
//     // ...
//   }

//tsc --init

// ├── package.json
// ├── src
// │   └── index.ts
// └── tsconfig.json

//------------------

// tsconfig.json
// {
//     "compilerOptions": {
//       // ...
//       "rootDir": "src",
//       "outDir": "build"
//       // ...
//     },
//   }

// Executando o TypeScript
// Se você seguiu as instruções acima, poderá executar o TypeScript pela primeira vez.
// yarn build

// Se você usar o npm, execute:
// npm run build

// # yarn
// yarn add --dev @types/react

// # npm
// npm i --save-dev @types/react

// declare module 'querystring' {
//     export function stringify(val: object): string
//     export function parse(val: string): object
//   }

//create-react-app my-app --scripts-version=react-scripts-ts