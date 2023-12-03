
const int potPin = A0;
const int photoPin = A1;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  int potValue = analogRead(potPin);
  Serial.println("potentiometer");
  Serial.println(potValue);

  int photoValue = analogRead(photoPin);
  Serial.println("photocell");
  Serial.println(photoValue);

  delay(10);
}
