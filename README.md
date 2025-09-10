IoT Voting System - Tkinter GUI

This project provides a Tkinter-based GUI for the IoT Voting System API. It allows users to simulate voting by interacting with a Node.js backend API.

🚀 Project Overview

The IoT Voting System is designed for educational purposes to demonstrate how IoT, APIs, and GUI applications can work together.
The Tkinter GUI provides a simple interface for:

Viewing parties

Casting votes

Monitoring voting status

The backend API handles voter registration and vote recording.



-------
🛠 Technologies Used

Python 3 (Tkinter for GUI, requests for API calls)

Node.js / Express.js (Backend API)

JavaScript (API logic)

HTML/CSS (API testing / optional frontend)

Git/GitHub (Version control)



------
⚙️ Setup Steps

Clone your repository

git clone https://github.com/your-username/IoT-Voting-Tk-GUI.git
cd IoT-Voting-Tk-GUI


Install Python dependencies

pip3 install requests


Tkinter is pre-installed with Python.

Start the Node.js API

cd path-to-api
npm install
npm start


Run the Tkinter GUI

python3 app.py





-----
🔧 How the Simulation Works

Open the Tkinter GUI.

Click Load Parties to fetch the list of parties from the backend API.

Select a party from the dropdown menu.

Enter your voter ID.

Click Cast Vote.

The system confirms the vote has been recorded via the API.
<img width="1366" height="768" alt="Screenshot from 2025-09-10 16-53-06" src="https://github.com/user-attachments/assets/873db505-51f2-4ef0-b42e-6e650fca6186" />




---
📦 Devices / Sensors Emulated

Voter ID input simulates physical voter identification.

Vote casting button simulates the action of recording a vote in the system.




---
⚠️ Challenges Faced

Integrating Tkinter with asynchronous API calls.

Handling API errors and timeouts gracefully.

Ensuring the GUI updates dynamically with the backend response.



--
💡 Ideas for Future Improvements

Add real-time results display.

Implement voter authentication with RFID or biometric simulation.

Enhance GUI with charts to show live statistics.

Add logging for vote history and error tracking.

Deploy as a web-based interface using Flask or Django.
t

