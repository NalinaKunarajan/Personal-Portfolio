# Nalina Kunarajan — Digital Portfolio

## IMPORTANT: Make the profile photo work on GitHub

The original Windows path such as:
C:\Users\HP\OneDrive\Desktop\Nalina Kunarajan Profile photo

will NOT work for a GitHub Pages website because that path exists only on your computer.

1. Take/copy your professional photo.
2. Rename it exactly to `profile.jpg` (PNG also works if you change the HTML path).
3. Put it inside this portfolio folder:
   `assets/profile.jpg`
4. Upload the entire portfolio folder to your GitHub repository.
5. Make sure the final structure is:

   index.html
   style.css
   script.js
   assets/
      profile.jpg

The website uses the relative path `assets/profile.jpg`, so GitHub Pages can load the image correctly.

## Run locally
Double-click `index.html`, or use VS Code Live Server.

## GitHub Pages
Push the files to GitHub, then enable GitHub Pages from the repository's Pages settings and deploy from the main branch/root folder.
