#!/usr/bin/env bash

set -e
set -v

npm install
npm run build
npm run test
