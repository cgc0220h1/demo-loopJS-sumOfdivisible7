function sumOfdivide7() {
    let count = 0;
    let sum = 0;
    for (let index = 1; count < 31 ; index++) {
        if (index % 7 === 0) {
            sum += index;
            count++;
        }
        index++;
    }
    document.getElementById('result').innerHTML = sum;
}
