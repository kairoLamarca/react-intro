// Define a static method
WrappedComponent.staticMethod = function () {/*...*/ }
// Now apply a HOC
const EnhancedComponent = enhance(WrappedComponent);

// The enhanced component has no static method
typeof EnhancedComponent.staticMethod === 'undefined' // true




function enhance(WrappedComponent) {
    class Enhance extends React.Component {/*...*/ }
    // Must know exactly which method(s) to copy :(
    Enhance.staticMethod = WrappedComponent.staticMethod;
    return Enhance;
}


import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
    class Enhance extends React.Component {/*...*/ }
    hoistNonReactStatic(Enhance, WrappedComponent);
    return Enhance;
}


// Instead of...
MyComponent.someFunction = someFunction;
export default MyComponent;

// ...export the method separately...
export { someFunction };

// ...and in the consuming module, import both
import MyComponent, { someFunction } from './MyComponent.js';