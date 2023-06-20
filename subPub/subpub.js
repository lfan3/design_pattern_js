var EventEmit = /** @class */ (function () {
    function EventEmit() {
        this.subscribers = [];
    }
    EventEmit.prototype.subscribe = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    EventEmit.prototype.publish = function (news) {
        this.subscribers.forEach(function (sub) { return sub(news); });
    };
    return EventEmit;
}());
var Publisher = /** @class */ (function () {
    function Publisher(eventEmit) {
        this.news = 'news 1';
        this.eventEmit = eventEmit;
    }
    Publisher.prototype.publish = function () {
        this.eventEmit.publish(this.news);
    };
    Publisher.prototype.update = function (news) {
        this.news = news;
    };
    return Publisher;
}());
// 订阅者
var subscriber1 = function (news) {
    console.log('subscriber1 ', news);
};
var subscriber2 = function (news) {
    console.log('subscriber2 ', news);
};
// 中间events
var eventsBus = new EventEmit();
eventsBus.subscribe(subscriber1);
eventsBus.subscribe(subscriber2);
// 发布者。发布者 不知道订阅者的存在
var publisher = new Publisher(eventsBus);
publisher.publish();
publisher.update('news 2');
publisher.publish();
