#!/usr/bin/env bash

set -e
set -v

# Prep deploy key
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
openssl aes-256-cbc -K $1 -iv $2 -in .travis/github_deploy_key.enc -out .travis/github_deploy_key -d
chmod 600 .travis/github_deploy_key
eval $(ssh-agent -s)
ssh-add .travis/github_deploy_key

git submodule update --init --recursive
cd dist/jensim
git checkout master
rm -rf *
