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

## Starting again on something

Under **⋯** there is one way to clear your work, at three scopes: **this
passage**, **this book**, or **every book**. It removes the lines, ink,
colours, symbols, arrows, section breaks, notes and your own English — never
the text itself.

Nothing it removes is actually thrown away. A copy goes into a bin that keeps
ten days of them: **What I have removed…** lists them with what each one held,
and **Bring it back** puts it where it was. A restore only ever adds, so
anything you have done since is kept. The bin syncs like everything else, so a
slip on the iPad can be undone on the Mac.

This replaced four separate buttons — reset the line structure, clear the ink,
remove the section breaks, forget everything — each of which destroyed a
different slice of the work with no way back.

## Keeping your work safe

The app stores everything on the device in IndexedDB. That is durable for an
installed Home Screen app, but it is still one device with no backup.

### If the two devices fall out of step

The dot beside **Sync** in the header tells the truth about it. Green means
everything on this device is also on the other one. **Red means it is not** —
either a push was refused or the repository answered with an out-of-date copy —
and the line under **⋯ → Sync** says which book and why. Nous keeps trying on
its own; leaving the app open for a few seconds is usually all it needs.

It used to say "Everything matches" in both of those cases, which is how a
morning's work could sit on one device looking as though it were on both.

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

One group behaves differently on purpose: **Above the word** — two little
arrows, a small **of**, and a small **to/for**. These are set small and solid in
the gap *above* the word instead of lying over it, the way you would pencil a
note over a line of text: an arrow back to what a word governs, **of** over a
genitive, **to/for** over a dative.

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

## Writing your own English

Tap a **verse number** in the margin. The whole verse is laid out above a
field; say it in your own words and it appears out to the right of the page,
level with that verse. **Enter** takes you to the next verse, so you can work
straight down the passage. Dictation and Scribble both work, as they do in a
note.

Read down the right-hand side and you have the passage in your own English —
which is the point of writing one. A verse number you have translated is
underlined; tapping your English opens it again to reword.

**Select a phrase and write about it.** Drag across a run of words inside one
verse and the inspector shows the phrase with somewhere to write a note about
it. There is no parsing — a phrase has no lemma and no morphology — so that is
put away. Every word under the note is marked, not just the first.

This is only offered for a run that really is contiguous and inside one verse.
A lemma lit up across the passage, or a box dragged over words from three
different lines, has no phrase to be a note about, and filing one against a span
you never chose would be worse than not offering it.

The note is anchored to the two words at its ends, so re-splitting the lines
under it leaves it exactly where it was. It syncs, merges, goes in the bin,
turns up in the sermon outline and appears in the Sermon Builder as a card — the
same as a note on a word or a verse.

**Tapping a verse number offers two things.** *Your English* for the verse, and
a *Note* about it — two tabs, because neither is obviously the one you meant.
Each keeps its own text, and a small dot on a tab says it already has something
on it. On the page a verse number is underlined when it has English and carries
a dot when it has a note, so one with both says so.

In the translation, Enter moves on to the next verse: the moment a translation
takes paragraphs it has stopped being a translation and started being a
manuscript. A note is allowed paragraphs, so there Enter is just Enter. Reopen a
verse that has only one of the two and it opens on that one.

It disturbs nothing. Not a word of the Greek moves to make room: the text wraps
where it always did and only the page gets wider. It goes into the sermon
outline under each heading, above the diagram — the English is the passage, the
diagram is the working.

## The Sermon Builder

A second tab on every passage. The exegesis tab is the working; this one is the
sermon.

**The spine**, down the left, is the sermon in the order it runs. The **big
idea** and the **aim** are pinned at its head — the big idea has moved off the
exegesis page, because it is not exegesis — and under them the **introduction**,
your **headings**, and the **conclusion**. The headings arrive on their own from
the section breaks you have already made, in the order they stand in the text,
and rename themselves when you rename them there. They cannot be edited from
this tab: the structure of the passage belongs to the passage.

**Everything else is a card.** Tap ＋ a card, or take one out of the tray at the
foot. A card holds as much as you write on it and grows to fit. Tap its kind to
cycle it — idea, quote, person, illustration, question, text — which is a hint,
never a slot you must fill.

Pull the **side** to set how wide a card is and let the writing find its own
height — a card made wider needs fewer lines, and holding its old height would
leave a band of blank paper under the last word. Pull the **corner** to set
both. The height you
drag it to is a **minimum**, never a maximum: write past it and the card grows
anyway, because a card that hides the end of a sentence is worse than a card
that is the wrong size. Tap the corner without dragging and it goes back to
fitting its writing. Attached to a heading it takes the width of the spine, and
remembers its own for when you pull it off again.

**A picture and a link go on a card**, beside whatever it says — a quote with
the page it came from, an illustration with the photograph. The two small
buttons in a card's header do each, or **drag a JPEG straight onto the card**.
Drop one on the bare board and it arrives as a card of its own, where you
dropped it; drag an address out of a browser's address bar and it does the same.

