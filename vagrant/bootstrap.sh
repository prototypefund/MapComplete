#!/bin/bash

apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y vim

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
echo "source ~/.nvm/nvm.sh" >> ~/.bashrc
source ~/.nvm/nvm.sh

nvm install 14.16.1

cp -a /mapcomplete ~/
