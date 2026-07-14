#!/bin/bash
set -e

cd "$(dirname "$0")/deployer"

if ! command -v wrangler &> /dev/null; then
    echo "Installing wrangler..."
    npm install -g wrangler
fi

echo "Deploying zeus-deployer..."
wrangler deploy

echo "Done."
