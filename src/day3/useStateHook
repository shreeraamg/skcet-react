function stateHook(initialValue) {
  let localVariable = 0;
  localVariable = initialValue;
  const updaterFunction = (num) => {
    localVariable = num;
  };
  return [localVariable, updaterFunction];
}

const arr = stateHook(10);
console.log(arr[0]);
arr[1](12);
console.log(arr[0]);
