#!/usr/bin/env bash

set -e
set -v

.travis/add_ssh_key.sh $1 $2

cd dist/jensim
git add -A
git commit -m "Deploying successful build"
git push origin master
