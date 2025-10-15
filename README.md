# 🔐 Prox-Pass Generator

A **high-security random password generator CLI tool** built with Node.js.  
It creates strong, customizable passwords right from your terminal — with clipboard support and a strength meter.

---

## ✨ Features

- ⚙️ Custom password length  
- 🔠 Include or exclude lowercase, uppercase, numbers, and symbols  
- 🔒 Uses **Node.js `crypto`** for secure random generation  
- 🧠 Password strength indicator (Weak → Very Strong)  
- 📋 One-command **clipboard copy** support (`--copy`)  
- 🌈 Beautiful, colored CLI output using Chalk  
- ⚡ Lightweight, fast, and simple to use

---

## 🧩 Installation

```bash
npm install -g prox-pass-gen
```

Or use directly with npx (no install needed):

```bash
npx prox-pass-gen
```


---

## 🚀 Usage

```bash
securepass [options]
```

---

## 🧠 Options

Option	Description	Default

--length=<number>	Set password length	16
--no-lower	Exclude lowercase letters	—
--no-upper	Exclude uppercase letters	—
--no-numbers	Exclude numbers	—
--no-symbols	Exclude special characters	—
--copy	Copy password to clipboard	false
--help, -h	Show help menu	—



---

## 🧾 Examples

1️⃣ Generate a 20-character password:

```bash
securepass --length=20
```

2️⃣ Generate a password without symbols:

```bash
securepass --length=32 --no-symbols
```

3️⃣ Generate and copy password to clipboard:

```bash
securepass --length=24 --copy
```

Output Example:

🔑 Generated Password:  A8xT@9zLpQ1!vFs7mR4#
🧠 Strength: 💪 Strong
📏 Length: 20 characters
📋 Copied to clipboard!
✅ SecurePass by ProgrammerKR


---

## 🧑‍💻 Author

### Kanishk Raj (ProgrammerKR)
🚀 Web Developer • Graphic Designer • Freelancer

npm: @ProgrammerKR

GitHub: ProgrammerKR

Project Repo: prox-pass-gen



---

## 📜 License

MIT License
© 2025 ProgrammerKR

---
