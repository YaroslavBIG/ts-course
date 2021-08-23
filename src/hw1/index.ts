import { Currency } from './source';

const c = new Currency(5.54)
console.log(c.dollars())
console.log(c.cents())
console.log(c.toJSON())