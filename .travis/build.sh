#!/usr/bin/env bash

set -e
set -v

rm -rf dist/jensim/*
npm run build
