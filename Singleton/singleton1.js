var Singleton = (function(){
  this.instance;
  this.creat = function(){
    this.instance = new Object({abc:'a'});
  }
  return {
    getInstance: (name)=>{
      if(!this.instance){
        this.creat();
      }
      return this.instance;
    }
  }
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b);
