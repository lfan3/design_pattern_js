interface Subject{
  attach(observer:Observer):void;
  detach(observer:Observer):void;
  notify():void;
}

interface Observer{
  update(subject:Subject):void;
}

class ConcreteSubject implements Subject{
  state = 0;
  private obeservers: Observer[] = [];
  
  /**
   * attach
    * observer:Observer   */
  public attach(observer:Observer):void {
    const isExisted = this.obeservers.indexOf(observer);
    if(isExisted !== -1) {
      console.log('the observer is already subscribed');
    }else{
      this.obeservers.push(observer);
    }
  }
  
  public detach(observer: Observer): void {
    const isExisted = this.obeservers.indexOf(observer);
    if(isExisted !== -1) {
      this.obeservers.splice(this.obeservers.indexOf(observer), 1);
    }else{
      console.log('this observer did not been subscribed')
    }
  }
  
  public notify():void {
    this.obeservers.forEach(ob => ob.update(this));
  }
  
  public bussinessLogic(){
    this.state = Math.floor(Math.random() * 11);
    console.log('subject has updated the state to '+this.state);
    this.notify();
  }
}

class concreteObserverA implements Observer{
  update(subject: Subject):void{
    if(subject instanceof ConcreteSubject && subject.state < 7)
    console.log(`concreteObserverA reacted to state change, the state value is ${subject.state}`)
  }
}

class concreteObserverB implements Observer{
  update(subject: Subject):void{
    if(subject instanceof ConcreteSubject && subject.state > 4)
    console.log(`concreteObserverB reacted to state change, the state value is ${subject.state}`)
  }
}

const sub = new ConcreteSubject();
const ob1 = new concreteObserverA();
const ob2 = new concreteObserverB();

sub.attach(ob1);
sub.attach(ob2);
sub.detach(ob2);
sub.bussinessLogic();

