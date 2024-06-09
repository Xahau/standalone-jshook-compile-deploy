# Sample JS Hooks compiler

This package is just a simple example on how JS Hooks can be coded up, compiled, deployed.

This is not a toolkit, this is an reference implementation of the build steps for future *actual* toolkits.

### Prerequisites

1. Make sure you have `wasmtime` installed: https://docs.wasmtime.dev/cli-install.html
2. Make sure you are running the JS Hooks Dev environment on your machine: https://github.com/Xahau/jshooks-alpha, clone and run: `./install && ./logs`

### Build & deploy a sample JS Hook

##### Prepare
1. `npm install`
2. `npm getwasm`

##### Code

3. Write a HooksJS contract, e.g. `src/sample.ts`
4. Build, `npm run build` (configured to build `sample.ts`)
5. Deploy, run `npm run deploy` (configured to deploy `sample.ts`)
