#!/bin/sh
set -xe

DEF_BACKEND="/"

BACKEND=${BACKEND_URL:-$DEF_BACKEND}

PROXY=""
if [ "$BACKEND" != "$DEF_BACKEND" ]; then
PROXY="
location /rest {
	proxy_pass ${BACKEND};
}"
fi  
        
export PROXY=$PROXY
export BACKEND=$BACKEND

envsubst '\$PROXY,\$BACKEND' </etc/nginx/nginx.conf.template >/etc/nginx/nginx.conf

cat /etc/nginx/nginx.conf

exec "$@"