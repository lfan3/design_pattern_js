var Singleton = /** @class */ (function () {
    // constructor need to be private
    function Singleton() {
        this.state = Math.random() * 100;
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someBusinessLogic = function () {
        return this.state;
    };
    return Singleton;
}());
/**
 * The client code.
 */
function clientCode() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
    var r1 = s1.someBusinessLogic();
    var r2 = s2.someBusinessLogic();
    console.log('r1,r2', r1, r2);
}
clientCode();
