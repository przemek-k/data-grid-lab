import { Button, Icon, VanishingSpan, Table } from "./components";
import { TopBar, ControlPanel, Main } from "./layouts";
import store from "./store";

/* Handlers */
const insertRows = () => store.dispatch({ type: "INSERT_ROWS" });
const removeRows = () => store.dispatch({ type: "REMOVE_ROWS" });
const replaceRows = () => store.dispatch({ type: "REPLACE_ROWS" });
const updateRows = () => store.dispatch({ type: "UPDATE_ROWS" });
const streamingUpdates = () => store.dispatch({ type: "TOGGLE_STREAMING" });

const App = ({ isStreaming, rows }) => {
  const noRows = rows.length === 0;

  return {
    type: "div",
    props: {},
    children: [
      TopBar(),
      ControlPanel({
        children: [
          Button({
            onClick: streamingUpdates,
            children: [
              Icon({
                d: "M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83",
              }),
              VanishingSpan(`${isStreaming ? "Stop" : "Start"} Streaming`),
            ],
            disabled: noRows,
          }),
          Button({
            onClick: insertRows,
            children: [
              Icon({ d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }),
              VanishingSpan("Insert Rows"),
            ],
            disabled: isStreaming || !noRows,
          }),
          Button({
            onClick: removeRows,
            children: [
              Icon({ d: "M19 13H5v-2h14z" }),
              VanishingSpan("Remove Rows"),
            ],
            disabled: isStreaming || noRows,
          }),
          Button({
            onClick: replaceRows,
            children: [
              Icon({ d: "m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z" }),
              VanishingSpan("Replace Rows"),
            ],
            disabled: isStreaming || noRows,
          }),
          Button({
            onClick: updateRows,
            children: [
              Icon({
                d: "m17.66 9.53-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93m18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3",
              }),
              VanishingSpan("Update Rows"),
            ],
            disabled: isStreaming || noRows,
          }),
        ],
      }),
      Main({ children: [Table()] }),
    ],
  };
};

export default App;
