
# DSA Learning Hub

**DSA Learning Hub** is a curated collection of Data Structures and Algorithms topics, patterns, and problems with detailed explanations.
I built this website to help learners (including myself!) explore DSA concepts in a clean, organized way — and to create a space where others can also contribute and grow the collection together.

---

## ✨ Why I created this

* ✅ To document and share my own learning journey in DSA.
* ✅ To provide a central hub with clear explanations and example problems.
* ✅ To encourage **open source contributions**, so anyone can add new topics, improve descriptions, or fix errors.

---

## 🌟 Features

* 🔍 **Searchable** list of DSA topics.
* 📅 Sorted by latest updates.
* 🧩 Tagged by difficulty and topic type.
* ✅ **Owner badge** for topics I created.
* 👥 **Contributor section** showing name and GitHub profile.

---

## 🤝 How to contribute

We love contributions!
Here’s how you can contribute to **DSA Learning Hub** step by step:

### 1️⃣ Fork the repository

* Go to the repository on GitHub.
* Click the **Fork** button in the top right corner to create your own copy.

### 2️⃣ Clone your fork

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 3️⃣ Create a new branch

Always create a new branch for your changes:

```bash
git checkout -b add-new-topic
```

### 4️⃣ Add or update a topic

* Open the `dsa_topics.js` file.
* Add a new object to the `topics` array with the following fields:

```js
{
  "title": "Your Topic Title",
  "description": "Brief explanation of the topic",
  "difficulty": "easy | medium | hard",
  "date": "YYYY-MM-DD",
  "completed": false,
  "filename": "problems\\your_topic_file.html",
  "icon": "💡",
  "tags": ["arrays", "sorting"],
  "contributorName": "Your Name",
  "contributorGithub": "your-github-username",
  "owner": false
}
```

* Create the corresponding HTML file inside the `problems` folder with your explanation/content.

### 5️⃣ Commit your changes

```bash
git add .
git commit -m "Added new topic: <topic-name>"
```

### 6️⃣ Push to your fork

```bash
git push origin add-new-topic
```

### 7️⃣ Open a Pull Request

* Go to your fork on GitHub.
* Click **Compare & pull request**.
* Write a brief description and submit the PR.

---

## 📌 Guidelines

* ✅ Make sure your topic is clear and well‑explained.
* ✅ Use proper formatting and indentation.
* ✅ Add relevant tags and choose difficulty wisely.
* ✅ Test your changes locally before submitting.

---

**Let’s learn and grow together! 🌱**
If you have questions, feel free to open an issue or reach out.
