const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const i = 0;
    
const totalBatteries = batteryBatches.reduce((pvalue, cvalue) => pvalue + cvalue, i);

console.log(totalBatteries);