const HiddenSpan = ({ children }) => ({
  type: "span",
  props: { class: "hidden lg:block" },
  children: ["Insert Rows"],
});

export default HiddenSpan;
