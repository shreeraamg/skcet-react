import myFunction from "./myFucntion";

const ComponentTwo = () => {
  console.log("From component two");
  return <div>ComponentTwo</div>;
};

export default myFunction(ComponentTwo);
