// app.ts
import { powerOf2, randomInteger } from './math';

console.log( powerOf2(50) );
console.log( powerOf2(42) );

console.log('RANDOM INTEGER');
console.log( randomInteger(999) );


import * as blah from './math';

console.log( blah.powerOf2(50) );
console.log( blah.powerOf2(42) );

console.log('RANDOM INTEGER');
console.log( blah.randomInteger(999) );
