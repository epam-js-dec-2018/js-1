function countDown(n) {
    let i = n;
    let timerId = setInterval(function() {
        console.info(i);
        if (i === 0) {
            clearInterval(timerId);
        }
        i--;
    }, 1000);
}

countDown(5);