interface FindIndexInterface {
    i:number,
    j:number
}
function FindIndex(board:string[][],target:string) : FindIndexInterface {
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j] === target) return {
                i:i,
                j:j
            }
        }
    }
    return {
        i:-99,
        j:-99
    }
}

function exist(board: string[][], word: string): boolean {
    let wordQueue = word.split('')
    let root = FindIndex(board, wordQueue[0])

    if(root.i === -99 || root.j === -99) return false
    
    

    return true
};

export function WordSearch(){
    let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
    let word = "ABCCED"
    console.log(exist(board, word))   
}
