# Sravan Kumar & Sandhya: the family letter

A tap-to-open envelope invitation for close family. Plain HTML, CSS and JS, with no build step.

## Preview

Run `npx serve .` in this folder and open the address it prints.
Add `#open` to the address to skip the envelope while you work.

## Change things

Everything you'd want to edit is in `details.js`: names, events, places, wording, photos and music.

## The envelope picture

`images/envelope.webp` and `images/seal.webp` were cut out of the supplied picture, and `invite.js` holds the flap outline traced from it. To use a different picture, those need redoing, so a straight file swap won't line up.

## Pictures

Everything is in `images/`, already cut out and sized. To add the couple photo, put it in `images/` and set `photo` in `details.js`.

| File | Where it shows |
| --- | --- |
| `seal.webp` | The wax seal on the envelope |

## Publish

Upload the whole folder to any static host. All paths are relative, so it works from a sub-folder.
