import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Vanilla JS Games Pack</h1>
  <div>
    <h2>Tic Tac Toe</h2>
    <div id="tic-tac-toe" style="display: grid; grid-template-columns: repeat(3, 50px); gap: 5px;"></div>
    <button id="new-game">New Game</button>
  </div>
`

let currentPlayer = 'X'
const board = Array(9).fill(null)
const ticTacToeBoard = document.getElementById('tic-tac-toe')
const newGameBtn = document.getElementById('new-game')

function createBoard() {
  ticTacToeBoard.innerHTML = ''
  board.fill(null)
  currentPlayer = 'X'
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.style.border = '1px solid #ccc'
    cell.style.height = '50px'
    cell.style.display = 'flex'
    cell.style.alignItems = 'center'
    cell.style.justifyContent = 'center'
    cell.style.cursor = 'pointer'
    cell.style.fontSize = '24px'
    cell.addEventListener('click', () => makeMove(i))
    ticTacToeBoard.appendChild(cell)
  }
}

function makeMove(index) {
  if (board[index] || checkWinner()) return
  board[index] = currentPlayer
  const cells = ticTacToeBoard.children
  cells[index].textContent = currentPlayer
  if (checkWinner()) {
    alert(`Player ${currentPlayer} wins!`)
  } else if (!board.includes(null)) {
    alert('It\'s a tie!')
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  }
}

function checkWinner() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]
  return wins.some(combo => combo.every(i => board[i] === currentPlayer))
}

newGameBtn.addEventListener('click', createBoard)
createBoard()