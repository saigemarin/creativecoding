/***************************************************************************
  Using Adafruit BMP280 library, 
  Incorporating pieces of code from Adafruit BMP280 Library example 'bmp280test' written by Written by 
  Limor Fried & Kevin Townsend for Adafruit Industries.

  Using Servo library, 
  Incorporating pieces of code from Servo library example 'Sweep' by BARRAGAN <http://barraganstudio.com> and 
  modified 8 Nov 2013 by Scott Fitzgerald <https://www.arduino.cc/en/Tutorial/LibraryExamples/Sweep>

 ***************************************************************************/

#include <Wire.h>
#include <SPI.h>
#include <Adafruit_BMP280.h>
#include <Servo.h>

#define BMP_SCK  (13)
#define BMP_MISO (12)
#define BMP_MOSI (11)
#define BMP_CS   (10)

Adafruit_BMP280 bmp; // I2C

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

int servoVal;
int tempVal;



void setup() {
  Serial.begin(9600);
  while ( !Serial ) delay(100);   // wait for native usb
  Serial.println(F("BMP280 Values"));
  unsigned status;
  //status = bmp.begin(BMP280_ADDRESS_ALT, BMP280_CHIPID);
  status = bmp.begin();
  if (!status) {
    Serial.println(F("Could not find a valid BMP280 sensor, check wiring or "
                      "try a different address!"));
    Serial.print("SensorID was: 0x"); Serial.println(bmp.sensorID(),16);
    Serial.print("        ID of 0xFF probably means a bad address, a BMP 180 or BMP 085\n");
    Serial.print("   ID of 0x56-0x58 represents a BMP 280,\n");
    Serial.print("        ID of 0x60 represents a BME 280.\n");
    Serial.print("        ID of 0x61 represents a BME 680.\n");
    while (1) delay(10);
  }

  /* Default settings from datasheet. */
  bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     /* Operating Mode. */
                  Adafruit_BMP280::SAMPLING_X2,     /* Temp. oversampling */
                  Adafruit_BMP280::SAMPLING_X16,    /* Pressure oversampling */
                  Adafruit_BMP280::FILTER_X16,      /* Filtering. */
                  Adafruit_BMP280::STANDBY_MS_500); /* Standby time. */

  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
    tempVal = (bmp.readTemperature() * 9/5 + 32); //converts C temp to F temp
    Serial.print(F("Temperature = "));
    Serial.print(tempVal);
    Serial.println(" *C");

    Serial.print(F("Pressure = "));
    Serial.print(bmp.readPressure());
    Serial.println(" Pa");

    Serial.print(F("Approx altitude = "));
    Serial.print(bmp.readAltitude(1013.25)); /* Adjusted to local forecast! */
    Serial.println(" m");

    Serial.println();
    delay(2000);

    servoVal = bmp.readPressure();            // bmp280 reading of barometric pressure
    servoVal = map(servoVal, 99051, 104131, 0, 180);     // scale pressure range to use it with the 180 degree servo
    myservo.write(65);                  // moves servo according to barometric pressure
    delay(15);  
}
