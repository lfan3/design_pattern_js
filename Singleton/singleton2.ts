
class Estore{
  private state;
  constructor(num:number){
    this.state = num
  }
  public getState(){
    return this.state;
  }
}

class Store{
  private static store:Estore;
  
  public getStore():Estore{
    if(!Store.store){
      console.log('init')
      Store.store = new Estore(Math.random()*100);
    }
    return Store.store;
  }
}

const c = new Store();
const d = new Store();
const e = new Store();
console.log(c.getStore().getState())
console.log(d.getStore().getState())
console.log(e.getStore().getState())


