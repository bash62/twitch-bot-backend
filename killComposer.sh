#!/bin/bash
sudo kill 9 $(sudo lsof -i tcp:5432 | cut -d ' ' -f 2 | tail -n 1)
sudo docker-compose up -d
