#!/usr/bin/env bash

git clone git@github.com:sendsay-ru/sendsay-frontend-builds.git /tmp/sendsay-frontend-builds

export RELEASE_NAME=$(git describe --tags --abbrev=0);

yarn run build

export MESSAGE=sendsay-docs\ build-docs\ $RELEASE_NAME

rm -rf /tmp/sendsay-frontend-builds/build-docs

yes | cp -R build/* /tmp/sendsay-frontend-builds/build-docs

cd /tmp/sendsay-frontend-builds

echo $MESSAGE > build/COMMIT

git add .
git commit -m "$MESSAGE"
git push origin master
