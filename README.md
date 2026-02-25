---

# 🦆 Quackathon 2024: Food Redistribution Platform 🚀

> *“Don’t just code — feed communities!”*

Welcome to the official repo for our Quackathon 2024 project: a lightweight **Food Redistribution Platform** built with HTML, CSS, and JavaScript. This app helps communities list and claim available food spots — perfect for hackathon demo day and real-world impact! ([GitHub][1])

---

## 🧠 What Is This?

This project is a **community food spot tracker** that lets users:

* 🌽 View available food resources (shelters, kitchens, banks)
* 🍞 Claim food spots with a single click
* ➕ Add new listings (via a separate UI)
* 🛠️ See interactive UI updates in action

It’s built as a **front-end prototype** — great for hackathons, community outreach, and expanding into full features later! ([GitHub][1])

---

## 📦 Project Structure

```
quackathon2024jsw/
├── index.html        # Main UI listing food resources  
├── add_listing.html  # Form to add new spot (popup)  
├── script.js         # JS logic to claim spots  
├── map.css           # Styling for layout  
├── map.html          # Map / alternative UI  
└── README.md         # This file 💡
```

([GitHub][1])

---

## 🛠 Tech Stack

This repo sticks with essentials:

| Layer         | Tool       |               |
| ------------- | ---------- | ------------- |
| UI            | HTML + CSS |               |
| Interactivity | JavaScript |               |
| Styling       | CSS        |               |
| Browser API   | DOM Events | ([GitHub][1]) |

No backend yet — just pure web magic ✨

---

## 💡 Cool Features

* ✅ **Claim a spot:** Click “Claim Spot” to mark a listing claimed
* ✨ **Dynamic UI:** Buttons update and disable on click
* 🔧 **Popup form:** Add new listings in a separate window
* 📍 Optional mapping support (add/map.html) ([GitHub][2])

---

## 👩‍💻 How It Works

A quick technical look under the hood:

```js
document.addEventListener("DOMContentLoaded", () => {
  // Open the add-listing popup
  document.getElementById("addListingButton")
    .addEventListener("click", () => window.open("add_listing.html"));
  
  // Claim logic
  document.querySelector('.container')
    .addEventListener('click', (event) => {
      if (event.target.classList.contains('claim-button')) {
        const title = event.target.closest("div").querySelector("h2").textContent;
        alert(`Spot claimed for ${title}`);
        event.target.textContent = "Claimed";
        event.target.disabled = true;
      }
    });
});
```

🔥 Simple, clean, and hackathon-ready! ([GitHub][2])

---

## 🚀 Run Locally

Just clone and open:

```bash
git clone https://github.com/quirksqubits/quackathon2024jsw.git
cd quackathon2024jsw
open index.html  # or launch with a local server
```

Want live reload? Try **Live Server** in VS Code!

---

## 🤝 Contribute

We’d ❤️ contributions! Ideas include:

* ✍️ Add backend API (Node / Firebase)
* 📍 Integrate map display with geolocation
* 📱 Improve UI/UX with animations
* 🧪 Add tests

Just open a Pull Request — it’s a friendly hackathon repo! 🎉

---


[1]: https://github.com/quirksqubits/quackathon2024jsw "GitHub - quirksqubits/quackathon2024jsw"
[2]: https://raw.githubusercontent.com/quirksqubits/quackathon2024jsw/main/script.js "raw.githubusercontent.com"
