# Setting the base to nodejs 10.1.0
FROM node:10.2.0-alpine@sha256:033bc28cbdd58fe876b04b60a05133116335c451925814967caeab0b74c59286

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

ENV NODE_ENV production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start