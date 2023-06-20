class Context{
  private state:State;
  constructor(state: State){
    this.transitionTo(state);
  }
  
  transitionTo = (state: State)=>{
    //if no (<any>State), there is an error: TS2339: Property 'name' does not exist on type 'Function'. 
    console.log('Context transitionTo ' + (<any>state).constructor.name);
    this.state = state;
    this.state.setContext(this);
  }
  
  public request1():void{
    this.state.handle1();
  }
  
  public request2():void{
    this.state.handle2();
  }
}

abstract class State{
  protected context: Context;
  
  public setContext(context:Context){
    this.context = context;
  }
  
  public abstract handle1():void;
  public abstract handle2():void;
}

class ConcreteStateA extends State{
  public handle1(): void {
    console.log('ConcreteStateA handle1');
    this.context.transitionTo(new ConcreteStateB());
  }
  
  public handle2(): void {
    console.log('ConcreteStateA handle2');
  }
}

class ConcreteStateB extends State{
  public handle1(): void {
    console.log('ConcreteStateB handle1');
    this.context.transitionTo(new ConcreteStateA());
  }
  public handle2(): void {
    console.log('ConcreteStateB handle2');
  }
}

const concreteStateA = new ConcreteStateA();
const context = new Context(concreteStateA);
context.request1();
context.request2();
