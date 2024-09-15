/**
 * Module to test exchange API
 */

const constants = require('../helpers/const');
const utils = require('../helpers/utils');
const config = require('../modules/config/reader');
const log = require('../helpers/log');
const notify = require('../helpers/notify');
const tradeParams = require('./settings/tradeParams_' + config.exchange);
const traderapi = require('./trader_' + config.exchange)(config.apikey, config.apisecret, config.apipassword, log);

const db = require('../modules/DB');
const orderUtils = require('./orderUtils');
const orderCollector = require('./orderCollector');

module.exports = {
  readableModuleName: 'Test',

  async test() {
    console.log('==========================');


    // const testOrderPrice = 0.02971; // Setting a limit price, assuming the current highest bid and lowest ask are 3500–3505. Adjust it according to the current price to place an order in the spread.
    // const testOrderMarket = 'ADM/USDT';

    // const partFilledOrder = await traderapi.placeOrder('sell', testOrderMarket, testOrderPrice, 10, 1, undefined);
    // const filledOrder2 = await traderapi.placeOrder('buy', testOrderMarket, testOrderPrice, 5, 1, undefined);

    // console.log(await traderapi.getOpenOrders(testOrderMarket));
    // console.log(await traderapi.getOrderDetails(filledOrder2.orderId, testOrderMarket)); // Details for the filled order
    // console.log(await traderapi.getOrderDetails(partFilledOrder.orderId, testOrderMarket)); // Details for the part_filled order

    // Testing getting non-existent order details
    // console.log(await traderapi.getOrderDetails('146d61be-9841-46c6-997c-28e20df503b4', testOrderMarket));
    // console.log(await traderapi.getOrderDetails('119353984789', testOrderMarket));
    // console.log(await traderapi.getOrderDetails('65707c1285a72b0007ee2cbd2', testOrderMarket));
    // console.log(await traderapi.getOrderDetails('123-any-order-number', testOrderMarket));
    // console.log(await traderapi.getOrderDetails(undefined, testOrderMarket));
    
    
    // const { ordersDb } = db;
    // const order = await ordersDb.findOne({
    //   _id: 'orderId',
    // });

    // const TraderApi = require('../trade/trader_' + config.exchange);

    // const traderapi3 = TraderApi(config.apikey2, config.apisecret2, config.apipassword2, log);
    // const traderapi2 = require('./trader_' + 'azbit')(config.apikey, config.apisecret, config.apipassword, log);

    // const ob = await traderapi.getOrderBook('DOGE/USD');
    // console.log(ob);

    // const req = await traderapi.getTradesHistory('eth/usdt');
    // console.log(req);

    // setTimeout(async () => {
    //   console.log('100');
    //   console.log(await traderapi.getOrderDetails(filledOrder2.orderId, testOrderMarket)); // Details for the filled order
    //   console.log(await traderapi.getOrderDetails(partFilledOrder.orderId, testOrderMarket)); // Details for the part_filled order
    //   console.log('100-end');
    // }, 100);

    // setTimeout(async () => {
    //   console.log('300');
    //   console.log(await traderapi.getOrderDetails(filledOrder2.orderId, testOrderMarket)); // Details for the filled order
    //   console.log(await traderapi.getOrderDetails(partFilledOrder.orderId, testOrderMarket)); // Details for the part_filled order
    //   console.log('300-end');
    // }, 300);

    // const orderCollector = require('./orderCollector');
    // const cancellation = await orderCollector.clearOrderById(
    //     'order id', config.pair, undefined, 'Testing', 'Sample reason', undefined, traderapi);
    // console.log(cancellation);

    // console.log(await traderapi.cancelAllOrders('BNB/USDT'));
    // console.log(await traderapi.cancelOrder('5b9e5590-2e34-4a1c-93a8-4aa129fd96bc', undefined, 'ADM/USDT'));
    // console.log(await traderapi.cancelOrder('ODM54B-5CJUX-RSUKCK', undefined, 'DOGE/USDT'));
    // console.log(traderapi.features().orderNumberLimit);
  },
};
