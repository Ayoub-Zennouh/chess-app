

const FILE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var board = new Board();
var selectedPiece = null;
var availableMoves = [];
var player = 'w';

init();

function init() {
    var gameBoard = document.querySelector('.board');
    gameBoard.innerHTML = "";
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let cell = document.createElement('div');
            let cellColor = "";

            if (row % 2)
                cellColor = col % 2 ? 'black' : 'white';
            else
                cellColor = col % 2 ? 'white' : 'black';

            cell.classList.add(...['cell', cellColor]);
            var id = row * 8 + col;
            if (player == 'w')
                cell.id = "c-" + id;
            else
                cell.id = "c-" + (63 - id);

            cell.addEventListener('click', click);
            gameBoard.appendChild(cell);
        }
    }
    document.querySelector("#player").innerHTML = player;
    refresh();
}

function click(e) {
    var position = Number(e.target.id.split('-')[1]);
    
    refresh();
    var piece = board.board[position];
    if (selectedPiece) {
        if (piece) {
            if (piece.color == player) {
                selectedPiece = { position: position, ...piece };
                availableMoves = board.availableMoves(selectedPiece);
                highlight(availableMoves);
            } else {
                if(availableMoves.includes(position)){
                    board.move(selectedPiece, position);
                }
                selectedPiece = null;
                availableMoves = [];
            }
        } else {
            if(availableMoves.includes(position)){
                board.move(selectedPiece, position);

            }
            selectedPiece = null;
            availableMoves = [];
        }
        refresh();
    } else {
        if (piece) {
            if (piece.color == player) {
                selectedPiece = { position: position, ...piece };
                availableMoves = board.availableMoves(selectedPiece);
                highlight(availableMoves);
            } else {
                console.log('not a move');
                selectedPiece = null;
                availableMoves = [];
            }
        }else{
            console.log('not a move');
            selectedPiece = null;
            availableMoves = [];
        }
    }
}

function changePlayer() {
    player = (player == 'w') ? 'b' : 'w';
    document.querySelector("#player").innerHTML = player;
    init();
}

function highlight(moves){
    console.log(moves);
    let cell;
    for(let move in moves){
        cell = document.querySelector('#c-'+moves[move]);
        cell.classList.add('available')
    }
}

function refresh() {
    for (let i = 0; i < 64; i++) {
        var piece = board.board[i];
        var cell = document.querySelector('#c-' + i);
        var cellColor = cell.classList.contains('black') ? 'black' : 'white';
        cell.classList = [cellColor + ' cell'];
        if (piece) {
            cell.classList.add(piece.color + piece.type, 'piece');
        }
    }
}
