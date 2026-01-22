# gitlab-dynamic-pipelines

## 1.1.2

### Patch Changes

- a789777: Add sideEffects: false to package.json to enable better tree-shaking in bundlers

## 1.1.1

### Patch Changes

- a92f094: Use oxlint + oxfmt to lint:fix and format this codebase

## 1.1.0

### Minor Changes

- bff71d8: Add support to use artifacts within job includes (dynamic child pipelines)

## 1.0.0

### Major Changes

- 1df817a: Mark package stable -- release v1.0.0

### Patch Changes

- 1df817a: Update all dependencies

## 0.10.2

### Patch Changes

- 5969d48: Set up NPM trusted publishing

## 0.10.1

### Patch Changes

- ff728e8: Allow cache to be set to an empty array, not object. This is consistent with the Gitlab docs: https://docs.gitlab.com/ci/caching/#disable-cache-for-specific-jobs.

## 0.10.0

### Minor Changes

- 2db3990: Allow cache to be set to {} to override defaults.
- 2db3990: - Set up changeset release action
  - Upgrade TypeScript to 5.7
  - Use node type stripping for unit tests
  - Switch to pnpm

## 0.9.0

### Minor Changes

- 884ba15: - Set up changeset release action
  - Upgrade TypeScript to 5.7
  - Use node type stripping for unit tests
  - Switch to pnpm

## 0.8.3

### Patch Changes

- 59bf5d9: Set up CI automation and changeset
