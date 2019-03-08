function Thermostat() {
  const MIN_TEMP = 10;
  this.temperature = 20;
};

Thermostat.prototype.up = function(tempChange) {
  this.temperature += tempChange;
};

// Thermostat.prototype.down = function(tempChange) {
//   if ((this.temperature - this.MIN_TEMP) > tempChange) {
//     this.temperature -= tempChange;
//   } else {
//     console.error('temperature cannot be less than the minimum temperature' + this.MIN_TEMP)
//   };
// };

Thermostat.prototype.down = function(tempChange) {
  console.log(Thermostat.MIN_TEMP);
  if ((this.temperature - tempChange) < 10) {
    this.temperature = 10;
  } else{
    this.temperature -= tempChange;
  }
};

