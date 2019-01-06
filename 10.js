Function.prototype.myBind = function (property) {
    var func = this;
    return function(){
       return func.apply(property,arguments);
   };
};

function addPropToNumber(number) {
    return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1);// 10