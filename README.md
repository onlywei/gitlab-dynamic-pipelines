# gitlab-cicd

TypeScript definitions for creating dynamic Gitlab CI/CD pipelines. Helpful if you want to create JavaScript objects that follow the [GitLab CI/CD YAML Syntax Reference](https://docs.gitlab.com/ee/ci/yaml/).

## Installation

```
npm install --save-dev gitlab-cicd
```

For dynamic Gitlab CI/CD pipelines, you most likely will also want to use [YAML](https://www.npmjs.com/package/yaml) so you can output the pipeline as a YAML file for Gitlab to understand:

```
npm install yaml
```

## Usage

Use these types to build a basic pipeline like this:

```typescript
import fs from 'node:fs';
import { GitlabCIDotYAML } from 'gitlab-cicd';

const pipeline: GitlabCIDotYAML = {
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

fs.writeFileSync('.gitlab-ci.yml', YAML.stringify({
  ...pipeline.globalKeywords,
  ...pipeline.jobs,
}));
```

### Why are `globalKeywords` and `jobs` separated and then recombined?

This is a limitation of TypeScript. As of this version, there is no way to define a type that has both known and unknown keys.
