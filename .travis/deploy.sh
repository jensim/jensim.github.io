#!/usr/bin/env bash

set -e
set -v

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

cd dist/jensim
git add -A
git commit -m "Deploying successful build"
git push origin master
