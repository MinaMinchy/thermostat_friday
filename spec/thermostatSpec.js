describe('Thermostat Features', function() {

  var thermostat;

  beforeEach( function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function () {
    expect(thermostat.temperature).toEqual (20);
  });

  it('increases temperature with an up function', function() {
    var initialTemp = thermostat.temperature
    var tempChange = 2;
    thermostat.up(tempChange);

    expect(thermostat.temperature).toEqual(initialTemp+tempChange)
    });

    it('decrease temperature with a down function', function() {
    var initialTemp = thermostat.temperature;
    console.log(initialTemp);
    var tempChange = 2;

    thermostat.down(tempChange);

    console.log(thermostat.temperature);
    expect(thermostat.temperature).toEqual(initialTemp-tempChange)
    });

    it('minimum temperature is 10 degrees', function() {
      thermostat.temperature = 10;
      thermostat.down(5);

      expect(thermostat.temperature).toEqual(10);
    });

    it('if power saving mode is on, max temp is 25 degrees', function() {
      thermostat.temperature = 30;
      thermostat.powersaveOn();
      expect(thermostat.temperature).toEqual(25);
    });
});
