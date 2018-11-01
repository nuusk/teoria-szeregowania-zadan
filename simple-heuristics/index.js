const fs = require('fs');
const Solver = require('./classes/Solver');

const solver = new Solver();
const data = [4,56,7,1,75453,43,746,23,4,55,32,46];

console.log(solver.solve(data));