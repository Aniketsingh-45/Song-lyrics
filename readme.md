<div align="center">

# 🎵 Music & Lyrics Player 🎶

  <p align="center">
    <b>A synchronized music and lyrics player available as both an interactive web app and terminal experience!</b>
    <br />
    <br />
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/VLC-FF8800?style=for-the-badge&logo=vlc-media-player&logoColor=white" alt="VLC" />
  </p>

</div>

---

## 📖 Overview

**Music & Lyrics Player** brings your favorite songs and lyrics to life through synchronized audio-lyric playback. Whether you enjoy a clean terminal interface with typewriter-style animated text or a glowing glassmorphism web player with vinyl animations, this repository provides both!

---

## ✨ Features

### 🌐 Web Experience
- **🎨 Glassmorphism & Animated Background:** Sleek, modern dark-mode aesthetic with ambient background floating shapes.
- **📀 Spinning Vinyl Animation:** Dynamic vinyl record spin effect synchronized with play/pause states.
- **🎤 Synchronized Line-by-Line Lyrics:** Lyrics automatically highlight and scroll smoothly in real-time as the audio plays.
- **⚡ Quick Track Switching:** Toggle seamlessly between different featured songs.

### 🐍 Python Terminal CLI
- **🔤 Typewriter Lyrics Effect:** Lyrics print character-by-character synchronized with precise timestamps.
- **🔊 Native Audio Integration:** Powered by `python-vlc` for seamless local playback.

---

## 🎵 Featured Tracks

1. **Tu Jaane Na** – *Atif Aslam, Pritam*
2. **Arz Kiya Hai** – *Anuv Jain*
3. **Dagabaaz Re** – *Rahat Fateh Ali Khan, Shreya Ghoshal*

---

## 📂 Project Structure

```plaintext
├── 📄 index.html          # Web Player HTML markup
├── 🎨 style.css           # Glassmorphism UI styling & animations
├── 📜 script.js           # Web audio playback & synced lyrics engine
├── 🐍 TuJaneNa.py         # Python CLI player for "Tu Jaane Na"
├── 🐍 arzkiyahai.py       # Python CLI player for "Arz Kiya Hai"
├── 🐍 dagabaz.py          # Python CLI player for "Dagabaaz Re"
├── 🎵 *.mp3 / *.m4a       # Local audio files
└── 📘 readme.md           # Project documentation
```

---

## 🚀 Quick Start

### 🌐 Option 1: Running the Web App

Simply open `index.html` in your favorite web browser, or serve it using a lightweight local web server:

```bash
# Using Python builtin HTTP server
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser! 🎧

---

### 🐍 Option 2: Running the Python Terminal Scripts

#### Prerequisites
- **Python 3.x**
- **VLC Media Player** installed on your system
- `python-vlc` library:

```bash
pip install python-vlc
```

#### Run a track:
```bash
# Play Tu Jaane Na
python TuJaneNa.py

# Play Arz Kiya Hai
python arzkiyahai.py

# Play Dagabaaz Re
python dagabaz.py
```

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Glassmorphism & CSS Animations), Vanilla JavaScript (Audio API) |
| **Backend / CLI** | Python 3, `python-vlc` |
| **Typography** | [Outfit Font (Google Fonts)](https://fonts.google.com/specimen/Outfit) |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check out the issues page or submit a Pull Request.

---

<div align="center">
  <sub>Made with ❤️ for music & code lovers.</sub>
</div>
