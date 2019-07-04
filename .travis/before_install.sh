#!/usr/bin/env bash

set -e
set -v

# Prep deploy key
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

.travis/add_ssh_key.sh $1 $2

git submodule update --init --recursive
cd dist/jensim
git checkout master
rm -rf *
