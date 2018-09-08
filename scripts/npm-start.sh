#!/bin/bash
pm2 start webpack && /var/www/html/wineflix/server/index.js
echo "ec2 instance started"