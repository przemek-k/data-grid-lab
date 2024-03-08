const Icon = ({ d }) => ({
  type: "svg",
  props: {
    class: "-ml-0.5 h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
  },
  children: [
    {
      type: "path",
      props: { "fill-rule": "evenodd", "clip-rule": "evenodd", d },
      children: [],
    },
  ],
});

export default Icon;
