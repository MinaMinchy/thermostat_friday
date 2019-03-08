function Thermostat() {
  const MIN_TEMP = 10;
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.up = function(tempChange) {
  this.temperature += tempChange;
};


Thermostat.prototype.down = function(tempChange) {
  console.log(Thermostat.MIN_TEMP);
  if ((this.temperature - tempChange) < 10) {
    this.temperature = 10;
  } else{
    this.temperature -= tempChange;
  }


  Thermostat.prototype.powersaveOn = function() {
    if(this.temperature > 25) {
      this.temperature = 25;
    };
  };

  Thermostat.prototype.powersaveOff = function() {
    this.powerSaving = false;
  };
};
