# Setting the base to nodejs 10.1.0
FROM node:10.3.0-alpine@sha256:003a48a2435f4a477f1079dee78e5b2ef7592926bbadf913e20e29d9d141e0a1

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