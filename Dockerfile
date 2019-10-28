FROM node:10

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g serve
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY build build

EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]