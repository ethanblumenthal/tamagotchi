var mario = new Tamagotchi('Mario', 'monkey');

function Tamagotchi(name, kind) {
    var that = this;
    this.name = name;
    this.kind = kind;
    this.health = 100;
    this.feed = function() {
        that.health += 10;
        updateScore()        
    }
    this.pet = function() {
        that.health += 1;
        updateScore()        
    }
    this.start = function() {
        that.interval = setInterval(function() {
            that.health -= 5;
            updateScore()
            if (that.health <=0) {
                clearInterval(that.interval);
                $('#health').text('GAME OVER')
            }
        }, 1000);
    }
}

function updateScore() {
    $('#health').text('Health: ' + mario.health);
}

$('#start').click(function() {
    mario.start();
});

$('#feed').click(function() {
    mario.feed();
});

$('#pet').click(function() {
    mario.pet();
});