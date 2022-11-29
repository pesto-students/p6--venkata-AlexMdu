let prices = [7,1,5,3,6,4] ;
let buy = prices[0], max_profit = 0;
for (let i = 1; i < prices.length; i++) {

    // Checking for lower buy value
    if (buy > prices[i])
        buy = prices[i];

    // Checking for higher profit
    else if (prices[i] - buy > max_profit)
        max_profit = prices[i] - buy;
}
console.log(max_profit); // 5