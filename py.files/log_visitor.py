# log_visitor.py
import datetime
from collections import defaultdict

# --- Configuration ---
LOG_FILE = "visitors.txt"

# Custom substitution cipher (extend as needed)
CIPHER = {
    '0': 'a', '1': 'w', '2': 'r', '3': 't', '4': 'y',
    '5': 'u', '6': 'i', '7': 'o', '8': 'p', '9': 'q',
    '.': 'z', '-': 'x', ':': 'v', ' ': 's'
}

def encrypt_text(text, cipher):
    """Encrypt text using substitution cipher. Unmapped chars stay as-is."""
    return ''.join(cipher.get(char, char) for char in text)

def log_visitor(ip_address):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    record = f"{ip_address} | {timestamp}"
    encrypted_record = encrypt_text(record, CIPHER)
    
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(encrypted_record + "\n")
    print(f"Logged (encrypted): {encrypted_record}")

# --- Example usage ---
if __name__ == "__main__":
    # Simulate getting IP (in real app, get from request)
    fake_ip = "192.168.1.1"
    log_visitor(fake_ip)