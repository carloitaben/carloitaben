---
year: evergreen
title: How I'm using Vim
---

I love Vim. This is my short list of keybinds and remaps I actually use and want to remember.

## Better `HJKL`

I keep things close to vanilla, but this is my big exception.

`h` and `l` move horizontally, yet `H` and `L` are mapped to vertical motion. That felt backward. I don't use `J` and `K`, so I swapped them and repurposed `H` and `L` for tabs. Faster than `gt`/`gT` and less left‑hand contortion.

- <kbd>H</kbd> → go to previous tab
- <kbd>J</kbd> → move to bottom of screen
- <kbd>K</kbd> → move to top of screen
- <kbd>L</kbd> → go to next tab

## Diagnostics

I use these when I know there's a warning or error.

- <kbd>]d</kbd> → go to next [d]iagnostic
- <kbd>[d</kbd> → go to previous [d]iagnostic

## Git

For quick edits, [Zed's built‑in git motions](https://zed.dev/docs/vim#git) are great.

- <kbd>]c</kbd> → go to next git [c]hange
- <kbd>[c</kbd> → go to previous git [c]hange
- <kbd>do</kbd> → expand diff hunk ([d]iff [o]pen)
- <kbd>dO</kbd> → toggle staged
- <kbd>dp</kbd> → restore change ([d]iff [p]revious)

## Tasks

I keep two [Zed tasks](https://zed.dev/docs/tasks) bound.

- <kbd>⌘+?</kbd> → spawn [`opencode`](https://opencode.ai/)
- <kbd>⌘+g</kbd> → spawn [`lazygit`](https://github.com/jesseduffield/lazygit)

## Panes

I use native Vim window commands for docks and panes, and mirror a subset in the terminal dock.

- <kbd>ctrl-wh</kbd> → move cursor to the left window
- <kbd>ctrl-wj</kbd> → move cursor to the window below
- <kbd>ctrl-wk</kbd> → move cursor to the window above
- <kbd>ctrl-wl</kbd> → move cursor to the right window
- <kbd>ctrl-wq</kbd> → [q]uit window
- <kbd>ctrl-ws</kbd> → [s]plit window
- <kbd>ctrl-wv</kbd> → split window [v]ertically

## Visual mode

I like staying in Visual Mode while indenting or moving selections.

- <kbd>></kbd> → indent selection
- <kbd><</kbd> → outdent selection
- <kbd>=</kbd> → autoindent selection
- <kbd>J</kbd> → move selection down
- <kbd>K</kbd> → move selection up

I used to remap <kbd>p</kbd> before learning there's already [<kbd>P</kbd>](https://neovim.io/doc/user/change.html#v_P):

- <kbd>p</kbd> → [p]aste
- <kbd>P</kbd> → [p]aste without overriding clipboard

## Multicursors

Built‑in Zed multicursor bindings. Still experimenting, but I like how they keep me in the home row.

- <kbd>ga</kbd> → select [a]ll occurrences of the current selection
- <kbd>gl</kbd> → select the next occurrence of the current selection
- <kbd>gL</kbd> → select the previous occurrence of the current selection
- <kbd>g></kbd> → replace the latest selection with the next occurrence
- <kbd>g<</kbd> → replace the latest selection with the previous occurrence

They work with counts, so I can do <kbd>3gl</kbd>.

## Other things I like

These are the small daily drivers, grouped by category.

Navigation:

- <kbd>ctrl-o</kbd> → navigates back in history
- <kbd>ctrl-i</kbd> → navigates forward in history
- <kbd>g,</kbd> → navigates to an older position in the change list
- <kbd>g;</kbd> → navigates to an newer position in the change list
- <kbd>go</kbd> → faster than <kbd>gg</kbd> to navigate to the top of the file
- <kbd>gh</kbd> → faster than <kbd>⌘K ⌘I</kbd> to show the help tooltip

LSP:

- <kbd>gd</kbd> → go to definition
- <kbd>gr</kbd> → go to references

Code actions:

- <kbd>Space</kbd> + <kbd>f</kbd> → [f]ormat code

When reading documentation:

- <kbd>gx</kbd> → open URL

When writing documentation:

- <kbd>gq</kbd> → makes my JSDoc paragraphs consistent

---

That's the whole setup: mostly vanilla, with a few fast tweaks. If you have a favorite Vim tweak, let me know.
