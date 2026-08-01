import vlc
import time
import sys

# Load and play the music
p = vlc.MediaPlayer("Dagabaaz Re - Rahat Fateh Ali Khan, Shreya Ghoshal.mp3")
p.play()

time.sleep(1)  # wait a bit to start lyrics after music starts

def print_lyrics():
    # Lyrics lines
    musics = [
        "Dagabaaz re haaye... daghabaaz re...",
        "Tore naina👀... bade dagabaaz re...",
        "Derena derena derena…",
        "Ho tore naina👀… haaye...",
        "Naina👀 naina👀 naina👀 haaye...",
        "🎶 🎶 🎶 🎶 🎶 🎶 🎶 🎶 🎶 🎶",
        "Dagabaaz re haaye... daghabaaz re...",
        "Tore naina👀 bade dagabaaz re..."
    ]

    # Delay (in seconds) between each lyric line (match roughly with the song)
    delays = [2.8, 3.5, 2.7, 6, 2.6, 7.4, 2.4,2]

    print("\n🎵 Playing: Dagabaaz Re\n")

    for i, line in enumerate(musics):
        for char in line:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(0.08)  # speed of typing effect
        print()
        if i < len(delays):
            time.sleep(delays[i])  # wait before showing next line

# Run lyrics display
print_lyrics()

print("❤️❤️❤️")

