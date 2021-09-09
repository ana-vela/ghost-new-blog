const errors = require('@tryghost/errors');
const ghostBookshelf = require('./base');

const MemberPaidSubscriptionEvent = ghostBookshelf.Model.extend({
    tableName: 'members_paid_subscription_events',

    member() {
        return this.belongsTo('Member', 'member_id', 'id');
    },

    customQuery(qb, options) {
        if (options.aggregateMRRDeltas) {
            if (options.limit || options.filter) {
                throw new errors.IncorrectUsageError('aggregateMRRDeltas does not work when passed a filter or limit');
            }
            const knex = ghostBookshelf.knex;
            return qb.clear('select')
                .select(knex.raw('DATE(created_at) as date'))
                .select(knex.raw('SUM(mrr_delta) as mrr_delta'))
                .select('currency')
                .groupByRaw('currency, DATE(created_at)')
                .orderByRaw('DATE(created_at)');
        }
    }
}, {
    permittedOptions(methodName) {
        const options = ghostBookshelf.Model.permittedOptions.call(this, methodName);

        if (methodName === 'findAll') {
            return options.concat('aggregateMRRDeltas');
        }

        return options;
    },
    async edit() {
        throw new errors.IncorrectUsageError('Cannot edit MemberPaidSubscriptionEvent');
    },

    async destroy() {
        throw new errors.IncorrectUsageError('Cannot destroy MemberPaidSubscriptionEvent');
    }
});

const MemberPaidSubscriptionEvents = ghostBookshelf.Collection.extend({
    model: MemberPaidSubscriptionEvent
});

module.exports = {
    MemberPaidSubscriptionEvent: ghostBookshelf.model('MemberPaidSubscriptionEvent', MemberPaidSubscriptionEvent),
    MemberPaidSubscriptionEvents: ghostBookshelf.collection('MemberPaidSubscriptionEvents', MemberPaidSubscriptionEvents)
};
