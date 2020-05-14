const calcShadow = no => {
  switch (no) {
    case 1:
      return `0px 0.5px; shadow-radius: 0.75px`
    case 2:
      return `0px 0.75px; shadow-radius: 1.5px`
    default:
      return `0px ${no - 1}px; shadow-radius: ${no}px`
  }
}

module.exports = {
  shadow: (x = 1) => [
    ['elevation', x || 1],
    ['shadowColor', ' #000'],
    ['shadowOpacity', 0.24],
    ['shadowOffset', calcShadow(x || 1)],
  ]
}