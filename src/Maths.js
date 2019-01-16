import React, { Component } from 'react';

// path="/:operation/:val1/:val2"

const operators = {
  add: (val1, val2) => val1 + val2,
  subtract: (val1, val2) => val1 - val2,
  multiply: (val1, val2) => val1 * val2,
  divide: (val1, val2) => val1 / val2
};

class Maths extends Component {
  render() {
    const params = this.props.match.params;
    if (!(params.operation in operators)) {
      return <p>OPERATOR INVALID</p>;
    }
    if (!params.val1 || !params.val2) {
      return <p>MISSING PARAMS</p>;
    }
    const result = operators[params.operation](+params.val1, +params.val2);
    return <div className="Maths">Result: {result}</div>;
  }
}

export default Maths;
