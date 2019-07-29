const robots = {
  userInput: require('./robots/user-input.js'),
  text: require('./robots/text.js'),
  state: require('./robots/state.js')
}

async function start(){

  const content = {
    maximumSentences: 7
  }

  robots.userInput()
  await robots.text()

  const content = robots.state.load()

  console.dir(content, {depth: null})
  
  function askAndReturnSearchTerm(){
    return readline.question('Type a Wikipedia search term: ')
  }

  function askAndReturnSearchPrefix(){
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

  console.log(JSON.stringify(content, null, 4))
}

start()