
# 🎓 ProfSwipe
A Tinder-style professor rating SPA — swipe right to approve, swipe left to skip. Built with React, Firebase, and a smooth DaisyUI interface.

## Team Members
Rich-Ann Campbell
Makayla Hardware
Sara-Lee Brown 

## Live Link
https://professor-swipe.vercel.app/

## About the App
ProfSwipe is a single-page application (SPA) that lets students swipe through professor cards in a Tinder-style interface. Guests can browse a limited preview of professors, while authenticated users unlock full access to filter, sort, like/dislike, and save professors to a watchlist.

# Tech Stack 

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 (via Vite) |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Authentication | Firebase Auth |
| Database | Firebase Firestore |
| Data Source | `public/professors.json` |
| Routing | React Router v6 |
| Deployment | Vercel |


## 📁 Project Structure

```
## 📁 Project Structure
```
profswipe/
├── public/
│   └── professors.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── FilterBar.jsx
│   │   ├── SwipeStack.jsx
│   │   ├── ProfCard.jsx
│   │   ├── SavedDrawer.jsx
│   │   ├── ReviewedList.jsx
│   │   ├── Loader.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                  ← ⚠️ DO NOT commit — add to .gitignore
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

```
## 📄 Pages

### 🏠 Home / Landing Page
The default landing page. Guests see a limited preview of 3 professor cards
and a prompt to log in for full access. Authenticated users see all professors.

### 🔐 Signup Page
New users can create an account via:
- Username & Password (with validation)
- Google OAuth (via Firebase)

### 🔑 Login Page
Returning users log in with email/password or Google. Includes a
show/hide password toggle and a forgot password option.

### 🃏 Swipe Page (Home)
The main experience, available to all users on `/`:
- Guests: limited to 3 professor cards, no interactions
- Authenticated users: full swipe stack, like/dislike, save to watchlist,
  filter & sort by department/rating, access to Saved Drawer and Reviewed List

### ❌ Error Pages
| Page | Trigger |
|---|---|
| **404 – Not Found** | User navigates to an invalid URL (e.g. `/logging` instead of `/login`) |
| **401 – Unauthorized** | Guest attempts to access a protected route |


## 🔒 Guest vs. Authenticated Users

| Feature | Guest | Authenticated User |
|---|---|---|
| View limited professor cards | ✅ | ✅ |
| View all professors | ❌ | ✅ |
| Like / Dislike | ❌ | ✅ |
| Save to Watchlist | ❌ | ✅ |
| Filter & Sort | ❌ | ✅ |
| Access Dashboard | ❌ | ✅ |
| Download / Export | ❌ | ✅ |
