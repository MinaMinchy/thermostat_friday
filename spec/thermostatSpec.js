describe('Thermostat Features', () => {
  
  describe('thermostat', function() {
    var thermostat

    beforeEach(() => {
      thermostat = new Thermostat
    });

    it('starts at 20 degrees', function () {
      expect(thermostat.temperature).toEqual (20);
    });

    it('increases temperature with an up function', () => {
      var initialTemp = thermostat.temperature
      var tempChange = 2;
      thermostat.up(tempChange);
      expect(thermostat.temperature).toEqual(initialTemp+tempChange)
    });

  });

});
