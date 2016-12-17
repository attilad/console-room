import wpi from 'wiring-pi';

export default blinkLED = () => {
    wpi.setup("gpio");

    const pin = 12;
    const blinks = 5;

    wpi.pinMode(pin, wpi.OUTPUT);

    let value = 1;

    for(let i = 0; i < blinks; i++) {
      wpi.digitalWrite(pin, value);
      value = +!value;
      setTimeout(500);
    }

    wpi.digitalWrite(pin, 0);
};
