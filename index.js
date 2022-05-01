const blessed = require('blessed')
const contrib = require('blessed-contrib')

const screen = blessed.screen()

const grid = new contrib.grid({rows: 12, cols: 12, screen: screen})

const work = grid.set(0, 0, 6, 6, blessed.box, makeScrollBox('DLW'))
const feed = grid.set(0, 6, 6, 6, blessed.box, makeScrollBox('Updates')) //feed personalizado de atualizações
const news = grid.set(6, 0, 6, 6, blessed.box, makeScrollBox('News'))
const grafico = grid.set(6, 6, 6, 6, blessed.box, makeScrollBox('Tracking'))

function makeBox(label){
  return {
    label: label,
    tags: true,
    border: { 
      type: 'line'
    },
    style: {
      border: { fg: 'cyan' },
      hover: { border: { fg: 'green'}}
    }
  }
}

function makeScrollBox(label){
  const options = makeBox(label)
  options.scrollable = true
  options.scrollbar = { ch:' '}
  options.keys = true
  options.mouse = true
  return options
}
