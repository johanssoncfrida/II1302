/**
 * This is the firmware that will be flashed on the ESP8266 Wifi-module.
 * It's a HTTPS client to access the user's messages in the Firebase Realtime Database for our project.
 * Written by Oliver Antal (builds gradually on the BasicHTTPSClient.ino example code sketch from the Arduino IDE)
 * 
 * 12 May 2021
 * 
 * Original file name: BasicHTTPSClient.ino, Created on: 20.08.2018
 * 
 * Description: This code, so far, just sets up a serial connection (UART), connects to my own hard-coded smartphone hotspot (name and password) and periodically retrieves a "current message" from a hard-coded part of the Realtime Database.
*/

#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>

#define BAUDRATE 115200

// Fingerprint for a website can be found on this site: https://www.grc.com/fingerprints.htm
// Current fingerprint is for : 
const uint8_t fingerprint[20] = {0x49, 0xE0, 0x54, 0x6C, 0xF8, 0xC0, 0xCC, 0x79, 0xCF, 0x5C, 0x5E, 0x87 ,0x17, 0x59, 0xFE, 0xFA, 0xE2, 0x86, 0xFC, 0x3E};

ESP8266WiFiMulti WiFiMulti;

// function signatures START
void Test_program(void);
void Project(void);
// implement these two
// function signatures END

void setup() {

Test_program();

  // Initialize pin settings to enable blinking LED
  pinMode(LED_BUILTIN, OUTPUT); // initialize the LED_BUILTIN pin as output.

  // Initialize serial and wait for port to open
  Serial.begin(BAUDRATE);

  while(!Serial){; // blink LED while setting up serial connection; This piece of code doesn't work very well sometimes? I think it's unnecessary but I'll leave it here for now.
    int countDown = 10;
    while(countDown > 0){
      digitalWrite(LED_BUILTIN, LOW);
      delay(300);
      digitalWrite(LED_BUILTIN, HIGH);  
      delay(300);
      --countDown;
      }
    }
    
  // Serial.setDebugOutput(true);

  Serial.println();
  Serial.println();
  Serial.println();


  for (uint8_t t = 4; t > 0; t--) {
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }

  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP("XP OLA", "3212690ce584");
}

void loop() {
  // wait for WiFi connection
  if ((WiFiMulti.run() == WL_CONNECTED)) {

    std::unique_ptr<BearSSL::WiFiClientSecure>client(new BearSSL::WiFiClientSecure);

    client->setFingerprint(fingerprint);

    HTTPClient https;

    Serial.print("[HTTPS] begin...\n");

    digitalWrite(LED_BUILTIN, LOW); // turn on LED while attempting to do HTTP operations. LOW means "turned on"
    
    if (https.begin(*client, "https://door-display-74e1f-default-rtdb.europe-west1.firebasedatabase.app/users/oQjSGlLnbUStO4FXBKcRvgJzfb83/message/message.json")) {  // HTTPS

      Serial.print("[HTTPS] GET...\n");
      // start connection and send HTTP header
      int httpCode = https.GET();

      // httpCode will be negative on error
      if (httpCode > 0) {
        // HTTP header has been send and Server response header has been handled
        Serial.printf("[HTTPS] GET... code: %d\n", httpCode);

        // file found at server
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String payload = https.getString();
          Serial.println(payload);
        }
      } else {
        Serial.printf("[HTTPS] GET... failed, error: %s\n", https.errorToString(httpCode).c_str());
      }

      https.end();
    } else {
      Serial.printf("[HTTPS] Unable to connect\n");
    }
  }

  digitalWrite(LED_BUILTIN, HIGH); // turn off LED while attempting to do HTTP operations. HIGH means "turned off"
  Serial.println("Wait 5s before next round...");
  delay(5000);
}



void Test_program(){
  pinMode(LED_BUILTIN, OUTPUT); // initialize the LED_BUILTIN pin as output.
  // 1 = true
  // 0 = false
  while(1){
      digitalWrite(LED_BUILTIN, LOW);
      delay(150);
      digitalWrite(LED_BUILTIN, HIGH);  
      delay(150);
      }
}
void Project(void){
  pinMode(LED_BUILTIN, OUTPUT); // initialize the LED_BUILTIN pin as output.
  // 1 = true
  // 0 = false
  while(1){
      digitalWrite(LED_BUILTIN, LOW);
      delay(1000);
      digitalWrite(LED_BUILTIN, HIGH);  
      delay(1000);
      }
}
