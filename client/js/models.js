const mathOps = {
  "+": x => y => x + y,
  "-": x => y => x - y,
  x: x => y => x * y,
  "/": x => y => x / y
};

function parseCalculation(str) {
  const maths = [];
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) || str[i] === "0") {
      num += str[i];
      console.log(num);
    } else {
      maths.push(num);
      maths.push(str[i]);
      num = "";
    }
  }
  maths.push(num);
  return maths;
}

function calculate(equation) {
  console.log(parseCalculation(equation));
  return parseCalculation(equation).reduce((res, op) => {
    if (Number(op) || op === "0") {
      return res(Number(op));
    }
    return mathOps[op](res);
  }, mathOps["+"](0));
}
