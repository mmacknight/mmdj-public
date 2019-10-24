#!/bin/bash

rm polyfill*
rm main-es*
rm vendor*
rm runtime*
rm styles*
rm 3rd*
rm favicon.ico
rm index.html

cp ./frontend/dist/frontend/* .
chmod 775 *
chmod 775 ./backend/api/*
