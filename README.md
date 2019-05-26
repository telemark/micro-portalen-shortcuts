[![Build Status](https://travis-ci.org/telemark/micro-portalen-shortcuts.svg?branch=master)](https://travis-ci.org/telemark/micro-portalen-shortcuts)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-portalen-shortcuts

Micro-version of shortcuts administration

## API

### **/shortcuts**

Lists all shortcuts

To filter by roles

#### GET

```bash
?roles=<role1>|<role2>|<role3>
```

#### POST

```JavaScript
{
  roles: [
    'role1',
    'role2',
    'role3'
  ]
}
```

To filter by ip

#### GET

```bash
?myIp=127.0.0.1
```

#### POST

```JavaScript
{
  myIp: '127.0.0.1'
}
```

## /view

Renders html of all shortcuts

To filter by roles

#### GET

```bash
?roles=<role1>|<role2>|<role3>
```

#### POST

```JavaScript
{
  roles: [
    'role1',
    'role2',
    'role3'
  ]
}
```

To filter by ip

#### GET

```bash
?myIp=127.0.0.1
```

#### POST

```JavaScript
{
  myIp: '127.0.0.1'
}
```

## Development

You'll need the [now-cli](https://zeit.co/now) installed to do local development.

- Clone the repo
- Install the dependencies ```$ npm i```
- Start the development server ```$ npm run dev```

## Deploy

Make sure the [now.json](now.json) matches your environment.

Run the deploy script.

```$ npm run deploy```

## License
[MIT](LICENSE)