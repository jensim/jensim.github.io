#!/usr/bin/env bash
set -e
set -v

openssl aes-256-cbc -K $1 -iv $2 -in .travis/github_deploy_key.enc -out .travis/github_deploy_key -d
chmod 600 .travis/github_deploy_key
eval $(ssh-agent -s)
ssh-add .travis/github_deploy_key
