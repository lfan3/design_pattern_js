class Singleton{
    instance = null;
    createInstance = () => {
        this.instance = new Object();
    }
    getInstance = () => {
        if(!this.instance)
            this.createInstance();
        return this.instance;
    }    
}

// we can use a static method to realise a singleton
class Singleton2{
  constructor(property){
    this.property = property
  }
  static getInstance(property){
    if(!this.instance){
      this.instance = new Singleton2(property);
    }
    return this.instance;
  }
  doSomething(){
    console.log('print property: ', this.property);
  }
}

// const a = new Object();
// const b = new Object();

// const single = new Singleton();
// const instance1 = single.getInstance();
// const instance2 = single.getInstance();
// console.log(a === b);
// console.log(instance1 === instance2);

const single2 = Singleton2.getInstance("hello");
single2.doSomething();
