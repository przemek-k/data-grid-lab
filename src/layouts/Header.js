import { Button } from "../components";

const Header = () => ({
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
                  children: [
                    Button({
                      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z",
                      text: "Insert Rows",
                    }),
                    Button({ d: "M19 13H5v-2h14z", text: "Remove Rows" }),
                    Button({
                      d: "m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z",
                      text: "Replace Rows",
                    }),
                    Button({
                      d: "m17.66 9.53-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93m18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3",
                      text: "Update Rows",
                    }),
                    Button({
                      d: "M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83",
                      text: "Stream Updates",
                    }),
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

export default Header;
