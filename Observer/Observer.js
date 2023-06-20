var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.state = 0;
        this.obeservers = [];
    }
    /**
     * attach
      * observer:Observer   */
    ConcreteSubject.prototype.attach = function (observer) {
        var isExisted = this.obeservers.indexOf(observer);
        if (isExisted !== -1) {
            console.log('the observer is already subscribed');
        }
        else {
            this.obeservers.push(observer);
        }
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var isExisted = this.obeservers.indexOf(observer);
        if (isExisted !== -1) {
            this.obeservers.splice(this.obeservers.indexOf(observer), 1);
        }
        else {
            console.log('this observer did not been subscribed');
        }
    };
    ConcreteSubject.prototype.notify = function () {
        var _this = this;
        this.obeservers.forEach(function (ob) { return ob.update(_this); });
    };
    ConcreteSubject.prototype.bussinessLogic = function () {
        this.state = Math.floor(Math.random() * 11);
        console.log('subject has updated the state to ' + this.state);
        this.notify();
    };
    return ConcreteSubject;
}());
var concreteObserverA = /** @class */ (function () {
    function concreteObserverA() {
    }
    concreteObserverA.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject && subject.state < 7)
            console.log("concreteObserverA reacted to state change, the state value is ".concat(subject.state));
    };
    return concreteObserverA;
}());
var concreteObserverB = /** @class */ (function () {
    function concreteObserverB() {
    }
    concreteObserverB.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject && subject.state > 4)
            console.log("concreteObserverB reacted to state change, the state value is ".concat(subject.state));
    };
    return concreteObserverB;
}());
var sub = new ConcreteSubject();
var ob1 = new concreteObserverA();
var ob2 = new concreteObserverB();
sub.attach(ob1);
sub.attach(ob2);
sub.detach(ob2);
sub.bussinessLogic();
