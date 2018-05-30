<p align="center">
  <a href="https://github.com/louisgv/sandbox/">
    <img alt="hyperproxy" src="https://github.com/louisgv/sandbox/blob/master/icon.png" width="234">
  </a>
</p>

<h1 align="center">
    sandbox
</h1>

<h2 align="center">
    A monorepo for all experiment targeted toward solving issues in the world.
</h2>

# Goal

A personal sandbox used to test a variety of library in hope that it will aid in the solving or unblocking of open issues.

# Setup

Install global tooling dependencies:

```
npm i -g lerna yarn
```

Install dependencies (run in `/path/to/sandbox`)

```
yarn
lerna bootstrap
```

Run these anywhere within `path/to/sandbox` to start the server (i.e, you can run them from child project or path):

```
lerna run --parallel watch # or in the root of sandbox, do "yarn watch"
```

# Run Modes

To run the sandbox in local mode:

```
LOCAL=true lerna run watch --parallel
```

# Credits

Logo created using [DotGrid](https://github.com/hundredrabbits/Dotgrid) by [Devine Lu Linvega](https://twitter.com/neauoire)

# License

- GSM
- MIT
