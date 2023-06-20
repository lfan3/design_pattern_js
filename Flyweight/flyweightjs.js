class FlyweightFactory{
  static bookTypeMap = new Map();
  static getBookType(type, distributor, otherData){
    if(!this.bookTypeMap.get(type)){
      this.bookTypeMap.set(type, new BookType(type, distributor, otherData))
    }
    return this.bookTypeMap.get(type);
  }
}

class Book{
  constructor(name, price, bookType){
    this.name = name;
    this.price = price;
    this.bookType = bookType;
  }
}

class SBook{
  constructor(name, price, type, distributor, otherData){
    this.name = name;
    this.price = price;
    this.type = type;
    this.distributor = distributor;
    this.otherData = otherData;
  }
}

// flyweight object
class BookType{
  constructor(type, distributor, otherData){
    this.type = type;
    this.distributor = distributor;
    this.otherData = otherData;
  }
}

function Store1(){
  const bookList = [];
  for(let i=0;i<10000000; i++){
    const booktype = FlyweightFactory.getBookType('action', 'Fygal', 'stuff');
    bookList.push(new Book('name', 123, booktype));
    i++;
  }
  const used = process.memoryUsage();
  
  for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }
}

function Store2(){
  const sbookList = [];
  for(let i=0;i<10000000; i++){
    sbookList.push(new SBook('name', 123, 'action', 'Fygal', 'stuff'));
    i++;
  }
  const used = process.memoryUsage();
  
  for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }
}

Store1();
console.log('\n')
Store2();

/**
 * 
 * 
store1: with flyweight
rss 395.47 MB
heapTotal 342.45 MB
heapUsed 315.93 MB
external 0.21 MB
arrayBuffers 0.01 MB

store2:
rss 857.66 MB
heapTotal 804.5 MB
heapUsed 763.39 MB
external 0.27 MB
arrayBuffers 0.01 MB
 */