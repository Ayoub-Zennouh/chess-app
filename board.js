

class Board {

    constructor() {
        this.pieces = 'RNBQKBNR';
        this.board = [];
        for (let i = 0; i < 64; i++)
            if (i < 8)
                this.board.push({ color: 'w', type: this.pieces.charAt(i) })
            else if (i < 16)
                this.board.push({ color: 'w', type: 'P' })
            else if (i < 48)
                this.board.push(null)
            else if (i < 56)
                this.board.push({ color: 'b', type: 'P' })
            else
                this.board.push({ color: 'b', type: this.pieces.charAt(i % 56) })
    }

    move(piece, position) {
        this.board[position] = this.board[piece.position];
        this.board[piece.position] = null;
        if( piece.type == 'P'){
            if(piece.color == 'w' && position > 55)
                this.board[position].type = 'Q';
            if(piece.color == 'b' && position < 8)
                this.board[position].type = 'Q';
        }
    }

    availableMoves(piece) {
        let type = piece.type;

        if (type == 'P')
            return this.movePawn(piece);
        else if (type == 'N')
            return this.moveKnight(piece);
        else if (type == 'B')
            return this.moveBishop(piece);
        else if (type == 'R')
            return this.moveRook(piece);
        else if (type == 'Q')
            return this.moveQueen(piece);
        else if (type == 'K')
            return this.moveKing(piece);
    }


    movePawn(piece) {
        let moves = [];
        if (piece.color == 'w') {
            if (!this.board[piece.position + 8]) {
                moves.push(piece.position + 8);

                if (piece.position < 16 && !this.board[piece.position + 16])
                    moves.push(piece.position + 16);
            }

            if (this.board[piece.position + 7] && piece.position%8 != 0 && this.board[piece.position + 7].color != piece.color)
                moves.push(piece.position + 7);
            if (this.board[piece.position + 9] && piece.position%8 != 7 && this.board[piece.position + 9].color != piece.color)
                moves.push(piece.position + 9);
        } else {
            if (!this.board[piece.position - 8]) {
                moves.push(piece.position - 8);

                if (piece.position > 47 && !this.board[piece.position - 16])
                    moves.push(piece.position - 16);
            }

            if (this.board[piece.position - 7] && piece.position%8 != 7 && this.board[piece.position - 7].color != piece.color)
                moves.push(piece.position - 7);
            if (this.board[piece.position - 9] && piece.position%8 != 0 && this.board[piece.position - 9].color != piece.color)
                moves.push(piece.position - 9);
        }
        return moves;
    }

    moveKnight(piece) {
        let moves = [];

        

        if (piece.color == 'w') {

        } else {

        }
    }

    moveBishop(piece) {
        if (piece.color == 'w') {

        } else {

        }
    }

    moveRook(piece) {
        if (piece.color == 'w') {

        } else {

        }
    }

    moveQueen(piece) {
        if (piece.color == 'w') {

        } else {

        }
    }

    moveKing(piece) {
        if (piece.color == 'w') {

        } else {

        }
    }
}