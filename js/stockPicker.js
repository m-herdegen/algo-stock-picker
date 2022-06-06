exports.picker = function(prices) {
    let differenceTracker = []
    let ans = []

    for(i = 0; i < prices.length; i++){
        for(j = 0; j < prices.length; j++){
            if (i < j){
                differenceTracker.push([parseInt(prices[i])-parseInt(prices[j]), i, j])
            }
            
        }
        
    }

    temp = differenceTracker[0][0]
    for(item of differenceTracker){
        if (item[0] < temp){
            temp = item[0]
            ans = [item[1], item[2]]
        }

    }
    return ans
}
