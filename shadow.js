const calcShadow = no => {
  switch (no) {
    case 1:
      return [
        ['shadowOffset', { width: 0, height: 0}],
        ['shadowRadius', 0.75]
      ]
    case 2:
      return [
        ['shadowOffset', { width: 0, height: 0.75}],
        ['shadowRadius', 1, 5]
      ]
    default:
      return [
        ['shadowOffset', { width: 0, height: no - 1}],
        ['shadowRadius', no]
      ]
  }
}


module.exports = {
  shadow: (x = 1) => [
    ['elevation', x || 1],
    ['shadowColor', ' #000'],
    ['shadowOpacity', 0.24],
    ...calcShadow(x || 1)
  ]
}