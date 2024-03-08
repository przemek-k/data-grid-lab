const Button = ({ children, onClick }) => ({
  type: "button",
  props: {
    class:
      "inline-flex items-center gap-x-1.5 rounded-md bg-gray-50 px-2.5 py-1.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 border border-gray-300",
    onClick,
    type: "button",
  },
  children,
});

export default Button;
