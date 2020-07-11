#!/usr/bin/env bash

set -e
set -v

# Prep deploy key
git config --global user.email "jens.brimfors@gmail.com"
git config --global user.name "Travis CI on behalf of Jens Brimfors"

. .travis/add_ssh_key.sh "$1" "$2"

git submodule update --init --recursive
cd dist/jensim
git checkout master
rm -rf *
