import Grid from "./grid.js";
import Tile from "./tile.js";

const gameBoard = document.getElementById("game-board");
const msgElem = document.querySelector('[data-msg]');
const scoreElem = document.querySelector('[data-score]');

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
setupInput();


function setupInput() {
    window.addEventListener("keydown", handleInput, { once: true })
    window.addEventListener("keydown", removeMsg, { once: true })
    window.addEventListener("click", handleClick, { once: true })
    window.addEventListener("click", removeMsg, { once: true })
}

function removeMsg() {
    msgElem.classList.add("hide");
}

async function handleClick(e) {
    switch (e.target.dataset.key) {
        case "Up":
            if (!canMoveUp()) {
                setupInput()
                return
            }
            await moveUp()
            break
        case "Down":
            if (!canMoveDown()) {
                setupInput()
                return
            }
            await moveDown()
            break
        case "Left":
            if (!canMoveLeft()) {
                setupInput()
                return
            }
            await moveLeft()
            break
        case "Right":
            if (!canMoveRight()) {
                setupInput()
                return
            }
            await moveRight()
            break
        default:
            setupInput();
            return;
            break
    }

    grid.cells.forEach(cell => cell.mergeTiles());

    const newTile = new Tile(gameBoard)
    grid.randomEmptyCell().tile = newTile;
    getScore();
    if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
        newTile.waitForTransition(true).then(() => {
            handleLoss();
        })
        return
    }

    setupInput();

}

async function handleInput(e) {
    switch (e.key) {
        case "ArrowUp":
            if (!canMoveUp()) {
                setupInput()
                return
            }
            await moveUp()
            break
        case "ArrowDown":
            if (!canMoveDown()) {
                setupInput()
                return
            }
            await moveDown()
            break
        case "ArrowLeft":
            if (!canMoveLeft()) {
                setupInput()
                return
            }
            await moveLeft()
            break
        case "ArrowRight":
            if (!canMoveRight()) {
                setupInput()
                return
            }
            await moveRight()
            break
        default:
            setupInput();
            return;
            break
    }

    grid.cells.forEach(cell => cell.mergeTiles());

    const newTile = new Tile(gameBoard)
    grid.randomEmptyCell().tile = newTile;
    getScore();
    if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
        newTile.waitForTransition(true).then(() => {
            handleLoss();
        })
        return
    }

    setupInput();
}

function moveUp() {
    return slideTiles(grid.cellsByCol)
}

function moveDown() {
    return slideTiles(grid.cellsByCol.map(column => [...column].reverse()))
}

function moveLeft() {
    return slideTiles(grid.cellsByRow)
}

function moveRight() {
    return slideTiles(grid.cellsByRow.map(column => [...column].reverse()))
}

function slideTiles(cells) {

    return Promise.all(
        cells.flatMap(group => {
            const promises = []
            for (let i = 1; i < group.length; i++) {
                const cell = group[i];
                if (cell.tile == null) continue;
                let lastValidCell
                for (let j = i - 1; j >= 0; j--) {
                    const moveToCell = group[j]
                    if (!moveToCell.canAccept(cell.tile)) break;
                    lastValidCell = moveToCell
                }
                if (lastValidCell != null) {
                    promises.push(cell.tile.waitForTransition())
                    if (lastValidCell.tile != null) {
                        lastValidCell.mergeTile = cell.tile;
                    } else {
                        lastValidCell.tile = cell.tile;
                    }
                    cell.tile = null
                }
            }
            return promises
        })
    )
}

function canMoveUp() {
    return canMove(grid.cellsByCol)
}

function canMoveDown() {
    return canMove(grid.cellsByCol.map(column => [...column].reverse()))
}

function canMoveLeft() {
    return canMove(grid.cellsByRow)
}

function canMoveRight() {
    return canMove(grid.cellsByRow.map(row => [...row].reverse()))
}

function canMove(cells) {
    return cells.some(group => {
        return group.some((cell, index) => {
            if (index === 0) return false;
            if (cell.tile == null) return false
            const moveToCell = group[index - 1]
            return moveToCell.canAccept(cell.tile)
        })
    })
}

function handleLoss() {
    msgElem.classList.remove("hide");
    msgElem.innerHTML =
        `<div id="msg-container">
        <div id="score">Final Score: ${getScore()}</div>
        <div id="msg">No more possible moves </div>
        <div id="refresh" onClick="window.location.reload();">Play Again</div>
    </div>`;
}

function getScore() {
    let str = grid.cellsScore().toString();;
    let cur_str = str.padStart(4, '0');
    scoreElem.innerHTML = cur_str;
    return str;
}