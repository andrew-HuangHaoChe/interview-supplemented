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
function judgebmi(gender, bmi) {
    if (gender == 'boy') {
        if (bmi < 18.5) {
            console.log('體重過輕');
        } else if (bmi >= 18.5 && bmi < 24) {
            console.log('體重正常');
        } else if (bmi >= 24 && bmi < 27) {
            console.log('過重');
        } else if (bmi >= 27 && bmi < 30) {
            console.log('輕度肥胖');
        } else if (bmi >= 30 && bmi < 35) {
            console.log('中度肥胖');
        } else if (bmi >= 35) {
            console.log('重度肥胖');
        }

        if (bmi >= 24) {
            console.log('腰圍 >= 90cm !');
        }
    } else if (gender == 'girl') {
        if (bmi < 18.5) {
            console.log('體重過輕');
        } else if (bmi >= 18.5 && bmi < 24) {
            console.log('體重正常');
        } else if (bmi >= 24 && bmi < 27) {
            console.log('過重');
        } else if (bmi >= 27 && bmi < 30) {
            console.log('輕度肥胖');
        } else if (bmi >= 30 && bmi < 35) {
            console.log('中度肥胖');
        } else if (bmi >= 35) {
            console.log('重度肥胖');
        }

        if (bmi >= 24) {
            console.log('腰圍 >= 80cm !');
        }
    }
}

function calcbmi(gender, weight, height) {
    let w = parseInt(weight);
    let h = parseInt(height) / 100;
    let bmi = ((w / (h * h))).toFixed(2);
    judgebmi(gender, bmi);
}

calcbmi('boy', 80, 182);
