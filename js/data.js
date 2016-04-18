var dataObj = function() {
	this.fruitNum = 0;
	this.doubleScore = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

dataObj.prototype.reset = function() {
	this.fruitNum = 0;
	this.doubleScore = 1;
}

dataObj.prototype.draw =function() {
	var w = can1.width;
	var h = can1.height;

	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "#fff";
	// ctx1.fillText("num " + this.fruitNum,w * 0.5, h - 50 );
	// ctx1.fillText("double " + this.doubleScore, w * 0.5, h - 80);
	ctx1.fillText("score: " + this.score, w * 0.5, h - 40);

	if(this.gameOver) {
		this.alpha += deltaTime * 0.0004;

		if(this.alpha > 1) {
			this.alpha = 1;
		}
		ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
		ctx1.fillText("GAMEOVER", w * 0.5,h * 0.5 );
	}
	ctx1.restore();
}

dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 100 * this.doubleScore;
	this.fruitNum = 0;
	this.doubleScore = 1;

}