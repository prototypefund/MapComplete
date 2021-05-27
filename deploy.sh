#!/bin/bash

rsync -avz --delete dist/ waldbrand-app.de:/var/www/mapcomplete/
