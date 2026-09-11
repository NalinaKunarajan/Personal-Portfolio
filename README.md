# Nalina Kunarajan — GitHub Portfolio

## Photo display FIX

The Windows path `C:\Users\HP\Downloads\Nalina_Kunarajan_GitHub_Portfolio_Final` is a folder on your own PC. GitHub Pages cannot load an image by referencing a Windows `C:\Users\...` path.

This fixed version uses a GitHub-safe relative path:

`./assets/profile.jpg`

The actual profile photo is included in the `assets` folder.

### Final structure

```text
Nalina_Kunarajan_GitHub_Portfolio_FIXED/
├── index.html
├── style.css
├── script.js
└── assets/
    └── profile.jpg
```

### GitHub upload

Upload the files/folders exactly as shown above. Do NOT delete or rename `assets`, and keep the filename exactly `profile.jpg`.

If you are uploading through GitHub's web interface, open the repository, choose **Add file → Upload files**, and upload `index.html`, `style.css`, `script.js`, and the `assets` folder containing `profile.jpg`.

### Important

GitHub Pages paths are case-sensitive. These are different:

- `assets/profile.jpg` ✅
- `assets/Profile.jpg` ❌
- `Assets/profile.jpg` ❌
- `C:\Users\HP\Downloads\...` ❌

The portfolio already contains the animations and responsive styling.
