const STOCKS = [
  { code: "ECV.L", name: "Eco City Vehicles plc" },
  { code: "MHN.L", name: "Menhaden Capital" },
  { code: "SWJ.L", name: "John Swan & Sons plc" },
  { code: "JDT.L", name: "Jupiter Dividend & Growth Trust PLC" },
  { code: "UANC.L", name: "Urban&Civic; plc" },
  { code: "SDP.L", name: "Schroder Asia Pacific Ord" },
  { code: "HSBA.L", name: "HSBC Holdings plc" },
  { code: "XPL.L", name: "XPLORER" },
  { code: "KLR.L", name: "Keller Group plc" },
  { code: "SSE.L", name: "SSE plc" },
  { code: "JSI.L", name: "Jiasen International Holdings Limited" },
  { code: "UBMN.L", name: "UBM I14 NP" },
  { code: "WPC.L", name: "Witan Pacific Ord" },
  { code: "VTC.L", name: "The Vitec Group plc" },
  { code: "UTG.L", name: "Unite Group plc" },
  { code: "DOR.L", name: "DORIEMUS" },
  { code: "44RS.L", name: "Santander UK Group Holdings plc" },
  { code: "GPOR.L", name: "Great Portland Estates plc" },
  { code: "ASL.L", name: "Aberforth Smaller Companies Ord" },
  { code: "40JP.L", name: "CAIXA GERAL FIN NCP" },
  { code: "133716.L", name: "XEROS TECH GR" },
  { code: "PJF.L", name: "The Prospect Japan Fund Limited" },
  { code: "MLC.L", name: "Millennium & Copthorne Hotels plc" },
  { code: "137817.L", name: "GCP STUDENT CP" },
  { code: "GHE.L", name: "Gresham House plc" },
  { code: "PML.L", name: "Papua Mining plc" },
  { code: "SBRY.L", name: "J Sainsbury plc" },
  { code: "LEN.L", name: "LEYSHON ENERGY" },
  { code: "STS.L", name: "Securities Trust of Scotland Ord" },
  { code: "138654.L", name: "HOCHSCHILD I15 NP" },
  { code: "RWS.L", name: "RWS Holdings plc" },
  { code: "KGF.L", name: "Kingfisher plc" },
  { code: "MSMN.L", name: "Mosman Oil And Gas Limited" },
  { code: "ELTZ.L", name: "Electra Private Equity (Spl) ZDP 2016" },
  { code: "DIVI.L", name: "Diverse Income Trust Ord" },
  { code: "RSW.L", name: "Renishaw plc" },
  { code: "JEL.L", name: "Jersey Electricity plc" },
  { code: "DVO.L", name: "Devro plc" },
  { code: "EMG.L", name: "Man Group plc" },
  { code: "MKLW.L", name: "A&J; Mucklow Group plc" },
  { code: "JPM.L", name: "JPMorgan Chase & Co." },
  { code: "SRE.L", name: "Sirius Real Estate Limited" },
  { code: "UJO.L", name: "Union Jack Oil plc" },
  { code: "AJG.L", name: "ATLAN JAP GRW GBP" },
  { code: "TLW.L", name: "Tullow Oil plc" },
  { code: "IVPG.L", name: "Invesco Perp Select Glo Eq Inc Ord" },
  { code: "ESNT.L", name: "ESSENTRA" },
  { code: "VLOX.L", name: "VELOX3" },
  { code: "YMT1.L", name: "Yang Ming Marine Transport Corporation" },
  { code: "WMH.L", name: "William Hill plc" },
  { code: "GLAF.L", name: "GLI Alternative Finance Ord" },
  { code: "NAR.L", name: "Northamber plc" },
  { code: "DWHT.L", name: "Dewhurst plc" },
  { code: "VER.L", name: "Vernalis plc" },
  { code: "SQS.L", name: "SQS Software Quality Systems AG" },
  { code: "KAZ.L", name: "KAZ Minerals plc" },
  { code: "TTR.L", name: "32Red Plc" },
  { code: "RLE.L", name: "Real Estate Investors plc" },
  { code: "WALG.L", name: "Walcom Group Ltd" },
  { code: "SAR.L", name: "Sareum Holdings plc" },
  { code: "FQM.L", name: "First Quantum Minerals Ltd." },
  { code: "RCI.L", name: "RapidCloud International plc" },
  { code: "LMIF.L", name: "LONMIN I15 FP" },
  { code: "ABD.L", name: "Aberdeen New Dawn Ord" },
  { code: "IBSA.L", name: "IBIS Media VCT 1 Ord" },
  { code: "TMPL.L", name: "Temple Bar Ord" },
  { code: "QRM.L", name: "Quorum plc" },
  { code: "JE.L", name: "JUST EAT" },
  { code: "STG.L", name: "STELLAR" },
  { code: "RAT.L", name: "Rathbone Brothers plc" },
  { code: "KEFI.L", name: "KEFI Minerals Plc" },
  { code: "KLG.L", name: "Asiamet Resources Limited" },
  { code: "RNO.L", name: "Renold plc" },
  { code: "NBPE.L", name: "NB Private Equity Partners Limited" },
  { code: "CPG.L", name: "Compass Group PLC" },
  { code: "INF.L", name: "Informa plc" },
  { code: "HUR.L", name: "Hurricane Energy plc" },
  { code: "PCTZ.L", name: "PICT ZDP 2016 GBP" },
  { code: "TRY.L", name: "TR Property Ord" },
  { code: "FCSS.L", name: "Fidelity China Special Ord" },
  { code: "DUKE.L", name: "Duke Royalty Limited" },
  { code: "OTB.L", name: "On the Beach Group plc" },
  { code: "DRS.L", name: "DRS Data & Research Services plc" },
  { code: "NHL.L", name: "Nomad Foods Limited" },
  { code: "FDSA.L", name: "Fidessa group plc" },
  { code: "VNIL.L", name: "VIETNAM LISTED PORT" },
  { code: "DNE.L", name: "Dunedin Enterprise Ord" },
  { code: "RDSA.L", name: "Royal Dutch Shell plc" },
  { code: "BATS.L", name: "British American Tobacco p.l.c." },
  { code: "STOB.L", name: "Stobart Group Limited" },
  { code: "TCG.L", name: "Thomas Cook Group plc" },
  { code: "STR.L", name: "Stride Gaming plc" },
  { code: "CTY.L", name: "City of London Ord" },
  { code: "97452.L", name: "PROMETH WORLD" },
  { code: "GSS.L", name: "Genesis Emerging Markets Fund" },
  { code: "D4SO.L", name: "Downing Four VCT Dp2011 Str Ords" },
  { code: "SQNC.L", name: "SQN ASS FIN GBP-C-" },
  { code: "131746.L", name: "MACROMAC" },
  { code: "FPM.L", name: "Faroe Petroleum plc" },
  { code: "AAL.L", name: "Anglo American plc" },
  { code: "SL.L", name: "Standard Life plc" },
];

class Store {
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
    this.state.rows = Array.from({ length: this.numberOfRows }, () => {
      const { code, name } = STOCKS[this.lastId % 100];
      return {
        id: this.lastId++,
        code,
        name,
        bid: parseFloat((Math.random() * 100).toFixed(2)),
        mid: parseFloat((Math.random() * 100).toFixed(2)),
        ask: parseFloat((Math.random() * 10).toFixed(2)),
        volume: Math.floor(Math.random() * 1000),
      };
    });
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

export default new Store({ streamingInterval: 1000, numberOfRows: 100 });
