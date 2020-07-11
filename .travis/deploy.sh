#!/usr/bin/env bash

set -e
set -v

. .travis/add_ssh_key.sh "$1" "$2"

cp README.md dist/jensim/README.md
cp package.json dist/jensim/package.json
cd dist/jensim
git add -A
git commit -m "Deploying successful build"
git push origin master