Pictures are re-drawn at a size that suits a card before they are stored,
because the whole document goes to your repository on every sync and a
four-megabyte photograph would be four megabytes of sync for something shown two
hundred pixels wide. A PNG stays a PNG; anything else becomes a JPEG. Tap a
picture to take it off.

Nous cannot show a **PDF** — rendering one needs a PDF engine, and Nous is a
single file that has to work on a plane. Export the page you want as a PNG or
JPEG, or put a link to the file on the card.

**Addresses you write are live.** A card shows what is written on it as ordinary
text with every address in it tappable, and turns into a writing box the moment
you tap it. A bare host counts as an address only when there is a path after it,
so `ccel.org/calvin` is a link and `Rom. 8` is not. The first address on a card
becomes the card's own link, unless you have set one yourself.

**A link to a picture or a video shows one.** Nous has no server and cannot
fetch a page to read its preview tags, so a preview is only offered where the
picture can be worked out from the address itself: an address that *is* a
picture, and YouTube or Vimeo, whose thumbnails have a predictable name.
Anything else gets the link and no pretence of a preview. Previews come off the
network, so they are blank offline.

**A note card says what it is anchored to**: *Vocabulary* for a note on a word,
*Phrase* for one on a run of words, *Verse* for one on a whole verse. That is a
fact about the note rather than a label you pick, so tapping it does not change
it.

**A note you wrote on a word or a verse is already a card.** It appears on the board on its
own, saying which word it was written on. It is not a copy: writing on the card
writes the note, writing the note writes the card, and removing the card removes
the note from the word or verse as well. A note out in the context belongs to that
passage, not this one, so it stays where it is.

A card is in exactly one of two states. **Loose**, lying where you dropped it,
still being played with. Or **attached**, dragged onto a slot on the spine,
which means it belongs to that part of the sermon. That is the whole of the
structure: where you put a card is the only thing that decides what it means.
Delete a heading in the exegesis and anything attached to it comes back to the
board rather than going with it.

**The tray** holds what the exegesis has to offer — any verse you have
translated, any link or cross-reference you have drawn, and the people who will
actually be in the room. Nothing is poured in; you drag out what you want,
because most of a marked-up passage is working rather than material.

**Ask me something** deals one question from one of the seven lenses: salvation
history, Christ, the non-Christian, the Christian, the local church, the public
square, worldview. Answer it on the card or flick it away and deal another. The
lens is marked on the card for one reason only — so **What haven't I touched?**
can tell you which lenses have nothing answered against them. It says so in a
line across the top of the board that stays until you put it away, because it is
a list you work through rather than a notice you acknowledge: untouched lenses,
headings with nothing attached, no illustration, no aim. That is the grid's
real work, coverage, without a cell to fill. It drifts towards whatever you have
neglected without ever saying so.

**The outline comes out of this tab now**, not from the settings panel. Big
idea, aim, introduction, each heading with your English, its diagram and
whatever you attached to it, then the conclusion. Loose cards do not go in —
that is what loose means. On the way out it says in one line what it notices:
untouched lenses, headings with nothing attached, no illustration, no aim. It
never blocks and never nags.

**Hand this to Claude…** copies the board out as text. Nous has no AI in it,
which is why it works on a plane and costs nothing to run, so the thinking
happens where your congregation record already lives: paste it into a
conversation, paste the cards that come back into the lower box, and they land
on the board loose, for you to place.

Everything here lives in the book's own document, so it syncs between your
devices, merges card by card, undoes, and goes in the ten-day bin exactly as
your ink does.

## Working on an English passage

**Settings → Paste a passage in English.** Give it a name, say which verse it
starts at, paste the text, and it becomes a book like any other — it appears in
the book menu under *Pasted in English*, in the passage picker, and it is kept
with the rest of your corpus so it is still there next time.

Then work on it exactly as you would the Greek: break and indent the lines,
mark and highlight the words, draw, lay down symbols, run arrows between them,
make section breaks, write notes on a word or a phrase or a verse, build the
sermon in the Builder, and export the Word document at the end.

**Verse numbers.** Paste the text with its numbers in it and they are read as
verse markers — but only when the number is the one that comes *next*. "To the
12 tribes" does not start verse 12. A number that carries its chapter, like
`8:1`, is never a guess and always starts a verse. Text with no numbers at all
is one verse, beginning where you said.

**What it has not got, it does not pretend to have.** There is no morphology and
no lexicon, so the inspector shows no parsing rows and no Accordance buttons.
Highlighting every occurrence of a word, and counting them, still work — in
English those are the useful ones — because a word's "lemma" there is simply the
word itself in lower case with its punctuation off.

## Choosing a passage

The box at the top of the window is a button, not a field. Tap it and choose:
book, chapter, the verse it starts at, and the verse it ends at. Leave the end
alone and you get the whole chapter; tap one verse and nothing else and you get
that verse. It opens on the book and chapter you are already in, so the next
few verses are two taps away.

