// 9 9 乘法
var temp = `\n`;
for(let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        temp += `<span style="padding: 0 5px">${i * j}</span>`;
        if (j == 9) {
            temp += '<br>';
        }
    }
    temp += `\n`;
}
document.write(temp);


// bmi
function calcBmi (weight, height) {
    let w = parseInt(weight);
    let h = parseInt(height)/100;
    let bmi = ((w/(h*h))).toFixed(2);
    return bmi
}

const bmi = calcBmi(80, 180);
console.log(bmi);