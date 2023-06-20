// stragty:context :shipping
// strategy: shipping companies

class Shipping{
  // company;
  constructor(){
    this.company = null;
  }
  setStrategy(company){
    this.company = company;
  }
  calculate(pac){
    return this.company.calculate(pac)
  }
}

class UPS{
  calculate(pac){
    return 5;
  }
}

class USPS{
  calculate(pac){
    return 6;
  }
}

class Fedex{
  calculate(pac){
    return 16;
  }
}


var pac = { from: "76712", to: "10012", weigth: "lkg" };
const shipping = new Shipping();
const ups = new UPS();
const fedex = new Fedex();
const usps = new USPS();

shipping.setStrategy(ups);
console.log('ups ', shipping.calculate(pac))
shipping.setStrategy(fedex);
console.log('fedex ', shipping.calculate(pac))
shipping.setStrategy(usps);
console.log('usps ', shipping.calculate(pac))
