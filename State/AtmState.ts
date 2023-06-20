interface AtmState{
  insertCard():void;
  ejectCard():void;
  insertPin(pin:Number):void;
  requestCash(somme:Number):void;
}

class AtemMachine{
  hasCard: AtmState;
  noCard: AtmState;
  hasCorrectPin: AtmState;
  noMoney: AtmState;
  
  state: AtmState;
  private cashInMachine = 2000;
  correctPinNumber: Boolean = false;
  
  constructor(){
    this.hasCard= new HasCard()
    this.noCard= new NoCard()
    this.hasCorrectPin= new HasCorrectPin();
    this.noMoney= new NoMoney();
    
    this.state = this.noCard;
  }
  
  protected setAtmState(atmState:AtmState){
    this.state = atmState;
  }
  
  public setCashInMachine(cash:number){
    this.cashInMachine = cash;
  }
  
  public insertCard(){
    this.state.insertCard();
  }
  
  public ejectCard(){
    this.state.ejectCard()
  }
  
  public insertPin(pin:Number){
    this.state.insertPin(pin);
  }
  
  public requestCash(money:Number){
    this.state.requestCash(money);
  }
}

class HasCard{
  insertCard(){
  }
  
  ejectCard(){
  }
  
  insertPin(pin:Number){
  }
  
  requestCash(money:Number){
  }
}

class NoCard{
  insertCard(){
  }
  
  ejectCard(){
  }
  
  insertPin(pin:Number){
  }
  
  requestCash(money:Number){
  }
}

class HasCorrectPin{
  insertCard(){
  }
  
  ejectCard(){
  }
  
  insertPin(pin:Number){
  }
  
  requestCash(money:Number){
  }
}

class NoMoney{
  insertCard(){
  }
  
  ejectCard(){
  }
  
  insertPin(pin:Number){
  }
  
  requestCash(money:Number){
  }
}