FAVICON DEPLOYMENT - CRITICAL STEPS
====================================

PROBLEM: Icons don't show after deploying to subdirectory
SOLUTION: Follow these exact steps

STEP 1: Copy Files to Your Project
-----------------------------------
Copy ALL files from this 'public/' folder to your React project's 'public/' directory:

Your-Project/
└── public/
    ├── index.html          ← REPLACE with this one
    ├── favicon.svg         ← ADD this file
    ├── favicon-16x16.svg   ← ADD this file
    ├── favicon-32x32.svg   ← ADD this file
    ├── apple-touch-icon.svg ← ADD this file
    └── manifest.json       ← ADD this file

STEP 2: Verify package.json
----------------------------
Open package.json and confirm this line exists:
"homepage": "/education/testbank"

STEP 3: Build
-------------
npm run build

STEP 4: Verify Build Output
----------------------------
Check that build/ folder contains:
- build/favicon.svg
- build/favicon-16x16.svg
- build/favicon-32x32.svg
- build/apple-touch-icon.svg
- build/manifest.json
- build/index.html

STEP 5: Open build/index.html
------------------------------
Verify paths look like this:
<link rel="icon" href="/education/testbank/favicon.svg" />

STEP 6: Upload to Server
-------------------------
Upload ENTIRE build/ folder contents to:
https://www.m2eacircle.com/education/testbank/

STEP 7: Test
------------
Visit these URLs directly (should show icons):
https://www.m2eacircle.com/education/testbank/favicon.svg
https://www.m2eacircle.com/education/testbank/manifest.json

STEP 8: Clear Cache
--------------------
Hard refresh your browser: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

TROUBLESHOOTING
===============

Issue: Icons still not showing
Solution 1: Check DevTools Network tab - are favicon files loading from correct URLs?
Solution 2: Verify files are at https://www.m2eacircle.com/education/testbank/favicon.svg
Solution 3: Add to .htaccess in testbank folder:
    AddType image/svg+xml .svg
Solution 4: Clear all browser cache and cookies

Issue: 404 errors for favicon
Solution: Verify you uploaded ALL files from build/ folder, not just some

Issue: Icons show locally but not on server
Solution: Check file permissions on server (should be 644 for files, 755 for folders)

CHECKLIST
=========
□ Copied all files to public/ folder in React project
□ package.json has correct homepage setting
□ Ran npm run build successfully
□ Verified build/index.html has correct paths
□ Uploaded entire build/ folder to server
□ Can access favicon.svg directly in browser
□ Cleared browser cache
□ Icons now appear in bookmarks/tabs

If you followed all steps and it still doesn't work:
1. Check browser console for errors (F12)
2. Verify server MIME types for .svg files
3. Test in incognito/private mode
4. Try different browser

SUCCESS INDICATORS
==================
✓ Browser tab shows tooth icon
✓ Bookmarks show tooth icon
✓ iOS home screen shows tooth icon (when added)
✓ No 404 errors in console for favicon files

Need help? Check that:
- Files are in public/ before building
- Build process completed without errors
- All files uploaded to correct server location
- URLs are accessible directly in browser
