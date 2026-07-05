import { Subscription } from '../billing/Subscription';
import { StripeGateway } from '../billing/gateway';
import { sendEmail } from '../notifications/email';
import type { OrderState } from './orderState';

export class Checkout {
  state: OrderState = 'cart';
  private gateway = new StripeGateway();
  private sub?: Subscription;
  pay(): void {
    this.gateway.charge(0);
    sendEmail();
  }
}
