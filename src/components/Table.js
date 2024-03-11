import { classNames } from "../utils";

const COL_DEFS = [
  { field: "id", label: "Id" },
  { field: "code", label: "Code" },
  { field: "name", label: "Name" },
  { field: "bid", label: "Bid" },
  { field: "mid", label: "Mid" },
  { field: "ask", label: "Ask" },
  { field: "volume", label: "Volume" },
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
        props: { key: row.id },
        children: COL_DEFS.map(({ field }, i) =>
          ValueCell({ first: i === 0, value: row[field] })
        ),
      })),
    },
  ],
});

export default Table;
