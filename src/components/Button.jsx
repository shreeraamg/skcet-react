const Button = (props) => {
  return (
    <button className={`px-4 py-2 bg-${props.color}-500 rounded-lg text-`}>
      {props.children}
    </button>
  );
};

export default Button;
