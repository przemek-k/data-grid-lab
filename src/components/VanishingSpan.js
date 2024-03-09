const HiddenSpan = (text) => ({
  type: "span",
  props: { class: "hidden lg:block" },
  children: [text],
});

export default HiddenSpan;
