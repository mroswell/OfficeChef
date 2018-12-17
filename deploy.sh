#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd ./dist

# commit
git init
git add -A
git commit -m '🚀 Deploy'

# push to gh-pages branch
git push -f https://github.com/mroswell/OfficeChef.git master:gh-pages

cd -
