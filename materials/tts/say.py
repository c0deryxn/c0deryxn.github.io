from gtts import gTTS
from playsound import playsound
import hashlib
import os

# Admin Certification
cert_code = "95cb4aefcad3b5feaba5ab6adf6aa5e01f6c1df42b1c28cfa818a0f3c714c624bf20417f9f1ed9d1098c579b50f36023c8104efb3d44aff21fa1440db5fabd13"
passwd = input("Password: ")
salt = input("2nd Password: ")
input_cert_code = hashlib.sha512(str(passwd + salt).encode("utf-8")).hexdigest()

if input_cert_code == cert_code:
    try:
        os.system("cls")
    except:
        os.system("clear")
    print("Login Success!")
    location = os.getcwd()
    audio = "speech.mp3"
    file_path = os.path.join(location, audio)

    print("한국어: ko\n영어: en")

    while True:
        inputStr = input("lang/say: ").split()
        langStr = str(inputStr[0])
        textStr = " ".join(inputStr[1:])
        sp = gTTS(lang=langStr, text=textStr, slow=False)
        sp.save(audio)
        playsound(audio)
        print(textStr)
        os.remove(file_path) 
else:
    print("Login Denied!")
input()
