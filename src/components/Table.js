const Table = () => ({
  type: "table",
  props: {
    class: "min-w-full divide-y divide-gray-300",
  },
  children: [
    {
      type: "thead",
      props: {},
      children: [
        {
          type: "tr",
          props: {},
          children: [
            {
              type: "th",
              props: {
                scope: "col",
                class:
                  "whitespace-nowrap text-left text-sm font-semibold py-3.5 pl-4 pr-3 sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter sm:pl-0",
              },
              children: ["Id"],
            },
            {
              type: "th",
              props: {
                scope: "col",
                class:
                  "whitespace-nowrap text-left text-sm font-semibold px-2 py-3.5 sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter",
              },
              children: ["Code"],
            },
            {
              type: "th",
              props: {
                scope: "col",
                class:
                  "whitespace-nowrap text-left text-sm font-semibold px-2 py-3.5 sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter",
              },
              children: ["Name"],
            },
            {
              type: "th",
              props: {
                scope: "col",
                class:
                  "whitespace-nowrap text-left text-sm font-semibold px-2 py-3.5 sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter",
              },
              children: ["Bid"],
            },
            {
              type: "th",
              props: {
                scope: "col",
                class:
                  "whitespace-nowrap text-left text-sm font-semibold px-2 py-3.5 sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter",
              },
              children: ["Mid"],
            },
            {
              type: "th",
              props: {
                scope: "col",
                class:
                  "whitespace-nowrap text-left text-sm font-semibold px-2 py-3.5 sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter",
              },
              children: ["Ask"],
            },
            {
              type: "th",
              props: {
                scope: "col",
                class:
                  "whitespace-nowrap text-left text-sm font-semibold px-2 py-3.5 sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter",
              },
              children: ["Volume"],
            },
          ],
        },
      ],
    },
    {
      type: "tbody",
      props: {
        class: "divide-y divide-gray-200 bg-white",
      },
      children: [
        {
          type: "tr",
          props: {},
          children: [
            {
              type: "td",
              props: {
                class:
                  "whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-600 sm:pl-0",
              },
              children: ["0"],
            },
            {
              type: "td",
              props: {
                class: "whitespace-nowrap px-2 py-2 text-sm text-gray-600",
              },
              children: ["ECV.L"],
            },
            {
              type: "td",
              props: {
                class: "whitespace-nowrap px-2 py-2 text-sm text-gray-600",
              },
              children: ["Eco City Vehicles plc"],
            },
            {
              type: "td",
              props: {
                class: "whitespace-nowrap px-2 py-2 text-sm text-gray-600",
              },
              children: ["183.03"],
            },
            {
              type: "td",
              props: {
                class: "whitespace-nowrap px-2 py-2 text-sm text-gray-600",
              },
              children: ["186.77"],
            },
            {
              type: "td",
              props: {
                class: "whitespace-nowrap px-2 py-2 text-sm text-gray-600",
              },
              children: ["190.50"],
            },
            {
              type: "td",
              props: {
                class: "whitespace-nowrap px-2 py-2 text-sm text-gray-600",
              },
              children: ["371"],
            },
          ],
        },
      ],
    },
  ],
});

export default Table;
