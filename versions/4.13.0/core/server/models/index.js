/**
 * Dependencies
 */

const _ = require('lodash');

// enable event listeners
require('./base/listeners');

/**
 * Expose all models
 */
exports = module.exports;

const models = [
    'permission',
    'post',
    'role',
    'settings',
    'session',
    'tag',
    'tag-public',
    'user',
    'author',
    'invite',
    'webhook',
    'integration',
    'api-key',
    'mobiledoc-revision',
    'member',
    'product',
    'benefit',
    'stripe-product',
    'stripe-price',
    'member-subscribe-event',
    'member-paid-subscription-event',
    'member-login-event',
    'member-email-change-event',
    'member-payment-event',
    'member-status-event',
    'member-product-event',
    'posts-meta',
    'member-stripe-customer',
    'stripe-customer-subscription',
    'email',
    'email-batch',
    'email-recipient',
    'label',
    'single-use-token',
    'snippet',
    // Action model MUST be loaded last as it loops through all of the registered models
    // Please do not append items to this array.
    'action'
];

function init() {
    exports.Base = require('./base');

    models.forEach(function (name) {
        _.extend(exports, require('./' + name));
    });
}

/**
 * Expose `init`
 */

exports.init = init;
