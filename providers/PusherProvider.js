const {
  ServiceProvider,
} = require('@adonisjs/fold');

const Pusher = require('pusher');

class PusherProvider extends ServiceProvider {
  /**
   * Register method called by the Ioc container
   * to register the provider
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.bind('Lesswork/Pusher', (app) => {
      const conf = app.use('Config').get('pusher');

      if (!conf) {
        throw new Error('Missing \'config/pusher.js\'.');
      }

      return new Pusher(conf);
    });
  }
}

module.exports = PusherProvider;