# gitlab-dynamic-pipelines

Package for creating dynamic Gitlab CI/CD pipelines in TypeScript. Helpful if you want to create TypeScript objects that follow the [GitLab CI/CD YAML Syntax Reference](https://docs.gitlab.com/ee/ci/yaml/) using TypeScript types.

## Installation

```
npm install gitlab-dynamic-pipelines
```

## Usage

Use these types to build a basic pipeline like this:

```typescript
import { writeFileSync } from 'node:fs';
import { toYAML, Pipeline } from 'gitlab-dynamic-pipelines';

const pipeline: Pipeline = {
  globalKeywords: {
    workflow: {
      name: 'Basic Pipeline',
    },
    stages: ['test', 'build'],
    default: {
      image: 'node:18',
    },
  },
  jobs: {
    job1: {
      stage: 'test',
      image: 'node:20.12.2',
      script: ['echo "it works!'],
    },
    job2: {
      stage: 'build',
      script: ['echo "it has been built!'],
    },
  },
};

writeFileSync('.gitlab-ci.yml', toYAML(pipeline));
```

### Reference Tags

GitLab CI/CD [Reference Tags](https://docs.gitlab.com/ee/ci/yaml/yaml_optimization.html#reference-tags) can be created within scripts and variables using the included `ReferenceTag` class:

```
import { ReferenceTag } from 'gitlab-dynamic-pipelines';

myJob.before_script = [
  new ReferenceTag(['.something', 'before_script']),
  'my_script.sh',
];
```

### Why are `globalKeywords` and `jobs` separated into two different sub-objects?

This is a limitation of TypeScript. As of this version, there is no way to define a type that has both known and unknown keys.
