#!/usr/bin/env bash

set -e
set -v

rm -rf dist/jensim/*
npm install
npm run build
