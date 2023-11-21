function scoreReducer(currentState, action) {
  if (action === "ONE") {
    return currentState + 1;
  }
  if (action === "TWO") {
    return currentState + 2;
  }
  if (action === "THREE") {
    return currentState + 3;
  }
  if (action === "FOUR") {
    return currentState + 4;
  }
  if (action === "SIX") {
    return currentState + 6;
  }
  if (action === "RESET") {
    return 0;
  }
}

export default scoreReducer;
