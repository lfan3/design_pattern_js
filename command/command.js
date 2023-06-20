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
// receiver --real bussiness logic
var Light = /** @class */ (function () {
    function Light() {
        this.swichedOn = false;
    }
    Light.prototype.swichLight = function () {
        this.swichedOn = !this.swichedOn;
    };
    return Light;
}());
var SwichLightCommand = /** @class */ (function () {
    function SwichLightCommand(light) {
        this.light = light;
    }
    SwichLightCommand.prototype.execute = function () {
        this.light.swichLight();
    };
    return SwichLightCommand;
}());
var Room = /** @class */ (function () {
    function Room() {
    }
    Room.prototype.setCommand = function (command) {
        this.command = command;
    };
    Room.prototype.executeCommand = function () {
        this.command.execute();
    };
    return Room;
}());
var LivingRoom = /** @class */ (function (_super) {
    __extends(LivingRoom, _super);
    function LivingRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LivingRoom;
}(Room));
function main() {
    var livingRoom = new LivingRoom();
    var livingRoomLight = new Light();
    livingRoom.setCommand(new SwichLightCommand(livingRoomLight));
    livingRoom.executeCommand();
    console.log(livingRoomLight.swichedOn);
    livingRoom.executeCommand();
    console.log(livingRoomLight.swichedOn);
}
main();
