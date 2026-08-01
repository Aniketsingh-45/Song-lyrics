
import vlc
import time
import sys

# Play the song
p = vlc.MediaPlayer(
   "Arz Kiya Hai - Anuv Jain l Anuv Jain x Coke Studio Bharat l Anuv Jain New Song l#anuvsworld - Anuvsworld.mp3"
)
p.play()
time.sleep(0)  # wait a bit for the song to start

def line():
    arz = [
        "Arz kiya hai 💫",
        "Humne bhi likha kuch tere baare mein 🖋️💌",
        "Haathon ko sambhaale mere haathon mein 🤲❤️",
        "Kaise haathon ko sambhaale mere haathon mein? 💭🌸",
        "Jab tak neend na aaye in lakeeron mein 🌙🕊️",
        "Baatein hon… 💞✨",
        "Haaye… 🌼"
    ]

    delays = [1, 1.2, 1,1.1, 1.1, 1.1, 1]

    print("\n🎶 Playing: Arz Kiya Hai 💫❤️\n")

    for i, text in enumerate(arz):
        for char in text:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(0.08)  
        print()
        if i < len(delays):
            time.sleep(delays[i])  

# Run lyrics display
line()


