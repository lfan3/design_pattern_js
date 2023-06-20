class Singleton{
  private static instance;
  private state;
  // constructor need to be private
  private constructor(){
    this.state = Math.random() * 100;
  }
  public static getInstance(): Singleton {
    if(!Singleton.instance){
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  public someBusinessLogic(){
    return this.state;
  }
   
}

/**
 * The client code.
 */
 function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
  } else {
      console.log('Singleton failed, variables contain different instances.');
  }
  const r1 = s1.someBusinessLogic();
  const r2 = s2.someBusinessLogic();
  console.log('r1,r2', r1, r2);
}

clientCode();