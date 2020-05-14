const shadow = require('./shadow')

module.exports = {
  fill: (x) => [
    ['position', 'absolute'],
    ['zIndex', 100],
    ['top', 0],
    ['right', 0],
    ['bottom', 0],
    ['left', 0],
  ],
  bg: (x) => ['backgroundColor', x || 'green'],
  reset: (x) => [
    ['margin', 0],
    ['padding', 0],
    ['outline', 0],
  ],
  h: x => ['height', x],
  centerCenter: (x) => [['justifyContent', 'center'], ['alignItems', 'center']],
  startCenter: (x) => [['justifyContent', 'flex-start'], ['alignItems', 'center']],
  startStart: (x) => [['justifyContent', 'flex-start'], ['alignItems', 'flex-start']],
  w: x => ['width', x],
  flex: (x) => ['flex', x || '1'],
  ...shadow
}