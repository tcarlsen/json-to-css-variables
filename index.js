function jsonToCssVariables(json, options) {
  options = options || {}

  const offset = options.offset === undefined ? 0 : options.offset

  let count = 0
  let output = `${options.element ? options.element : ':host'} {${options.pretty ? '\n' : ''}`

  for (let key in json) {
    if (count >= offset) {
      let value = json[key]

      if (!isNaN(value) && value !== 0) {
        value += options.unit === undefined ? 'px' : options.unit
      }

      output += `${options.pretty ? '\t' : ''}--${key}: ${value};${options.pretty ? '\n' : ''}`
    }

    count++
  }

  output += '}'

  return output
}

module.exports = jsonToCssVariables
