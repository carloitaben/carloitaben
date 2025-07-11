---
year: evergreen
slug: vim
title: How I'm using Vim
---

Vim is incredible. It's made coding a lot more fun for me.

This post is a collection of tricks I rely on, plus some of my most-used remaps. Both to help me remember them and hopefully help someone else too.

## Better `HJKL`

I try to keep my setup close to vanilla. I don't usually remap alphanumeric keys, but this is the one big exception.

The <kbd>h</kbd> and <kbd>l</kbd> keys are horizontal movements, but <kbd>H</kbd> and <kbd>L</kbd> are mapped to vertical motion. That always felt backward to me. I don't really use <kbd>J</kbd> and <kbd>K</kbd>, so I swapped them out.

This also frees up <kbd>H</kbd> and <kbd>L</kbd> to move between tabs. It's way faster than using <kbd>gt</kbd> and <kbd>gT</kbd>, which are awkwardly left-hand-heavy.

- <kbd>H</kbd> → previous tab
- <kbd>J</kbd> → move to bottom of screen
- <kbd>K</kbd> → move to top of screen
- <kbd>L</kbd> → next tab

```json
{
  "vim.normalModeKeyBindingsNonRecursive": [
    { "before": ["J"], "after": ["L"] },
    { "before": ["K"], "after": ["H"] },
    { "before": ["H"], "after": ["g", "T"] },
    { "before": ["L"], "after": ["g", "t"] }
  ]
}
```

## Problems

I copied this from [Dax](https://github.com/thdxr), and I love it. (I love Dax, too.)

- <kbd>Ctrl</kbd>+<kbd>j</kbd> → next problem
- <kbd>Ctrl</kbd>+<kbd>k</kbd> → previous problem

Makes it easy to fly through warnings and errors.

```json
{
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<C-k>"],
      "commands": ["editor.action.marker.prev"]
    },
    {
      "before": ["<C-j>"],
      "commands": ["editor.action.marker.next"]
    }
  ]
}
```

## Splits

These are from [Melkey](https://github.com/Melkeydev). They're intuitive and easy to reach.

- <kbd>Space</kbd> + <kbd>v</kbd> → vertical split
- <kbd>Space</kbd> + <kbd>s</kbd> → horizontal split
- <kbd>Space</kbd> + <kbd>hjkl</kbd> → move between panes

```json
{
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["leader", "v"],
      "commands": [":vsplit"]
    },
    {
      "before": ["leader", "s"],
      "commands": [":split"]
    },
    {
      "before": ["leader", "h"],
      "commands": ["workbench.action.focusLeftGroup"]
    },
    {
      "before": ["leader", "j"],
      "commands": ["workbench.action.focusBelowGroup"]
    },
    {
      "before": ["leader", "k"],
      "commands": ["workbench.action.focusAboveGroup"]
    },
    {
      "before": ["leader", "l"],
      "commands": ["workbench.action.focusRightGroup"]
    }
  ]
}
```

## Visual mode

These bindings let me stay in Visual Mode to indent or move selections around.

```json
{
  "vim.visualModeKeyBindings": [
    {
      "before": ["<"],
      "commands": ["editor.action.outdentLines"]
    },
    {
      "before": [">"],
      "commands": ["editor.action.indentLines"]
    },
    {
      "before": ["J"],
      "commands": ["editor.action.moveLinesDownAction"]
    },
    {
      "before": ["K"],
      "commands": ["editor.action.moveLinesUpAction"]
    }
  ]
}
```

This one lets me paste without overriding the yank register.

```json
{
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      "before": ["p"],
      "after": ["p", "g", "v", "y"]
    }
  ]
}
```

## Other things I like

- <kbd>go</kbd> → faster than <kbd>gg</kbd> to navigate to the top of the file
- <kbd>gh</kbd> → faster than <kbd>⌘K ⌘I</kbd> to show the help tooltip
- <kbd>gd</kbd> → go to definition
- <kbd>gr</kbd> → go to references
- <kbd>gq</kbd> → makes my JSDoc paragraphs consistent
- <kbd>Space</kbd> + <kbd>f</kbd> → format code
- <kbd>Ctrl</kbd> + <kbd>n</kbd> / <kbd>Ctrl</kbd> + <kbd>p</kbd> → better than arrow keys in lists
- <kbd>Ctrl</kbd> + <kbd>o</kbd> / <kbd>Ctrl</kbd> + <kbd>i</kbd> → move through the jump list

---

If you have a favorite Vim tweak, please let me know!
