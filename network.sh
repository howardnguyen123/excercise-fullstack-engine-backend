#!/bin/bash

# Set default value for NETWORK_NAME
NETWORK_NAME="${NETWORK_NAME:-excercise-fullstack-engine}"

# Check if the network already exists
if ! docker network ls | grep -q $NETWORK_NAME; then
    echo "Network $NETWORK_NAME does not exist. Creating..."
    docker network create $NETWORK_NAME
else
    echo "Network $NETWORK_NAME already exists."
fi
