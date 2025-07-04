---
draft: true
title: How I use Vim
---

- I use [`VSCodeVim`](https://github.com/VSCodeVim/Vim).
- I want to keep my Vim setup quite vanilla, so I don't really do huge remaps.

## Remmaping `HJKL`

This is probably the biggest remap I have.

- I find <kbd>H<kbd> and <kbd>L<kbd> confusing since they are vertical movements and <kbd>h</kbd> and <kbd>l</kbd> are horizontal movements.
- I also don't really like <kbd>J</kbd> and <kbd>K</kbd>. I never use them. So I placed <kbd>H</kbd> and <kbd>L</kbd> there.
- I like tabs. I don't like <kbd>gT<kbd> and <kbd>gt<kbd>, tho.
  - I want to move through my tabs fast, and those motions are a bit too slow for my taste when since they are done entirely with the left hand.
  - I use <kbd>H</kbd> and <kbd><L/kbd> for that

```json
{
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["J"],
      "after": ["L"]
    },
    {
      "before": ["K"],
      "after": ["H"]
    },
    {
      "before": ["H"],
      "after": ["g", "T"]
    },
    {
      "before": ["L"],
      "after": ["g", "t"]
    }
  ]
}
```

## Splits

- I do <kbd><kbd>Space</kbd>+<kbd>v</kbd></kbd> for a vertical split and <kbd><kbd>Space</kbd>+<kbd>s</kbd></kbd> for an horizontal one.
- For moving between panes, I use<kbd><kbd>Space</kbd>+<kbd>hjkl</kbd></kbd>

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

## Problems

I copied the keybinds for navigating through problems from [Dax](https://github.com/thdxr).

- <kbd><kbd>Ctrl</kbd>+<kbd>k</kbd></kbd> to go to the previous problem
- <kbd><kbd>Ctrl</kbd>+<kbd>j</kbd></kbd> to go to the next problem

It's crazy how fast you can fix warnings and errors this way.

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

## Visual mode

I have a couple of remaps for doing things in Visual Mode without exiting it.

These ones for indenting:

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
    }
  ]
}
```

And these ones for moving my selection:

```json
{
  "vim.visualModeKeyBindings": [
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

## Other

- I use <kbd>go</kbd> instead of <kbd>gg</kbd> to go to the top of the file. It's more ergonomic.
- I use <kbd>gh</kbd> instead of <kbd><kbd>⌘</kbd>+<kbd>k</kbd><kbd>⌘</kbd>+<kbd>i</kbd></kbd> to [g]o to the [h]elp tooltip.
- I use <kbd>gd</kbd> to [g]o to [d]efinition
- I use <kbd>gr</kbd> to [g]o to [r]eferences
- I use <kbd><kbd>Space</kbd>+<kbd>f</kbd></kbd> to manually [f]ormat my code
- I format my JSDoc paragraphs by selecting them and using <kbd>gq</kbd>.
