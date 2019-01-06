// Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this
// предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед
// переданными в привязанную функцию аргументами при её вызове.


Function.prototype.myBind = function () {
    let func = this;
    let context = arguments[0];
    let args = Array.prototype.slice.call(arguments, 1);
    return function() {
        return func.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    };
};

//tests
function test() {
    console.info("10. Test of function myBind");

    function addPropToNumber(number) { return this.prop + number; }
    var bound = addPropToNumber.myBind({ prop: 9 });

    if (bound(1) === 10) {
        console.info("success");
    } else {
        console.info("error")
    }
}

test();