# Elias Mithamo — Portfolio

A simple personal profile site: plain HTML, CSS, and JavaScript — no build tools,
no frameworks. That means you can open `index.html` and read every line.

## Files

- `index.html` — the content and structure of the page
- `style.css` — all the colors, fonts, spacing, layout
- `script.js` — the typing animation, mobile menu, and date

## 1. Preview it on your computer first

You don't need to install anything special. Just:

1. Find the folder with these three files.
2. Double-click `index.html`.
3. It opens in your browser — that's your site, running locally.

## 2. Put it on GitHub

1. Go to [github.com](https://github.com) and create a free account if you don't have one.
2. Click the **+** icon (top right) → **New repository**.
3. Name it something like `portfolio`. Keep it **Public**. Don't add a README (you already have one).
4. Click **Create repository**.
5. On the next page, GitHub shows commands under "…or push an existing repository from the command line." Open a terminal *inside this project folder* and run:

   ```
   git init
   git add .
   git commit -m "First version of my portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your actual GitHub username. If you've never used
   `git` before, install it first from [git-scm.com](https://git-scm.com), then
   you may be asked to sign in to GitHub the first time you push.

6. Refresh your GitHub repository page — you should see your three files there.

## 3. Deploy it with Vercel

1. Go to [vercel.com](https://vercel.com) and sign up using your **GitHub account**
   (this makes step 2 automatic).
2. Click **Add New… → Project**.
3. Vercel will show your GitHub repositories — find `portfolio` and click **Import**.
4. It's a static site, so you don't need to change any settings. Just click **Deploy**.
5. After a few seconds, Vercel gives you a live link like
   `https://portfolio-yourname.vercel.app` — that's your portfolio, live on the internet.

## 4. Making changes later

Whenever you want to update something (like adding a project or fixing a typo):

1. Edit the file (e.g. `index.html`) and save it.
2. In the terminal, inside the project folder, run:

   ```
   git add .
   git commit -m "Describe what you changed"
   git push
   ```

3. Vercel automatically redeploys within a minute or two — no extra steps needed.

## Things you may want to personalize later

- **Education section**: your original resume draft had placeholder text like
  "(Insert University Name)". It's left out of this site for now so nothing
  fake shows up. Once you have real details, tell me (or add a new `<section>`
  in `index.html` styled like the others) and it can go back in.
- **Photo**: right now the hero shows a placeholder circle with your initials
  ("EM"). To swap in a real photo: save your photo into this folder (e.g.
  `profile.jpg`), then in `index.html` find the line
  `<div class="hero__avatar" aria-hidden="true">EM</div>` and replace it with
  `<img class="hero__avatar" src="profile.jpg" alt="Elias Mithamo" />`.
- **Certifications**: your draft resume listed these as optional/placeholder
  too — add real ones once you have them.
