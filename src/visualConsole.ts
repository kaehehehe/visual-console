const visualConsole = {
  log: () => {
    return console.log();
  },

  info: () => {
    return console.info();
  },

  warn: () => {
    return console.warn();
  },

  error: () => {
    return console.error();
  },

  assert: () => {
    return console.assert();
  },

  group: () => {
    return console.group();
  },

  groupCollapsed: () => {
    return console.groupCollapsed();
  },
};

export default visualConsole;
