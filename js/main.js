function Tamagotchi(name, kind) {
    var that = this;
    this.name = name;
    this.kind = kind;
    this.health = 100;
    this.feed = function() {
        that.health += 5;
    }
    this.start = function() {
        that.interval = setInterval(function() {
            that.health -= 5;
            console.log(that.health);
            if (that.health <=0) {
                clearInterval(that.interval);
                console.log(that.name + ' died');
            }
        }, 1000);
    }
}