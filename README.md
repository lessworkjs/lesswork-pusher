# Lessworkjs/Adonisjs Pusher
This is a pusher provider for the [lessworkjs](https://lesswork.io/) and [adonisjs](https://adonisjs.com/) frameworks.

# Installation
```bash 
npm i @lessworkjs/pusher
```

Register the provider and alias in your `config/app.js` file.

```js
const providers = [
  ...
  '@lessworkjs/pusher/providers/PusherProvider',
];

```

Create `config/pusher.js`
```js
module.exports = {
  appId: env('PUSHER_APP_ID'),
  key: env('PUSHER_APP_KEY'),
  secret: env('PUSHER_APP_SECRET'),
  cluster: env('PUSHER_APP_CLUSTER')
};
```

Define the settings above in your `.env`
```
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET= 
PUSHER_APP_CLUSTER=
```


# Usage
See [pusher](https://www.npmjs.com/package/pusher) for full usage information.

```js
const Pusher = use('Pusher');

Pusher.trigger('channel-1', 'test_event', { message: "hello world" });
```