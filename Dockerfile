# Stage 1 - the build process
FROM node:14-alpine as builder
WORKDIR /usr/src/app
## Copy 'dependecies files' & yarn files first to max. use of cache
COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --immutable

## Copy & Build App
COPY . .
RUN yarn build:docz

# Stage 2
FROM nginx:1-alpine
COPY --from=builder /usr/src/app/.docz/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf.template
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
