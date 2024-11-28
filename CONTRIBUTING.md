# How to publish a new version

This repository uses changesets to release new versions. To prepare a release, perform the following steps:

1. Run `npx changeset`
2. Answer the questions in the interactive prompt.
3. Commit the changes.

Then, to perform the publish to npm, run `npm run local-release`.
