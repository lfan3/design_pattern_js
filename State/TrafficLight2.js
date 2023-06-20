class TrafficLight{
  constructor(state){
    this.changeState(state);
  }
  changeState(state){
    this.currentState = state;
    //important point: how to set the context to the state -- 1
    this.currentState.setContext(this);
  }
  showInfo(){
    this.currentState.showInfo();
  }
}

class RedLight{
  constructor(){
    this.context = null;
  }
  //important point: how to set the context to the state -- 1
  setContext(context){
    this.context = context;
  }
  showInfo(){
    console.log('I am RedLight');
    this.context.changeState(new GreenLight())
  }
}

class GreenLight{
  constructor(){
    this.context = null;
  }
  //important point: how to set the context to the state -- 1
  setContext(context){
    this.context = context;
  }
  showInfo(){
    console.log('I am GreenLight');
    this.context.changeState(new RedLight())
  } 
}

const red = new RedLight;
const context = new TrafficLight(red);
context.showInfo();
context.showInfo();