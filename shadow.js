const calcShadow = no => {
  switch (no) {
    case 1:
      return [
        ['shadowOffset', '0'],
        ['shadowRadius', 0.75]
      ]
    case 2:
      return [
        ['shadowOffset', '0 0.75'],
        ['shadowRadius', 1, 5]
      ]
    default:
      return [
        ['shadowOffset', `0 ${no - 1}`],
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