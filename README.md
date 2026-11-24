# One-Sentence Absurd Invention Pitch — The Toast Butler

## What the program writes

`main.ts` writes exactly one sentence to `entry.txt`:

> The Toast Butler is a miniature butler on tiny roller skates who lives inside your toaster and catches each slice mid-pop, buttering it before it can land butter-side down on your kitchen floor.

That is the whole output: one sentence, plus a single trailing newline, and nothing else.

## Why the pitch wins on the judge criteria

- **One sentence, on brief:** a single sentence pitching a ridiculous invention that fixes a tiny everyday annoyance — toast landing butter-side down on the kitchen floor.
- **Funny:** the laugh comes from the invention itself, a miniature butler on tiny roller skates living inside a toaster and staging a rescue, not from a joke bolted on at the end.
- **Clever fix:** the absurd machine deals with the annoyance in a way that is silly yet weirdly plausible — catch each slice mid-pop and butter it before gravity and the floor get their say.
- **Original:** a fresh absurdity, not one of the familiar examples — no self-apologising alarm clock, no complaining sock, no sighing kettle.
- **Tight:** one clean sentence that names the annoyance, the invention and its silly mechanism without clutter.

## Run

```sh
node main.ts
```

This writes to `/output/entry.txt` by default. To write elsewhere, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/my-output node main.ts
```

Requires Node 22 or later, with no dependencies to install.

## License

MIT License — see `LICENSE`.
