const Header = ({ children }) => ({
  type: "header",
  props: { class: "bg-gray-100 shadow-sm" },
  children: [
    {
      type: "div",
      props: { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
      children: [
        {
          type: "div",
          props: { class: "flex h-16 justify-between" },
          children: [
            {
              type: "div",
              props: { class: "flex" },
              children: [
                {
                  type: "div",
                  props: { class: "flex flex-shrink-0 items-center" },
                  children: [
                    {
                      type: "h1",
                      props: {
                        class: "text-lg font-semibold leading-6 text-gray-900",
                      },
                      children: ["Control Panel"],
                    },
                  ],
                },
              ],
            },
            {
              type: "div",
              props: { class: "flex items-center" },
              children: [
                {
                  type: "div",
                  props: { class: "flex-shrink-0 space-x-1" },
                  children,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default Header;
