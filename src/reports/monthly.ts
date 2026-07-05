import { issueRefund } from '../billing/refund';
import { Subscription } from '../billing/Subscription';
import { Checkout } from '../checkout/Checkout';

export function monthly() {
  const sub = new Subscription();
  const cart = new Checkout();
  issueRefund('demo');
}
// r
