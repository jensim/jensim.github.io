#!/usr/bin/env bash

set -e
set -v

cd dist/jensim
git add -A
git commit -m "Deploying successful build"
git push origin master
