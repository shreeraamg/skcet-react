function myFunction(OriginalComponent) {
  const EnhancedComponent = () => {
    console.log("From myFunction");
    return <OriginalComponent />;
  };

  return EnhancedComponent;
}

export default myFunction;
