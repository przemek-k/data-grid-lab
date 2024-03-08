const Main = ({ children }) => ({
  type: "main",
  props: {},
  children: [
    {
      type: "div",
      props: { class: "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" },
      children: [
        {
          type: "div",
          props: { class: "px-4 sm:px-0" },
          children: [
            {
              type: "div",
              props: { class: "flow-root" },
              children: [
                {
                  type: "div",
                  props: {
                    class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        class:
                          "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: "height: calc(100dvh - 176px)",
                            class: "overflow-y-auto",
                          },
                          children,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default Main;
