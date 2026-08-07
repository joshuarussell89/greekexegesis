# Keeping the iPad and the Mac in step

Nous can keep your work the same on every device by storing it in a **private**
GitHub repository. Not the public one your app is served from — a second,
private one that only you can read.

You do the setup once, on a computer. It takes about five minutes.

---

## 1. Make the private repository

Go to **github.com/new**.

- **Repository name:** `nous-work`
- **Visibility:** **Private** — this matters. Your sermon preparation should not
  be readable by the world.
- Leave everything else alone. You don't need a README.

Click **Create repository**. It will look empty. That's right — Nous fills it.

## 2. Make a token

A token is a long password that lets Nous write to that one repository and
nothing else.

1. Click your avatar, top right → **Settings**
2. Down the left-hand side, at the very bottom → **Developer settings**
3. **Personal access tokens** → **Fine-grained tokens** → **Generate new token**
4. Fill it in:
   - **Token name:** `Nous`
   - **Expiration:** a year is reasonable. Nous will tell you when it lapses,
     and your work carries on being saved on the device in the meantime.
   - **Repository access:** choose **Only select repositories**, then pick
     **nous-work**
   - **Permissions → Repository permissions:** find **Contents** and set it to
     **Read and write**. Leave every other permission alone.
5. **Generate token**, then copy it. GitHub shows it once and never again.

If you lose it, delete it on that page and make another. Nothing breaks.

## 3. Turn it on — Mac first

In Nous, open the **⋮** menu → **Sync between devices**.

- **Repository:** `yourname/nous-work` — your GitHub username, then the
  repository name
- **Token:** paste it
- Tick **Turn it on**

It will check the repository, tell you if it isn't private, and then send your
work up. Wait for it to say **In step**.

## 4. Then the iPad

Same three fields, same token. Tick **Turn it on** and it will pull down
everything from the Mac.

Do it in this order the first time. After that the order never matters.

---

## What happens from then on

- Work is sent up about twenty seconds after you stop, and when you leave the
  app. Not on every stroke — that would fill the repository with thousands of
  commits.
- It pulls when you open Nous and when you come back to it.
- The green dot in the header means everything is in step. Amber means it's
  working, red means something needs your attention — hover it, or look in the
  menu for the reason in plain words.

## When you've worked on both devices

Nous combines them rather than picking a winner. A mark you made on the iPad and
a note you made on the Mac both survive, because your work is filed against
individual words — `2:7#3` is the fourth word of 2 Corinthians 2:7 no matter
which device you were sitting at.

The only case where something has to give is when **both devices changed the
very same word** while apart. There the more recent piece of work wins, and only
for that word. Everything else on both sides is kept.

Rubbing something out counts as work, so an erasure travels too rather than
being quietly undone by the other device.

## What is and isn't sent

**Sent:** your diagrams — marks, highlights, notes, ink, arrows, section
breaks, split lines, moved words. One file per book, at `nous/nt-2co.json` and
so on.

**Not sent:** the Greek text itself (each device installs that from the SBLGNT
repository), your ESV key, your symbol-generation key, and your tool and colour
preferences. Those stay on the device they were typed into.

## Things worth knowing

- **The commit history is a free undo of last resort.** If something ever goes
  badly wrong, every previous state of every book is on GitHub, timestamped.
  Open `nous-work` → the file → **History**.
- **Offline is fine.** Work on the iPad on a train; it goes up when you're back
  on a connection. Nothing is lost and nothing is blocked.
- **If you lose a device**, delete the token on GitHub. That device can no
  longer read or write your work.
- **Nous never stores your token anywhere but the device you typed it on.** It
  isn't in the project file you can export, and it isn't in the repository.
