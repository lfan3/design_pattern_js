var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Context = /** @class */ (function () {
    function Context(state) {
        var _this = this;
        this.transitionTo = function (state) {
            console.log('Context transitionTo ' + state.constructor.name);
            _this.state = state;
            _this.state.setContext(_this);
        };
        this.transitionTo(state);
    }
    Context.prototype.request1 = function () {
        this.state.handle1();
    };
    Context.prototype.request2 = function () {
        this.state.handle2();
    };
    return Context;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
var ConcreteStateA = /** @class */ (function (_super) {
    __extends(ConcreteStateA, _super);
    function ConcreteStateA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteStateA.prototype.handle1 = function () {
        console.log('ConcreteStateA handle1');
        this.context.transitionTo(new ConcreteStateB());
    };
    ConcreteStateA.prototype.handle2 = function () {
        console.log('ConcreteStateA handle2');
    };
    return ConcreteStateA;
}(State));
var ConcreteStateB = /** @class */ (function (_super) {
    __extends(ConcreteStateB, _super);
    function ConcreteStateB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteStateB.prototype.handle1 = function () {
        console.log('ConcreteStateB handle1');
        this.context.transitionTo(new ConcreteStateA());
    };
    ConcreteStateB.prototype.handle2 = function () {
        console.log('ConcreteStateB handle2');
    };
    return ConcreteStateB;
}(State));
var concreteStateA = new ConcreteStateA();
var context = new Context(concreteStateA);
context.request1();
context.request2();
