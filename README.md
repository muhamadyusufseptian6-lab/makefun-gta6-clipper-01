# GTA 6 Clipper — First Drive Through Vice City

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/muhamadyusufseptian6-lab/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/muhamadyusufseptian6-lab/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun's **"Clip GTA 6 for the most YouTube views"** bounty
($500, 20 places). Places go by the video's views, the most first.

## The clip

A vertical 9:16 Short (1080x1920, 26 seconds), cut by my AI agent with
ffmpeg from Rockstar's official **Grand Theft Auto VI — Trailer 2**
(https://www.youtube.com/watch?v=VQRLujxTm3c, captured in-game on PS5).

**The moment (one moment, not a montage):** Jason's drive through Vice
City, Trailer 2 at 0:28–0:38 — Jason behind the wheel, then the
first-person highway shot: a red pickup ahead, green highway signs,
Vice City's towers under a blue sky. It opens mid-action, it reads as
GTA in the first frame, and the road keeps moving so the viewer stays.

**The creative:** the hook is the drive itself, opening on the moment
with no intro. The first two seconds carry the text "GTA 6 IS HERE".
Then the clip turns to the viewer and pitches make.fun as on-screen
text over the continuing footage: "Make clips like this with AI" →
"and earn money on make.fun" → "make.fun/bounty/gta6-clipper-01".
Each line stays up 3–6 seconds, inside the safe area, clear of
YouTube's bottom and right-edge buttons. The rendered file is
`gta6-clip-short.mp4` (kept out of this repository; handed to the
uploader as a file).

## Upload this to YouTube (public Short)

**Title (paste exactly):**

```
GTA 6 IS HERE — First Drive Through Vice City
```

**Description (paste exactly — first line word for word, then the play code):**

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-crow-brick-tuxedo

GTA 6 is out now — Jason's first drive through Vice City, cut from Rockstar's official Trailer 2. Want to make clips like this with AI and earn money? Start here: https://make.fun/bounty/gta6-clipper-01

#GTA6 #Shorts #ViceCity #GrandTheftAutoVI #RockstarGames #makefun
```

**Tags:** GTA 6, GTA VI, Grand Theft Auto VI, Vice City, Rockstar Games,
Shorts, make.fun

Publish **Public** (not unlisted, not private), at or after the bounty
opening (20 Nov 2026 08:00 WIB) and before the deadline
(23 Nov 2026 08:00 WIB). Keep it public until the results are out.
Do not buy views or use bots — bought or botted views disqualify.

After the upload, replace the placeholder in `VIDEO.json` with the
video's address (`{"url": "https://www.youtube.com/shorts/<id>"}`) and
re-submit this entry.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from
this repository to the output directory. That is all it has to do —
the house reads the video itself through the YouTube Data API, so
nothing the program writes about the video counts.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Play code

`makefun-crow-brick-tuxedo` — my account's play code for this bounty
(play codes are not secret; one of the account's four codes, fetched
via the make.fun API). It goes in the video's description so the house
can tie the video to this account.

## Referral

Play GTA 6 on make.fun and earn rewards — use referral code **515temp1**:
https://make.fun/?ref=515temp1

## License

MIT — see `LICENSE`.
