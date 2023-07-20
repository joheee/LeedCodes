function combinationSum(candidates: number[], target: number): number[][] {

    let res : number[][] = []

    function dfs(i:number,curr:number[], total:number) : void {
        if(total === target) {
            res.push([...curr])
            return
        }
        if(i >= candidates.length || total > target) return

        curr.push(candidates[i])
        dfs(i, curr, total + candidates[i])
        curr.pop()
        dfs(i + 1, curr, total)
    }

    dfs(0,[],0)

    return res
};

export function CombinatorialSum(){
    console.log(combinationSum([2,3,6,7], 7))
}