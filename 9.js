function countDown(number) {
    function count() {
        if (number >= 0){
            console.log(number);
            number--;
        }
    }
    setInterval(count,1000);
}
countDown(10);
