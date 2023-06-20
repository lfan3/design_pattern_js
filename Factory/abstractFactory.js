// mountainBike roadBike
function MountainBike(){
  this.production = "mountainBike";
  this.sell = () => console.log("5000");
}

function roadBike(){
  this.production = "roadBike";
  this.sell = () => console.log("7000");
}

function MFactory(){
  this.produce = new MountainBike();
}

function RFactory(){
  this.produce = new roadBike();
}