const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
const pingMsg = document.getElementById('ping')

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.versions.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
  })
  
  document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.versions.system()
    document.getElementById('theme-source').innerHTML = 'System'
  })

const func = async () => {
    const response = await window.versions.ping()
    console.log("Testing here lol");
    console.log(response) // prints out 'pong'
    pingMsg.innerText =`Ping: ${response}`
  }
  
  func()