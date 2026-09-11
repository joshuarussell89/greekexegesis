# Getting Nous onto your iPad

Nous is a workbench for reading the Scriptures closely in their own languages —
Greek and Hebrew — laying them out as flow diagrams and marking them up with a
Pencil.

There is no App Store build — that needs Xcode, a paid developer account and a
native rewrite. What you can have today is an **installable web app**: a real
icon on your Home Screen, full screen with no Safari chrome, working offline,
with your books and diagrams stored on the device.

Pick one of the three routes below. **Route 1 is the one to use.**

---

## Route 1 — Netlify Drop (recommended, ~2 minutes, no account)

Gives you a permanent URL, proper storage, and offline support.

1. On your Mac, go to **https://app.netlify.com/drop**
2. Drag the whole **`nous-app` folder** onto the page. Don't unzip anything
   into it or drag the files individually — drag the folder itself.
3. Wait a few seconds. You get a URL like
   `https://cheerful-marzipan-7f3a91.netlify.app`
4. On your iPad, open that URL in **Safari**.
5. Tap the **Share** button (square with an arrow), scroll down, tap
   **Add to Home Screen**, then **Add**.
6. Launch it from the Home Screen icon. It now runs full screen and works with
   no internet.

The free tier is fine for this and the site stays up. Anyone with the URL can
reach it, so don't treat it as private. If you want it private, make a free
Netlify account and the same drop page will let you password-protect it.

**Then load the Scriptures once.** On the welcome page, tap **Install the New
Testament** and **Install the Old Testament**. Nous fetches them itself — the
SBL Greek New Testament with MorphGNT parsing, and the Westminster Leningrad
Codex with Open Scriptures morphology — and keeps them on the device from then
on. The Old Testament is roughly four times the size and takes a few minutes.

If you would rather do it by hand, tap **⋯ → Files** and drop in MorphGNT
`.txt` files, the SBLGNT repository `.zip`, or OSIS `.xml` files from
`openscriptures/morphhb`.

---

## Route 2 — GitHub Pages (permanent, needs a free GitHub account)

Better if you want to keep editing it or keep it long-term.

1. Create a new repository on GitHub, e.g. `greekexegesis`.
2. Upload the contents of `nous-app` (the files, not the folder) to the root.
3. **Settings → Pages → Source: Deploy from a branch → main → / (root)** → Save.
4. After a minute the site is at `https://<your-username>.github.io/<repo>/`
5. Open on iPad in Safari → Share → **Add to Home Screen**.

---

## Route 3 — No hosting at all (quickest, but limited)

1. AirDrop `index.html` from your Mac to your iPad.
2. Open it from **Files**. It works and you can diagram straight away.

The catch: files opened this way have no proper web origin, so **Safari may
refuse to store anything**. Your work might not survive closing the tab, and
"Add to Home Screen" is generally unavailable. Fine for a look, not for real
work. If you go this way, use **⋯ → Save a copy as a file…** often.

---

## Keeping your work safe

The app stores everything on the device in IndexedDB. That is durable for an
installed Home Screen app, but it is still one device with no backup.

- **⋯ → Save a copy as a file…** exports a single `nous-workspace.json`
  containing every book and every diagram.
- Dropping that file back onto the app restores everything.
- Put it in iCloud Drive and you can move between iPad and Mac.

Do this before anything you'd hate to lose.

---

## Updating to a newer version

Route 1: drag the new folder onto Netlify Drop again — it replaces the site.
Route 2: replace the files in the repo.

The service worker caches the app, so after an update **force-quit the Home
Screen app and reopen it** (swipe up from the bottom and flick it away). Your
saved books and diagrams are untouched by updates.

---

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | The entire app — all the code, in one file |
| `icons.json` | The symbol library: 4,180 drawings, fetched only if you open it |
| `manifest.webmanifest` | Makes it installable, sets name and icon |
| `sw.js` | Service worker; caches the app so it runs offline |
| `icon-*.png` | Home Screen icons |

`icons.json` has to sit beside `index.html`. Upload the whole folder and it
will.

---

## If you later want a real App Store app

The technical spec covers this. Short version: a
native iPadOS rewrite in SwiftUI + PencilKit, roughly 3–4 months part-time,
needing a Mac with Xcode and a $99/year Apple Developer account. The reason to
do it is ink quality — PencilKit's ~9ms latency, tilt and pressure against
Safari's ~40–80ms. Everything else you already have here.

## Showing somebody how to use it

The first time Nous is opened on a device it offers a short tour: it dims the
page and points at each control in turn with a sentence about what it is for.
It appears once and never again, and it can be skipped at any point.

Both parts can be run again whenever you like, from **⋯**:

- **Show me around** — the tour of the controls.
- **Walk me through a passage** — a worked example. It takes 2 Corinthians
  4:7-12 and diagrams it in front of you: breaking it into propositions,
  highlighting the conjunctions, underlining the finite verbs, naming the
  movements and writing the big idea, saying why at each step. It runs on a
  scratch copy of the passage, so your own work on 2 Corinthians is never
  opened and never altered, and the copy is thrown away at the end.

The worked example needs the Greek New Testament installed. The **Key** button
in the header remains the full reference for every feature.

## The symbols

Ninety-six sit on the rail. Behind **＋ Library**, at the foot of it, are the
other four thousand: scroll or search, tap one to put it on your rail, tap it
again to take it off. Anything you pick is copied onto the rail and syncs with
the rest of your work, so it does not depend on the library afterwards.

Hold any symbol down for a small menu — **pin to the top**, or **hide**. The
pinned strip is yours to arrange: tap **arrange** and drag them into whatever
order you want. That order syncs too.

**The library is a separate five-megabyte file**, `icons.json`, because it is
wanted perhaps once a month and there is no sense carrying it on every launch.
It is fetched the first time you open the sheet and then kept for good — so
open it once while you have a connection, and it works offline from then on.
A new version of the app does not throw it away.

The pictorial symbols come from [game-icons.net](https://game-icons.net), by
Lorc, Delapouite, Skoll, Caro Asercion, Viscious Speed, sbed and thirty others,
used under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). The credit
is in the app under **Key → Symbols**, which is what that licence asks for;
leave it there.

The structural ones — contrast, repetition, therefore, prohibition and so on —
were drawn for Nous.

## Reading the context

A passage no longer sits on a page with nothing either side of it. Above and
below the diagram are **what comes before** and **what comes after**: tap
either and the surrounding verses open as running text, and keep coming as you
scroll, to the ends of the book. It is for reading, not for marking — nothing
in it can be annotated, and nothing in it moves the diagram by a pixel.
