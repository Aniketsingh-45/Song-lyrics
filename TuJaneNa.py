import vlc 
import time
import sys

p=vlc.MediaPlayer("Tu Jaane Na - Atif Aslam, Pritam.m4a")

p.play()

time.sleep(2)


def play_lyrics():
   
  jane = [
        "🎶 Kaise bataye kyun tujhko chahe... 💕",
        "💫 Yaara bata na paaye... 😔",
        "🌙 Baatein dilon ki dekho jo baaki, aankhein tujhe samjhaye... 👀💞",
        "✨ Tu jaane na... 💖",
        "💞 Tu jaane na.... 🌸",
        "🌤️ Tu jaane na... 💫",
        "❤️ Tu jaane na... 💭"
    ]

  delays=[1.2,1.5,1.2,1.8,2.3,2.3,2]

  print("\nTu Jane Na ❤️\n")

  for i, line in enumerate(jane):
     for char in line:
      sys.stdout.write(char)
      sys.stdout.flush()
      time.sleep(0.09)

     print()
     if i<len(delays):
       time.sleep(delays[i])


play_lyrics()





   
    