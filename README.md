[![Build Status](https://travis-ci.org/telemark/micro-portalen-shortcuts.svg?branch=master)](https://travis-ci.org/telemark/micro-portalen-shortcuts)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-portalen-shortcuts.svg)](https://greenkeeper.io/)

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

## License
[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-portalen-shortcuts.png "Robohash image of micro-portalen-shortcuts")