import { classNames } from "../utils";

const COL_DEFS = [
  { id: "id", label: "Id" },
  { id: "code", label: "Code" },
  { id: "name", label: "Name" },
  { id: "bid", label: "Bid" },
  { id: "mid", label: "Mid" },
  { id: "ask", label: "Ask" },
  { id: "volume", label: "Volume" },
];

const HeaderCell = ({ first, value }) => ({
  type: "td",
  props: {
    class: classNames(
      "whitespace-nowrap text-left text-sm font-semibold sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter",
      {
        "py-3.5 pl-4 pr-3 sm:pl-0": !!first,
        "px-2 py-3.5": !first,
      }
    ),
  },
  children: [value.toString()],
});

const ValueCell = ({ first, value }) => ({
  type: "td",
  props: {
    class: classNames("whitespace-nowrap text-sm text-gray-600", {
      "py-2 pl-4 pr-3 sm:pl-0": !!first,
      "px-2 py-2": !first,
    }),
  },
  children: [value.toString()],
});

const Table = ({ rows }) => ({
  type: "table",
  props: { class: "min-w-full divide-y divide-gray-300" },
  children: [
    {
      type: "thead",
      props: {},
      children: [
        {
          type: "tr",
          props: {},
          children: COL_DEFS.map(({ label }, i) =>
            HeaderCell({ first: i === 0, value: label })
          ),
        },
      ],
    },
    {
      type: "tbody",
      props: { class: "divide-y divide-gray-200 bg-white" },
      children: rows.map((row) => ({
        type: "tr",
        props: {},
        children: COL_DEFS.map(({ id }, i) =>
          ValueCell({ first: i === 0, value: row[id] })
        ),
      })),
    },
  ],
});

export default Table;
