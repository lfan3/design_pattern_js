interface EventEmit{
  subscribe(fn:()=>void):void;
  publish(news:string):void;
}

interface EventEmit2{
  subscribe(key:string,fn:()=>void):void;
  publish(key:string,news:string):void;
}

interface Publisher{
  publish():void;
  update(news:string):void;
}

interface Subscriber{
  (news:string):void
}

interface SubscriberMap{
  [key:string]: Subscriber[];
}

// 中间eventsbus
class EventBus implements EventEmit{
  private subscribers:Subscriber[] =[];
  subscribe(subscriber:Subscriber): void {
    // 可以考虑 subscriber是否重复的问题。
    this.subscribers.push(subscriber);
  }
  publish(news:string): void {
    this.subscribers.forEach(sub=>sub(news))
  }
}

class EventEmitImproved implements EventEmit2{
  private subscribers:SubscriberMap ={};
  subscribe(event:string, subscriber:Subscriber): void {
    // 可以考虑 subscriber是否重复的问题。
    if(this.subscribers[event]){
      this.subscribers[event].push(subscriber);
    }else{
      this.subscribers[event] = [subscriber];
    }
  }
  publish(event:string,news:string): void {
    this.subscribers[event].forEach(sub=>sub(news))
  }
}

class Publisher1 implements Publisher{
  private eventEmit:EventEmit;
  private news = 'news 1';
  constructor(eventEmit:EventEmit){
    this.eventEmit = eventEmit;
  }
  publish(): void {
    this.eventEmit.publish(this.news);
  }
  update(news:string):void {
    this.news = news;
  }
}

class PublisherImproved implements Publisher{
  private eventEmit:EventEmit;
  private news = 'news 1';
  constructor(eventEmit:EventEmit){
    this.eventEmit = eventEmit;
  }
  publish(): void {
    this.eventEmit.publish(this.news);
  }
  update(news:string):void {
    this.news = news;
  }
}

// 订阅者
const subscriber1 = (news:string)=>{
  console.log('subscriber1 ',news);
}

const subscriber2 = (news:string)=>{
  console.log('subscriber2 ',news);
}

// 中间events
const eventsBus = new EventBus();
eventsBus.subscribe(subscriber1);
eventsBus.subscribe(subscriber2);

// 发布者。发布者 不知道订阅者的存在 只认识中间者
const publisher = new Publisher1(eventsBus);
publisher.publish();
publisher.update('news 2');
publisher.publish();



/**
 * 定义：
 * In software architecture, publish–subscribe is a messaging pattern where senders of messages, called publishers, 
 * do not program the messages to be sent directly to specific receivers, called subscribers, 
 * but instead categorize published messages into classes without knowledge of which subscribers, 
 * if any, there may be. 
 * Similarly, subscribers express interest in one or more classes and only receive messages that are of interest, 
 * without knowledge of which publishers, if any, there are.
 * 好处：
 * The weather station is independent, it does not need to know subscribers.
 * Subscribers are separate. Even if one of them fails, it will not affect the others
 * If there is a new subscriber, it can directly subscribe EventEmit. We don’t need to modify the existing function. We just need to add a new line code
 */