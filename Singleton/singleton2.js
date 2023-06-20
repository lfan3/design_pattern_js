var Estore = /** @class */ (function () {
    function Estore(num) {
        this.state = num;
    }
    Estore.prototype.getState = function () {
        return this.state;
    };
    return Estore;
}());
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.prototype.getStore = function () {
        if (!Store.store) {
            console.log('init');
            Store.store = new Estore(Math.random() * 100);
        }
        return Store.store;
    };
    return Store;
}());
var c = new Store();
var d = new Store();
var e = new Store();
console.log(c.getStore().getState());
console.log(d.getStore().getState());
console.log(e.getStore().getState());
