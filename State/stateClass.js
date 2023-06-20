/**
 * TrafficLight
 *    currentState
 *    count
 *    change: limite condition + change state + triger the new state
 *    start
 * State
 *    handle: do something and change to the next state
 */

class TrafficLight{
  constructor(){
    this.count = 0;
    this.currentState = new RedState(this)
  }
  change = (state)=>{
    if(++this.count >= 5) return;
    this.currentState = state;
    this.currentState.handle();
  }
  start = ()=>{
    this.currentState.handle();
  }
}

class RedState{
  constructor(light){
    this.light = light;
  }
  handle = ()=>{
    console.log('Red Light');
    this.light.change(new YellowState(this.light))
  }
}

class YellowState{
  constructor(light){
    this.light = light;
  }
  handle = ()=>{
    console.log('Yellow Light');
    this.light.change(new RedState(this.light))
  }
}

function run(){
  const tl = new TrafficLight();
  tl.start();
}

run();