# Screenshots Guide for Dental Hygiene Test Bank User Manual

## Screenshot File Names

Place your screenshot files in the `screenshots/` folder with these exact names:

1. `1.Terms_of_Use.png`
2. `2.Main_Page.png`
3. `3.Test_Lesson_Board_Exam.png`
4. `4.Test_Screen.png`
5. `5.Pause.png`
6. `6.Flag.png`
7. `7.Save_Progress.png`
8. `8.Test_Completion.png`
9. `9.Study_Mode.png`
10. `10.Progress_History.png`

## File Format
- **Recommended format:** PNG (better quality for screenshots)
- **Alternative format:** JPG (smaller file size)
- **Recommended width:** 1200-1600 pixels (will be automatically resized for thumbnails)

## How It Works

### Thumbnail Display
- Screenshots are displayed as **thumbnails** at max-width 500px
- Hover effect: slight zoom and shadow
- Responsive: scales to 100% width on mobile devices

### Lightbox (Full Size)
When users click a thumbnail:
- **Dark overlay** appears over the page
- **Full-size image** displays in the center
- **Image caption** shows at the bottom
- **Close button (×)** in top-right corner
- **Click anywhere** outside image to close
- **Press ESC key** to close
- Image cannot be larger than 95% of viewport

## Features Included

✅ **Smooth animations** - fade in overlay, zoom in image
✅ **Mobile responsive** - works on all device sizes
✅ **Keyboard support** - ESC key to close
✅ **Accessibility** - proper alt text and ARIA labels
✅ **Click prevention** - clicking image doesn't close modal
✅ **Body scroll lock** - prevents background scrolling when modal is open

## Testing Checklist

After adding screenshots:

- [ ] All 10 screenshot files are in the `screenshots/` folder
- [ ] File names match exactly (including underscores and .png extension)
- [ ] Images display as small thumbnails on page load
- [ ] Clicking thumbnail opens full-size image in modal
- [ ] Modal has dark background overlay
- [ ] Close button (×) works
- [ ] Clicking outside image closes modal
- [ ] ESC key closes modal
- [ ] Images look good on mobile devices
- [ ] Same functionality works in both English and French pages

## Troubleshooting

**Image doesn't display:**
- Check file name spelling exactly matches (case-sensitive)
- Verify file is in `screenshots/` folder
- Check file format is PNG or JPG
- Clear browser cache and refresh

**Image is blurry:**
- Use higher resolution source image
- Minimum recommended: 1200px width
- Save as PNG for better quality

**Lightbox doesn't open:**
- Check browser console for JavaScript errors
- Verify `lightbox.js` file is in the user-manual folder
- Make sure JavaScript is enabled in browser

## File Structure

```
/education/dental-hygiene-testbank/user-manual/
├── screenshots/
│   ├── 1.Terms_of_Use.png
│   ├── 2.Main_Page.png
│   ├── 3.Test_Lesson_Board_Exam.png
│   ├── 4.Test_Screen.png
│   ├── 5.Pause.png
│   ├── 6.Flag.png
│   ├── 7.Save_Progress.png
│   ├── 8.Test_Completion.png
│   ├── 9.Study_Mode.png
│   └── 10.Progress_History.png
├── lightbox.css
├── lightbox.js
├── index.html
├── terms-of-use.html
└── (other manual pages...)
```

## CSS Customization (Optional)

If you want to adjust the thumbnail size, edit `lightbox.css`:

```css
.screenshot-thumb {
    max-width: 500px;  /* Change this value */
    /* ... */
}
```

For different thumbnail sizes per page, add inline style:
```html
<img src="screenshots/1.Terms_of_Use.png" style="max-width: 300px;">
```
