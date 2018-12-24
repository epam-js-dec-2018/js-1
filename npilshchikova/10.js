Function.prototype.myBind = function (context) {
    var funcContext = this;
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
      var finalArgs = Array.prototype.concat(args, Array.prototype.slice.call(arguments));
      return funcContext.apply(context, finalArgs);
    };
}