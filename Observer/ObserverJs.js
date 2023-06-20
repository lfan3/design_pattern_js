function Subject(){
  this.state = 0;
  this.subscribers = [];
  this.subscribe = (observer)=>{
    const isExisted = this.subscribers.indexOf(observer);
    if(isExisted === -1){
      this.subscribers.push(observer);
    }else{
      console.log('observer has already been subscribed')
    }
  }
  const desubscribe = (observer)=>{
    const index = this.subscribers.indexOf(observer);
    if(index !== -1){
      this.subscribers.splice(index, 1);
    }else{
      console.log('observer has not been subscribed')
    }
  }
  const notify = ()=>{
    for(let i=0; i<this.subscribers.length; i++){
      this.subscribers[i].update(this.state);
    }
  }
  const bussinessLogic = ()=>{
    this.state = Math.random() * 10;
    for(let sub of this.subscribers){
      notify()
    }
  }
}

Subject.prototype = {
  subscribePP: (observer)=>{
    const isExisted = this.subscribers.indexOf(observer);
    if(isExisted === -1){
      this.subscribers.push(observer);
    }else{
      console.log('observer has already been subscribed')
    }
  },
  subscribeP: function(observer){
    const isExisted = this.subscribers.indexOf(observer);
    if(isExisted === -1){
      this.subscribers.push(observer);
      console.log('observer has been subscribed')
    }else{
      console.log('observer has already been subscribed')
    }
  }
}

const ObserverA = ()=>{
  const update = (state)=>{
    if(state > 4){
     console.log(`ObserverA is reactive to `+ state);
    }
  }
}

const ObserverB = ()=>{
  const update = (state)=>{
    if(state < 6){
     console.log(`ObserverB is reactive to `+ state);
    }
  }
}

const SubFn = ()=>{
  this.handler = [];
}

function SubFFn(){
  this.handler = [];
}
const sub = new Subject();
sub.subscribe(ObserverA);
console.log(Subject.prototype);
// sub.subscribe(ObserverB);
// sub.bussinessLogic();

// const sub = new SubFn();
// const sub = new SubFFn();

/**
 * 总结
 * subject : -observers[], +subscribe, +unsubscribe, +notify
 * observer: +update
 * 
 */