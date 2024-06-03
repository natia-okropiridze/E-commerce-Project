function Button({ children, className, ...props }) {
  return (
    <button className="p-2 bg-success text-light border-0" {...props}>
      {children}
    </button>
  );
}
export default Button;
