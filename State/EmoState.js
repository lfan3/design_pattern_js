// constext: state + changeState
// state: implements the delegated method from context

// constext class
// abastract state
// concrete state
class Emotion{
  constructor(emotion){
    this.emotion = emotion;
    // !state: need to have the context. but the context of state is addded in context
    this.emotion.setContext(this);
  }
  
  changeEmotion(emotion){
    this.emotion = emotion
  }
  showEmotion(){
    this.emotion.show();
  }
  later(){
    this.emotion.later();
  }
}

class Sad{
  setContext(emotionContext){
    this.emotionContext = emotionContext;
  }
  show(){
    console.log(`I am sad 🥺 `);
  }
  later(){
    this.emotionContext.changeEmotion(new Happy(this.emotionContext))
  }
}

class Happy{
  setContext(emotionContext){
    this.emotionContext = emotionContext;
  }
  show(){
    console.log(`I am 😀`)
  }
  later(){
    this.emotionContext.changeEmotion(new Sad(this.emotionContext))
  }
}


const sad = new Sad();
const emotion = new Emotion(sad);
emotion.showEmotion();
emotion.showEmotion();
emotion.later();
emotion.showEmotion();


