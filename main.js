// function 1
function sum() {
    console.log(2 + 3);
}
sum();
// 2
function Addition() {
    return 1 + 2;
}
console.log();
// 3
function sub() {
    return 1 + 5;
}
console.log(sub());
// 4
function product() {
    return 5 * 4;
}
var _result = product();
// 5 
function divide(num1, num2) {
    return num1 % num2;
}
var result = divide(2, 2);
{
    console.log(result);
}
// 6 
function addition(num1, num2) {
    return num1 + num2;
}
var result_ = addition(5, 4);
// 7 anony
var multi = function (num1, num2) {
    return 5 * 6;
};
multi(5, 6);
var multi_ = function (num1, num2) {
    return 5 * 6;
};
var $result = multi_(5, 6);
console.log($result);
// 9 lamda/arrow (if we put {} we have to give return statment ,
// so in this if i won't put {} we don't need to put return statment  )  
//   "{}return" both sides are equal "=>"
var $sum = function (num1, num2) { return num1 + num2; };
var reSult = $sum(3, 6);
console.log(reSult);
//    optional parameter    (optional parameter ko () kay end may rakh na ah )
var fullName = function (firstname, lastname) { return firstname + lastname; };
var full = fullName('Rosei');
console.log(full);
// if / else
var stagename = function (firstname, lastname) {
    if (lastname === undefined) {
        return firstname;
    }
    else {
        return firstname + '' + lastname;
    }
};
var fulln = stagename('Rosei');
console.log(fulln);
// defalt (because of this console we only gets first console but (let fulln_) in result it give us undefined 
// so, i order to get result we have to give return statment. )
var stagename_ = function (firstname, lastname) {
    if (lastname === void 0) { lastname = "haree"; }
    // console.log(firstname, lastname) 
    return firstname + '' + lastname;
};
var fulln_ = stagename_("lucy ", "lily");
console.log(fulln_);
//    rest     (we can add unlimited parameter add kar saktay han console)
console.log("hello world", 2, true, {}, []);
var makeMessgae = function (name) {
    var messgae = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messgae[_i - 1] = arguments[_i];
    }
    console.log(messgae.join(" "));
};
makeMessgae("haree", "hello", "let's ", "meet");
function add(arg1, arg2) {
    return arg1 + arg2;
}
var addi = add(7, 4);
console.log(addi);
// tuples
var fruits = ["orange", "mango", 2];
fruits.pop();
console.log(fruits);
