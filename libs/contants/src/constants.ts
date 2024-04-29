import { strVal } from '@paroi/data-formatters-lib';

const env = process.env;

export class Constants {
  static JWT_SECRET = strVal(env.JWT_SECRET);
  static JWT_TTL = strVal(env.JWT_TTL);
  static RMQ_URI = strVal(env.RMQ_SERVER_ADDRESS)
  static RMQ_QUEUE = strVal(env.RMQ_QUEUE)
  static CORE_API = strVal(env.CORE_API)
  static MESSENGER_COONECT = strVal(env.MESSENGER_COONECT)
  static TELEGRAM_COONECT = strVal(env.TELEGRAM_COONECT)
  static WHATSAPP_COONECT = strVal(env.WHATSAPP_COONECT)
  static RMQ_CLIENT_SERVICE = "RMQ_CLIENT_SERVICE";

}

console.log('Constants', Constants);
