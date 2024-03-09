class Feed {
  constructor({ streamingInterval, numberOfRows }) {
    this.state = { rows: [], isStreaming: false };
    this.subscribers = [];
    this.intervalId = null;
    this.streamingInterval = streamingInterval;
    this.numberOfRows = numberOfRows;
    this.lastId = 0;
  }

  // Subscribe to state changes
  subscribe(callback) {
    this.subscribers.push(callback);
    // Immediately invoke callback with current state
    callback(this.state);
  }

  // Notify all subscribers about the state change
  notifySubscribers() {
    this.subscribers.forEach((callback) => callback(this.state));
  }

  // Method to dispatch actions
  dispatch(action) {
    switch (action.type) {
      case "INIT":
        this.insertRows();
        this.toggleStreaming();
        break;
      case "TOGGLE_STREAMING":
        this.toggleStreaming();
        break;
      case "INSERT_ROWS":
        this.insertRows();
        break;
      case "REPLACE_ROWS":
        this.replaceRows();
        break;
      case "UPDATE_ROWS":
        this.updateRows();
        break;
      case "REMOVE_ROWS":
        this.removeRows();
        break;
      default:
        console.log("Unknown action type:", action.type);
    }
  }

  toggleStreaming() {
    // Toggle the streaming state
    this.state.isStreaming = !this.state.isStreaming;

    // Immediately notify subscribers about the state change
    this.notifySubscribers();

    if (this.state.isStreaming) {
      // If streaming is now on, start the interval for streaming
      this.intervalId = setInterval(
        () => this.updateRows(true),
        this.streamingInterval
      );
    } else {
      // If streaming was turned off, clear the interval
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }

  insertRows() {
    this.state.rows = Array.from({ length: this.numberOfRows }, () => ({
      id: this.lastId++,
      code: `Code-${Math.floor(Math.random() * 100)}`,
      name: `Instrument-${this.lastId}`,
      bid: parseFloat((Math.random() * 100).toFixed(2)),
      mid: parseFloat((Math.random() * 100).toFixed(2)),
      ask: parseFloat((Math.random() * 10).toFixed(2)),
      volume: Math.floor(Math.random() * 1000),
    }));
    this.notifySubscribers();
  }

  replaceRows() {
    this.insertRows(); // Reuse insertRows to generate new rows
  }

  updateRows(streamingUpdate = false) {
    if (this.state.isStreaming && !streamingUpdate) return; // Prevent manual update calls during streaming
    this.state.rows = this.state.rows.map((row) =>
      Math.random() > 0.5
        ? {
            ...row,
            mid: parseFloat((row.mid + Math.random() - 0.5).toFixed(2)),
            bid: parseFloat((row.bid + Math.random() - 0.5).toFixed(2)),
            ask: parseFloat((row.ask + Math.random() - 0.5).toFixed(2)),
            volume: row.volume + parseInt(Math.random() * 100 - 50, 10),
          }
        : row
    );
    this.notifySubscribers();
  }

  removeRows() {
    this.state.rows = [];
    this.notifySubscribers();
  }
}

export default new Feed({ streamingInterval: 1000, numberOfRows: 5 });
