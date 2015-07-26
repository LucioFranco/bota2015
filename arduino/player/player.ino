const int dummy = 0;
#include <Wire.h>

#define SLAVE_ADDRESS 0x04
#define DELAY_LENGTH 200

int score = 0;

int* getNotes(int score)
{
  int result[] = {};
  switch(score)
  {
    case 1:
      result[0] = 1;
      result[1] = 2;

    default:
      result[0] = score;
  }
  return result;
}

void setup(void)
{

  for(int i = 2; i < 14; i++)
  {
    pinMode(i, OUTPUT);
  }

  Serial.begin(9600);

  Wire.begin(SLAVE_ADDRESS);

  Wire.onReceive(receiveData);
}

void playWith(int pin)
{
  digitalWrite(pin, HIGH);
  delay(DELAY_LENGTH);
  digitalWrite(pin, LOW);
}

void play(int *pins, int length)
{
  for(int i = 0; i < length; i++)
  {
    digitalWrite(pins[i], HIGH);
  }
  delay(DELAY_LENGTH);
  for(int i = 0; i < length; i++)
  {
    digitalWrite(pins[i], LOW);
  }
}

void loop(void)
{
  delay(100);
}

void receiveData(int byteCount)
{
  while(Wire.available())
  {
    Wire.read();
    score = Wire.read();
    Serial.println(score);
    int *notes = getNotes(score);
    play(notes, (sizeof(notes)/sizeof(int)));
  }
}
