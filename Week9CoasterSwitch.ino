const int LEDPin = 2;
const int switchPin = 3;
int switchVal;


void setup() {
  //configure your pins
  pinMode(LEDPin, OUTPUT);
  pinMode(switchPin, INPUT); 
  //Serial.begin(9600);

}

void loop() {
  //read the value on the switchPin and store it
  //in a variable
  switchVal = digitalRead(switchPin);

  //change the start of the light based on the switch
  if (switchVal == HIGH) {
    digitalWrite(LEDPin, HIGH);
    Serial.println("NEED COASTER");
  } else {
    digitalWrite(LEDPin, LOW);
    Serial.println("SAFE TABLE, GOOD JOB.");
  }
}
