let board = [];
let activePlayer = 0;

function startGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    activePlayer = Math.floor(Math.random() * 2); 
    renderBoard(board);
}

function click(row, col) {
    if (board[row][col] === '') {
        board[row][col] = activePlayer === 0 ? 'X' : 'O';
        renderBoard(board);
        if (checkWin(activePlayer)) {
            showWinner(activePlayer);
        } else if (isBoardFull()) {
            let header = modalEl.getElementsByTagName('h2')[0];
            header.textContent = `ничья`; 
            modalEl.classList.remove('hidden');
        } else {
            activePlayer = 1 - activePlayer; 
        }
    }
}

function checkWin(player) {
    const symbol = player === 0 ? 'X' : 'O';
    for (let i = 0; i < 3; i++) {
        if ((board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) ||
            (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol)) {
            return true;
        }
    }
    if ((board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
        (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)) {
        return true;
    }
    return false;
}

function isBoardFull() {
    for (let row of board) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
}
