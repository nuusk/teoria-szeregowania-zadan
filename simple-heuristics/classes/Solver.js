class Solver {
  constructor() {
    console.log(`I'm being created! \n ~Solver`);
  }

  solve(data) {
    return data.sort((a, b) => a - b);
  }
}

module.exports = Solver;