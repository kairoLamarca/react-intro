//ANTES
import OtherComponent from './OtherComponent';

const MyComponent = () => (
    <OtherComponent />
);

//DEPOIS
import Loadable from 'react-loadable';

const LoadableOtherComponent = Loadable({
    loader: () => import('./OtherComponent'),
    loading: () => <div>Loading...</div>,
});

const MyComponent = () => (
    <LoadableOtherComponent />
);