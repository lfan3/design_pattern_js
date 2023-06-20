/**
 * TrafficLight
 *    currentState
 *    count
 *    change: limite condition + change state + triger the new state
 *    start
 * State
 *    handle: do something and change to the next state
 */
function TrafficLight(){
  // without this
  let count = 0;
  let currentState = new Red(this);
  
  this.change = (state)=>{
    // not this.count
    if(++count >= 5) return;
    currentState = state;
    currentState.handle();
  }
  this.start = ()=>{
    currentState.handle();
  }
}

function Red(light){
  // with this
  this.light = light;
  this.handle = ()=>{
    console.log('Red light, wait');
    this.light.change(new Green(light))
  }
}

function Yellow(light){
  this.light = light;
  this.handle = ()=>{
    console.log('Yellow light, patience');
    this.light.change(new Red(light))
  }
}

function Green(light){
  this.light = light;
  this.handle = ()=>{
    console.log('Green light, hurry up');
    this.light.change(new Yellow(light))
  }
}

function run(){
  const tl = new TrafficLight();
  tl.start();
}

run();

