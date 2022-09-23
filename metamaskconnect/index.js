window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')
const NetworkId = document.getElementById('chainId')
const balanceWLT = document.getElementById('balanceWLT')
const web3 = new Web3(Web3.givenProvider);

/* Ativando Botão */
function toggleButton() {
  if (!window.ethereum) {
    loginButton.innerText = 'MetaMask não está instalada no navegador'
    loginButton.classList.remove('bg-purple-500', 'text-white')
    loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
    return false
  }
  // Acima se não tiver Metamask no navegador irá desativar o botão
  loginButton.addEventListener('click', loginWithMetaMask)
}

/* Realizando login com a Metamask */


async function loginWithMetaMask() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((e) => {
      console.error(e.message)
      return
    })
  if (!accounts) { return }

  console.log(accounts)

    /* Indentifica a Network utilizada atual */
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    let chains = {
        '0x1' : 'Etherium',
        '0x38' : 'Smart Chain',
        '0x89' : 'Polygon'
    } 
     /* Identificando o saldo na Wallet */

    
    const getBalance =  await web3.eth.getBalance(accounts[0])
    let balance = (web3.utils.fromWei(getBalance))    
      console.log(balance)
  /* Print na tela das informações */
  window.userWalletAddress = accounts[0]
  userWallet.innerText = 'Wallet: ' + window.userWalletAddress
  NetworkId.innerText = 'Network atual: ' + chains[chainId]   // changeNetwork (Para mudar de Network conectado)
  balanceWLT.innerText = 'Saldo atual: '+ balance 
  loginButton.innerText = 'Desconectar MetaMask'
  
  loginButton.removeEventListener('click', loginWithMetaMask)
  setTimeout(() => {
    loginButton.addEventListener('click', signOutOfMetaMask)
  }, 200)
}



/*

- Trocar de rede por botão do site

- Identificar troca de rede do MetaMask e exibir no site
*/









/* Sai da MetaMaskt e retorna as definições padrões*/
function signOutOfMetaMask() {
    window.userWalletAddress = null
    userWallet.innerText = ''
    NetworkId.innerText = ''
    balanceWLT.innerText = ''
    loginButton.innerText = 'Conectar a MetaMask'

loginButton.removeEventListener('click', signOutOfMetaMask)
setTimeout(() => {
  loginButton.addEventListener('click', loginWithMetaMask)
}, 200)
}

window.addEventListener('DOMContentLoaded', () => {
toggleButton()
});