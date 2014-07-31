var Character = function Character(x, y) {
  "use strict";
  this.x = x;
  this.y = y;
  this.health_ = 100;
};
($traceurRuntime.createClass)(Character, {attack: function(character) {
    "use strict";
    character.health_ -= 10;
  }}, {});
var Monster = function Monster(x, y, name) {
  "use strict";
  $traceurRuntime.superCall(this, $Monster.prototype, "constructor", [x, y]);
  this.name = name;
};
var $Monster = Monster;
($traceurRuntime.createClass)(Monster, {
  attack: function(character) {
    "use strict";
    $traceurRuntime.superCall(this, $Monster.prototype, "attack", [character]);
  },
  get isAlive() {
    "use strict";
    return this.health_ > 0;
  },
  get health() {
    "use strict";
    return this.health_;
  },
  set health(value) {
    "use strict";
    if (value < 0)
      throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}, {}, Character);
var myMonster = new Monster(5, 1, 'arrrg');
var yourMonster = new Monster(5, 1, 'nyan');
console.log(myMonster.health);
console.log(myMonster.isAlive);
myMonster.health = 1;
console.log(myMonster.health);
console.log(myMonster.isAlive);
myMonster.attack(yourMonster);
console.log(yourMonster.health);
