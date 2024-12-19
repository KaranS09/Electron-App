const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
const pingMsg = document.getElementById('ping')

const func = async () => {
    const response = await window.versions.ping()
    console.log("Testing here lol");
    console.log(response) // prints out 'pong'
    pingMsg.innerText =`Ping: ${response}`
  }
  
  func()