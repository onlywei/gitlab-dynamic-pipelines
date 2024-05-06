# gitlab-cicd-types

TypeScript definitions for creating dynamic Gitlab CI/CD pipelines. Helpful if you want to create JavaScript objects that follow the [GitLab CI/CD YAML Syntax Reference](https://docs.gitlab.com/ee/ci/yaml/).

## Installation

```
npm install --save-dev gitlab-cicd-types
```

For dynamic Gitlab CI/CD pipelines, you most likely will also want to use [YAML](https://www.npmjs.com/package/yaml) so you can output the pipeline as a YAML file for Gitlab to understand:

```
npm install yaml
```

## Usage

Use these types to build a basic pipeline like this:

```typescript
import fs from 'node:fs';
import { GlobalKeywords, Pipeline } from 'gitlab-cicd-types';

const globalKeywords: GlobalKeywords = {
  workflow: {
    name: 'Basic Pipeline',
  },
  stages: ['test', 'build'],
  default: {
    image: 'node:18',
  },
};

// Define jobs in a separate object. This is a limitation of Typescript.
// There is no way to define a type that has both known and unknown keys.
const jobs: Pipeline = {
  job1: {
    stage: 'test',
    image: 'node:20.12.2',
    script: ['echo "it works!'],
  },
  job2: {
    stage: 'build',
    script: ['echo "it has been built!'],
  },
};

fs.writeFileSync('.gitlab-ci.yml', YAML.stringify({
	...globalKeywords,
	...jobs,
}));
```

### Why are `GlobalKeywords` and `Pipeline` separate types?

This is a limitation of TypeScript. As of this version, there is no way to define a type that has both known and unknown keys.
