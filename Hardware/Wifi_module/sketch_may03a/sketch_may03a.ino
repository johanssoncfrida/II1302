#define ESP8266_PIN 1
#define DELAY_TIME 500

void setup() {
  // put your setup code here, to run once:
  pinMode(ESP8266_PIN, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(ESP8266_PIN, HIGH);
  delay(DELAY_TIME);
  digitalWrite(ESP8266_PIN, LOW);
  delay(DELAY_TIME);
}
