function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.up = function(number) {
  this.temperature += 2;
};

Thermostat.prototype.down = function(tempChange) {
  this.temperature -= 2;
};
