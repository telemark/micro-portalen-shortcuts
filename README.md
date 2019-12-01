[![Build Status](https://travis-ci.org/telemark/micro-portalen-shortcuts.svg?branch=master)](https://travis-ci.org/telemark/micro-portalen-shortcuts)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-portalen-shortcuts

Micro-version of shortcuts administration.

Returns an array of shortcut objects dependening on your roles and ip.

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

```
$ curl http://localhost:3000/shortcuts -d '{"roles": ["skole"]}' --header "Content-Type: application/json"
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

### Add a new shortcut

- Open [lib/data/shortcuts.json](lib/data/shortcuts.json)
- Find the role the shortcut is connected to
- Add the shortcut

```JavaScript
  {
      "title": "The shortcuts title",
      "description": "Shortcuts description (keep it short)",
      "system": "What system is the shortcut leading to",
      "url": "Url for the shortcut",
      "icon": "Name for the shortcut icon", // From https://material.io/resources/icons/?style=baseline
      "includeIps": [
        "10.0.*.*", // Support wildcards for range
        "172.16.0.0" // Supports full address
      ] //This optional. Must be an array. If the shortcut is available for all IPs remove the property
    }
```

- Redeploy

### Remove a shortcut

- Remove the shortcut from [lib/data/shortcuts.json](lib/data/shortcuts.json)
- Redeploy

## Deploy

Make sure the [now.json](now.json) matches your environment.

Run the deploy script.

```$ npm run deploy```

## License

[MIT](LICENSE)