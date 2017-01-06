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

## License
[MIT](LICENSE)