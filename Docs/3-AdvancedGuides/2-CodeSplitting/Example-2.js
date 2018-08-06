//ANTES
import { add } from './math';

console.log(add(16, 26));

//DEPOIS
import("./math").then(math => {
    console.log(math.add(16, 26));
});