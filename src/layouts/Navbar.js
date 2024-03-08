import { Icon } from "../components";

const Navbar = () => ({
  type: "nav",
  props: { class: "bg-gray-800" },
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
                        class: "text-2xl font-semibold leading-6 text-white",
                      },
                      children: ["Data Grid Lab"],
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
                  props: { class: "flex-shrink-0" },
                  children: [
                    {
                      type: "a",
                      props: {
                        href: "#",
                        class:
                          "inline-flex items-center gap-x-1.5 rounded-md bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100",
                      },
                      children: [
                        Icon({
                          d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27",
                        }),
                        "GitHub",
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

export default Navbar;