Nothing is typed and nothing is spelled. The whole canon is listed, and the
books you have not installed are shown greyed out rather than left out — so a
missing book reads as a book to install, not as an app that has not heard of
Habakkuk.

## Lines, and indenting them

**A line is never folded.** A line is a clause, and a clause dropped onto a
second row looks like two lines when it is one — which is the single thing a
flow diagram exists to show. So a line too long for the page is given its own
width and the sheet grows to hold it, rather than losing its last word
underneath itself.

Drag the grip beside a line to step it right. It keeps its full width wherever
it starts. Everything that lives to the right of the text — your English, the
rules in the margin — moves out with it, and it all comes back when the indent
does.

There is one limit. Past about two and a half times the ordinary width a line
does wrap after all: the ink layer has a fixed number of pixels spread over the
area of the sheet, and a page six thousand wide would cost resolution
everywhere, including on the short lines. Split such a line with **Split/Join**
and both halves fit comfortably.

Hebrew does the same thing mirrored. It runs right to left from a right-hand
edge into a left margin that cannot move, so a long Hebrew line is given its
room by pushing that right-hand edge further out — every line shifts over and
the sheet grows on the right.

## Tidying up after the Pencil

**Settings → Drawing → Tidy up.** Off by default.

With it on, a highlight scribbled over some words becomes a clean highlight
*of* those words — the same thing you would get by selecting them and tapping a
colour, which means it travels when the lines are re-flowed and shows up in an
export. A stroke that crosses no words is left as ink.

Freehand pen lines are smoothed as you lift the Pencil: the tremor is averaged
out, the ends stay exactly where you put them, and the pressure is untouched.
This is smoothing, **not handwriting recognition** — your writing stays your
writing, just steadier. Turning handwriting into type is iPadOS's Scribble,
which already works in every box Nous asks you to write in.

## Drawing on the board

The Sermon Builder's board takes the same instruments as the page: the pen and
its nibs, straight lines and their weights, boxes, ovals, symbols, the
highlighter, the eraser. Pick one up and the board becomes something to draw on;
pick up **Move/Select** and it is a board of cards again.

Ink is anchored the way it is on the page. There, a stroke belongs to a word and
keeps its points relative to it, which is what lets you re-split the lines
without the ink sliding off. Here, **a card is the word**: a stroke drawn near
one belongs to it and moves when you move it. Ink drawn well away from
everything is anchored to nothing and stays where you put it.

It is the board's ink, not the page's — two different surfaces with two
different sets of marks, drawn by the same code. It syncs, merges stroke by
stroke, and goes in the ten-day bin like everything else.

## Zooming

Pinch to make the **page** bigger: the sheet of paper grows and the header, the
colour rail and the symbols stay exactly where they are and exactly the size
they were.

The browser's own pinch — the one that magnifies the whole window, rails and
all — is refused. It used to depend on how Nous happened to be launched: the
`user-scalable=no` in the page is ignored by Safari and honoured only in an
installed app, so in a browser tab a pinch could magnify the lot. It is now
turned down outright, and a pinch that starts in the margin beside the paper
zooms the page like any other.

## Colour

One row of colours, not two. Whether a colour goes down at full strength or
softened is the nib's business: pick the **Highlighter** from the Pen menu, or
select some words and tap a colour. The swatches preview which you will get.

**Who the colour is for.** With words selected, a colour paints them. The
moment you reach for a different instrument — Line, Box, Pen, a symbol — a
colour is for that instrument instead, and the words you had selected are left
exactly as you coloured them. Touch a word again and it is yours to colour
again.

The selection itself is not thrown away when you change tools, because it is
still doing a job: tap a word inside it with the Line tool and the whole
selection is underlined at once. What colour that line should be is a different
question from which words it goes under.

## Links and cross-references

Both open a sheet with a field big enough to write in with a Pencil, and a
**Choose…** button beside it: three scrollable columns — book, chapter, verse.
The sheet fills the bottom half of the screen, which is where your hand is.
What the picker offers comes out of the books actually installed on this
device, so it can never offer you Philippians 5. A book you have not installed
is still in the list; you just type the numbers yourself. Whatever you pick is
written into the field, and you can edit it by hand afterwards.

**＋ a second reference** lets one link or box point at two places. Both are
drawn on the page, and tapping it asks which one you meant.

## Reading the context

A faint line sits in the margin above the first verse and below the last,
offering **the rest of the chapter** or **the whole book**. Tap one and those
verses are laid out around your passage. They are ordinary text — you can
split, mark and translate them — but they are set back a little on the page,
so it is always plain which words the sermon is actually on. **↩ back to…**
returns to the passage alone. A book too big for one page is opened as far as
it will go, evenly on both sides, and says so.

**This does not change what you are preaching on.** The passage is what you
chose, and only the passage button, the book and chapter menus, or following a
link will change it. The big idea stays filed under it, the
reference box keeps saying it, "remove my work on this passage" still means it,
and the sermon outline exports it and not the context.
