const int LEDPinP1Warn = 2;
const int switchPinP1Warn = 3;
const int LEDPinP1Win = 4;
const int switchPinP1Win = 5;

const int LEDPinP2Warn = 6;
const int switchPinP2Warn = 7;
const int LEDPinP2Win = 8;
const int switchPinP2Win = 9;

int switchValP1Wa;
int switchValP1Wi;
int switchValP2Wa;
int switchValP2Wi;


void setup() {
  //configure p1 pins
  pinMode(LEDPinP1Warn, OUTPUT);
  pinMode(switchPinP1Warn, INPUT); 
  pinMode(LEDPinP1Win, OUTPUT);
  pinMode(switchPinP1Win, INPUT);
//configure p2 pins
  pinMode(LEDPinP2Warn, OUTPUT);
  pinMode(switchPinP2Warn, INPUT); 
  pinMode(LEDPinP2Win, OUTPUT);
  pinMode(switchPinP2Win, INPUT);
  //Serial.begin(9600);

}

void loop() {
  //read the value on the switchPin and store it
  //in a variable
  switchValP1Wa = digitalRead(switchPinP1Warn);
  switchValP1Wi = digitalRead(switchPinP1Win);
  switchValP2Wa = digitalRead(switchPinP2Warn);
  switchValP2Wi = digitalRead(switchPinP2Win);

  //change the start of the player 1 warning light if car makes contact/closes the circuit
  if (switchValP1Wa == HIGH) {
    digitalWrite(LEDPinP1Warn, HIGH);
    Serial.println("WATCH THOSE WALLS PLAYER 1");
  } else {
    digitalWrite(LEDPinP1Warn, LOW);
  }

  if (switchValP1Wi == HIGH) {
    digitalWrite(LEDPinP1Win, HIGH);
    Serial.println("YOU'VE WON PLAYER 1");
  } else {
    digitalWrite(LEDPinP1Win, LOW);
  }

  if (switchValP2Wa == HIGH) {
    digitalWrite(LEDPinP2Warn, HIGH);
    Serial.println("WATCH THOSE WALLS PLAYER 2");
  } else {
    digitalWrite(LEDPinP2Warn, LOW);
  }

  if (switchValP2Wi == HIGH) {
    digitalWrite(LEDPinP2Win, HIGH);
    Serial.println("YOU'VE WON PLAYER 2");
  } else {
    digitalWrite(LEDPinP2Win, LOW);
  }


}
