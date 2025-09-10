import tkinter as tk
from tkinter import messagebox
import requests

# Change this to your running Node.js server
API_URL = "http://localhost:3000"

def get_parties():
    try:
        response = requests.get(f"{API_URL}/party")
        if response.status_code == 200:
            parties_list.delete(0, tk.END)
            parties = response.json()
            for party in parties:
                parties_list.insert(tk.END, f"{party['id']}: {party['name']}")
        else:
            messagebox.showerror("Error", "Failed to fetch parties")
    except Exception as e:
        messagebox.showerror("Error", str(e))

def cast_vote():
    try:
        selected = parties_list.get(parties_list.curselection())
        party_id = selected.split(":")[0]
        voter_id = voter_entry.get()

        if not voter_id:
            messagebox.showwarning("Input Needed", "Please enter your Voter ID")
            return

        data = {"voterId": voter_id, "partyId": party_id}
        response = requests.post(f"{API_URL}/vote", json=data)

        if response.status_code == 200:
            messagebox.showinfo("Success", "Vote cast successfully!")
        else:
            messagebox.showerror("Error", f"Failed to vote: {response.text}")
    except Exception as e:
        messagebox.showerror("Error", str(e))
    except tk.TclError:
        messagebox.showwarning("Selection Needed", "Please select a party")

# Tkinter GUI setup
root = tk.Tk()
root.title("IoT Voting System")

tk.Label(root, text="Voter ID:").pack()
voter_entry = tk.Entry(root)
voter_entry.pack(pady=5)

tk.Button(root, text="Load Parties", command=get_parties).pack(pady=5)

parties_list = tk.Listbox(root, width=50)
parties_list.pack(pady=5)

tk.Button(root, text="Cast Vote", command=cast_vote).pack(pady=10)

root.mainloop()
