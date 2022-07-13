const board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

const board2 = [
    ["8", "6", ".", ".", "2", ".", ".", ".", "."],
    [".", ".", ".", "7", ".", ".", ".", "5", "9"],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "6", ".", "8", ".", "."],
    [".", "4", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "5", "3", ".", ".", ".", ".", "7"],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", ".", ".", "6", ".", "."],
    [".", ".", "7", "5", ".", "9", ".", ".", "."]];

const board3 = [
    ["1", ".", ".", ".", ".", ".", ".", ".", "4"],
    [".", "2", ".", ".", ".", ".", ".", "5", "."],
    [".", ".", "3", ".", ".", ".", "6", ".", "."],
    [".", ".", ".", "4", ".", "1", ".", ".", "."],
    [".", ".", ".", ".", "5", ".", ".", ".", "."],
    [".", ".", ".", "2", ".", "6", ".", ".", "."],
    [".", ".", "8", ".", ".", ".", "7", ".", "."],
    [".", "1", ".", ".", ".", ".", ".", "8", "."],
    ["3", ".", ".", ".", ".", ".", ".", ".", "9"]];

const board4 = [
    ["1", ".", "3", ".", "5", ".", "7", ".", "9"],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["7", ".", ".", "1", ".", "3", ".", "5", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["3", ".", ".", "8", ".", ".", ".", "1", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "7", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "7", ".", "5", ".", "1", ".", "4", "."]];

const board5 = [
    ["8", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "3", "6", ".", ".", ".", ".", "."],
    [".", "7", ".", ".", "9", ".", "2", ".", "."],
    [".", "5", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", ".", "4", "5", "7", ".", "."],
    [".", ".", ".", "1", ".", ".", ".", "3", "."],
    [".", ".", "1", ".", ".", ".", ".", "6", "8"],
    [".", ".", "8", "5", ".", ".", ".", "1", "."],
    [".", "9", ".", ".", ".", ".", "4", ".", "."]];

const presetBoards = [board1, board2, board3, board4, board5]

export function getBoards() {
    return presetBoards;
}