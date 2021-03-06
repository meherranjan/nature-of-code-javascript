var randomWalker = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    move: function(){
        var stepX = this.rand(-1, 1),
            stepY = this.rand(-1, 1);
        
        this.x += stepX;
        this.y += stepY;
    },
    map: function(value, istart, istop, ostart, ostop) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    },  
    rand: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    display: function(c) {
        // c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.fillRect(this.x, this.y, 10, 10);
        c.fill();
        c.stroke();
    },
    update: function(c){
        this.display(c);
        this.move()
    },
    init: function(){
      return false;
    }
}
