from gtts import gTTS
from playsound import playsound
import os

location = os.getcwd()
audio = "speech.mp3"
file_path = os.path.join(location, audio)

language = 'ko'

while True:
    sp = gTTS(lang=language, text=input("say: "), slow=False)
    sp.save(audio)
    playsound(audio)
    os.remove(file_path)
