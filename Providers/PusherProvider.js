'use strict';

const {
  ServiceProvider
} = require('adonis-fold');

class PusherProvider extends ServiceProvider {
  /**
   * Register method called by the Ioc container
   * to register the provider
   *
   * @method register
   *
   * @return {void}
   */
  * register() {
    this.app.bind('Lesswork/Pusher', function (app) {
      const Pusher = require('pusher');

      const conf = config.get('pusher');

      console.log(conf)
      if (!conf) {
        throw `Missing 'config/pusher.js'.`;
      }

      return new Pusher(conf);
    });
  }
}

module.exports = PusherProvider;