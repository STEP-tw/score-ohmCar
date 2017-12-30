const Score=function(){
  this.score=0;
}

Score.prototype={
  getScore: function(){
    return this.score;
  },
  incrementScore: function(incrementalValue){
    return this.score+=incrementalValue;
  }
}
