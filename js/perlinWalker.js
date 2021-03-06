var perlinWalker = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    z: 0,
    t: 0,
    move: function(){
        var stepX = noise(this.z);
            stepX = map(stepX, 0, 1, 0, window.innerWidth);
        var stepY = noise(this.t);
            stepY = map(stepY, 0, 1, 0, window.innerHeight);
        
        this.x = stepX;
        this.y = stepY;
        this.z += 0.011;
        this.t += 0.017;
    },
    map: function(value, istart, istop, ostart, ostop) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    },  
    rand: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    display: function(c) {
        // c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.fillRect(this.x, this.y, 2, 2);
        c.fill();
        c.stroke();
    },
    update: function(c){
        this.move();
        this.display(c);
    },
    init: function(){
        return false;
    }
}
