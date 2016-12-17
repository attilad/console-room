import wpi from 'wiring-pi';

export default blinkLED = () => {
    wpi.setup("gpio");
    var pin = 12;
    wpi.pinMode(pin, wpi.OUTPUT);
    var value = 1;
    var blinks = 5;

    for(var i = 0; i < blinks; i++) {
      wpi.digitalWrite(pin, value);
      value = +!value;
      setTimeout(500);
    }

    wpi.digitalWrite(pin, 0);
}
