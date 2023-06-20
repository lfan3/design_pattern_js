interface Command{
  execute():void;
}

// receiver --real bussiness logic
class Light{
  public swichedOn:boolean = false;
  public swichLight():void{
    this.swichedOn = !this.swichedOn
  }
}

class SwichLightCommand implements Command{
  private light:Light;
  constructor(light:Light){
    this.light = light;
  }
  execute(): void {
    this.light.swichLight();
  }
}

// sender
class Room{
  public command!: Command;
  
  setCommand(command:Command):void{
    this.command = command;
  }
  executeCommand():void{
    this.command.execute();
  }
}

class LivingRoom extends Room{
}

function main(){
  // sender
  const livingRoom = new LivingRoom();
  // receiver:contains bussiness logic
  const livingRoomLight = new Light();
  // command
  const swichLightCommand = new SwichLightCommand(livingRoomLight);
  
  livingRoom.setCommand(swichLightCommand);
  livingRoom.executeCommand();
  console.log(livingRoomLight.swichedOn);
  livingRoom.executeCommand();
  console.log(livingRoomLight.swichedOn);
}

main()