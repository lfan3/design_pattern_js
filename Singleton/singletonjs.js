class Setting{
  constructor(num){
    this.setting = num
  };
}

// key: use iife to the Singleton + getInstance
let Singleton = (function(){
  let instance;
  
  function create(){
    const privateNum = Math.random() * 100;
    return new Setting(privateNum);
  }
  return{
    getInstance: function(){
      if(!instance){
        instance = create();
      }
      return instance;
    }
  }
})();

let k = Singleton.getInstance();
let m = Singleton.getInstance();
console.log(k, m);
