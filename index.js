var Service, Characteristic;
var Ener314rt = require('energenie-ener314rt');

module.exports = function(api) {
    Service = api.hap.Service;
    Characteristic = api.hap.Characteristic;
    api.registerPlatform("homebridge-energenie-ener314rt", "Energenie-Ener314rt", Ener314rtPlatform);
}

function Ener314rtPlatform(log, config) {
    this.config = config;
    this.log = log;

    if (Ener314rt.initEner314rt(false) != 0) {
        this.log('Unable to initialise Energenie ENER314-RT board');
    } else {
        this.log('Radio initialised');
    }
}

Ener314rtPlatform.prototype.accessories = function(callback) {
    var self = this;
    self.accessories = [];
    self.config.switches.forEach(function(sw) {
        self.accessories.push(new Ener314rAccessory(sw, self.log, self.config));
    });
    callback(self.accessories);
}

function Ener314rAccessory(sw, log, config) {
    this.name = sw.name;
    this.sw = sw;
    this.log = log;
    this.config = config;
    this.currentValue = false;

    const informationService = new Service.AccessoryInformation()
        .setCharacteristic(Characteristic.Name, this.name)
        .setCharacteristic(Characteristic.Manufacturer, 'Raspberry Pi')
        .setCharacteristic(Characteristic.Model, 'Raspberry Pi');

    this.switchService = new Service.Switch(this.name);
    this.switchService.getCharacteristic(Characteristic.On)
        .on('get', this.handleOnGet.bind(this))    
        .on('set', this.handleOnSet.bind(this));
}

Ener314rAccessory.prototype.handleOnGet = function(callback) {
    callback(null, this.currentValue);
}

Ener314rAccessory.prototype.handleOnSet = function(value, callback) {
    this.currentValue = value;
    Ener314rt.ookSwitch(0, this.sw.socket, value, 10);
    callback(null);
}

Ener314rAccessory.prototype.getServices = function() {
    return [
        this.informationService, 
        this.switchService
    ];
}
