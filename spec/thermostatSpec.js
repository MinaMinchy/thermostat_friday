describe('Thermostat Features', () => {

  // describe('thermostat', function() {
  //   var thermostat;




    it('starts at 20 degrees', function () {
      var thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual (20);
    });

    it('increases temperature with an up function', () => {
      var thermostat = new Thermostat();
      var initialTemp = thermostat.temperature
      var tempChange = 2;
      thermostat.up(tempChange);

      expect(thermostat.temperature).toEqual(initialTemp+tempChange)
     });

    it('decrease temperature with a down function', function() {
      var thermostat = new Thermostat();
      var initialTemp = thermostat.temperature
      var tempChange = 2;
      thermostat.down(tempChange);
      expect(thermostat.temperature).toEqual(initialTemp-tempChange)
     });

  // });

});
