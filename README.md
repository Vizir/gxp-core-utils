# GXP-CORE-UTILS

This repository contains core utilities shared between all children of gxp


## Folder Structure

```
├── build
└── src
    ├── analytics
    ├── storage
    └── types
```

## Requisites

- Node.js


## How to generate a new version of the package:

1. Generate the build
```
yarn build
```
2. commit the build

3. Generate a new tag
```
git tag 1.x.x
```
4. push the code  with the new tag

## How to install core-utils in other projects as dependencies:

```
    "gxp-core-utils": "https://[repo path]#v[version]",

```
