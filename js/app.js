function sumOfdivide7() {
    let count = 0;
    let sum = 0;
    let index = 1;
    for (index; count < 31 ;) {
        if (index % 7 === 0) {
            sum += index;
            count++;
            index++;
        }
        index++;
    }
    document.getElementById('result').innerHTML = sum;
}
