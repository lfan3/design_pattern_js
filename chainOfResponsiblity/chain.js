
/**
 * description
 * chain obj: chain of handler
 * handler: nextHandler, operation
 * here we make a calculte chain for handling add substract divide multiply
 * request -> handler -> handler -> handler -> response
 */
// try to use accessory attribute-- setter and getter
// getter setter in the class ?????
function request(n1, n2, op){
  return {n1, n2, op};
}

class AddHandler{
  nextHandler = null;
  
  setNextHandler = (handler)=>{
    this.nextHandler = handler;
  }
  
  calculate = (request)=>{
    
    if(request.op === '+'){
      return request.n1 + request.n2;
    }else{
      return this.nextHandler.calculate(request);
    }
  }
}

class SubHandler{
  nextHandler = null;
  
  setNextHandler = (handler)=>{
    this.nextHandler = handler;
  }
  
  calculate = (request)=>{
    if(request.op === '-'){
      return request.n1 - request.n2;
    }else{
      return this.nextHandler.calculate(request);
    }
  }
}

class DivHandler{
  nextHandler = null;
  
  setNextHandler = (handler)=>{
    this.nextHandler = handler;
  }
  
  calculate = (request)=>{
    if(request.op === '/'){
      return request.n1 / request.n2;
    }else{
      return this.nextHandler.calculate(request);
    }
  }
}

class MulHandler{
  nextHandler = null;
  
  setNextHandler = (handler)=>{
    return this.nextHandler = handler;
  }
  
  calculate = (request)=>{
    if(request.op === '*'){
      return request.n1 * request.n2;
    }else{
      return "Fail to handle the request, check the request.";
    }
  }
}


function run(){
  const r = request(6,3, '*');
  const addHandler = new AddHandler();
  const subHandler = new SubHandler();
  const divHandler = new DivHandler();
  const mulHandler = new MulHandler();
  addHandler.setNextHandler(subHandler);
  subHandler.setNextHandler(divHandler);
  divHandler.setNextHandler(mulHandler);
  
  const response = addHandler.calculate(r);
  console.log(response);
}

run();

