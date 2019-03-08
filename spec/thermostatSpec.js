describe('thermostat starts at 20 degrees', function() {
  it('starts at 20 degrees', function () {
    var thermostat
    thermostat = new Thermostat
    expect(thermostat.temperature).toEqual (20);
  });
});
