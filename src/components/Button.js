import { classNames } from "../services";

const Button = ({ children, disabled, onClick }) => ({
  type: "button",
  props: {
    class: classNames(
      "inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm border border-gray-300",
      {
        ["bg-gray-50 text-gray-700 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"]:
          !disabled,
        ["bg-gray-300 text-gray-500"]: disabled,
      }
    ),
    disabled,
    onClick,
    type: "button",
  },
  children,
});

export default Button;
