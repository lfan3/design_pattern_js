class Participant{
  constructor(name){
    this.name = name;
  }
  // set Mediator in each concrete participant
  setChatRoom(chatRoom){
    this.chatRoom = chatRoom
  }
  send(message, to){
    this.chatRoom.send(message, this, to)
  }
  receive(message, from){
    console.log(`${from.name} to ${this.name} : ${message}`)
  }
}
// mediator
class ChatRoom{
  constructor(){
    this.participants = {};
  }
  register(participant){
    this.participants[participant.name] = participant;
    this.participants[participant.name].setChatRoom(this);
  }
  send(message, from, to){
    if(to){
      // to particular person
      this.participants[to.name].receive(message, from);
    }else{
      // broadcast
      for(let [name, participant] of Object.entries(this.participants)){
        participant.receive(message, from);
      }
    }
  }
}

function run(){
  var yoko = new Participant("Yoko");
  var john = new Participant("John");
  var paul = new Participant("Paul");
  var ringo = new Participant("Ringo");
  
  var chatroom = new ChatRoom();
  chatroom.register(yoko);
  chatroom.register(john);
  chatroom.register(paul);
  chatroom.register(ringo);
  
  console.group("yoko to all")
  yoko.send("All you need is love.");
  yoko.send("I love you John.");
  console.groupEnd("yoko to all")
  
  console.group("john answer")
  john.send("Hey, no need to broadcast", yoko);
  console.groupEnd("john answer")
  
  console.group("paul ringo")
  paul.send("Ha, I heard that!");
  ringo.send("Paul, what do you think?", paul);
  console.groupEnd("paul ringo")
}

run();