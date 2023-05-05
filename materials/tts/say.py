from gtts import gTTS
from playsound import playsound
import os

location = os.getcwd()
audio = "speech.mp3"
file_path = os.path.join(location, audio)

print("""
한국어 : ko
영어 : en
""")

while True:
    inputStr = input("lang/say: ").split()
    langStr = str(inputStr[0])
    textStr = " ".join(inputStr[1:])
    sp = gTTS(lang=langStr, text=textStr, slow=False)
    sp.save(audio)
    playsound(audio)
    print(textStr)
    os.remove(file_path)