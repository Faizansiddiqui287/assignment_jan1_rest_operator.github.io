let result = document.getElementById('result')

function minNumber(...min) {
    let i = min;
    let j = min.length;
    minimum = i[j - 1];
    while (j--){
        if(i[j] < minimum){
            minimum= i[j];
        }
    }
            return minimum;
}

result.innerText = minNumber(15,13,17,11,19)