FROM node:16 as build

WORKDIR /app
COPY . ./
RUN npm install --production
RUN npm run prod

FROM gcr.io/distroless/nodejs
#FROM node:16

COPY --from=build /app /
EXPOSE 4000
CMD ["dist/index.js"]