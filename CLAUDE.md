# Project Guidelines

## Writing Style

**NEVER USE EM-DASHES.** No em-dash character ("—", U+2014) anywhere: user-facing copy, code comments, commit messages, PR descriptions, or this file. Use commas, semicolons, colons, parentheses, or periods as appropriate. `&mdash;` HTML entities are also forbidden. En-dashes and hyphens are fine.

## Git Workflow

**Push to git after every change.** After completing any change (code edit, image update, copy tweak), commit and push to the remote without waiting to be asked.

- Stage the specific files you changed (avoid `git add -A` / `git add .`)
- Write a concise commit message describing the why
- Run `git push` after the commit
