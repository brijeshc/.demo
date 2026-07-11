import { StripeGateway } from '../billing/gateway';
import { sendEmail } from '../notifications/email';

export function placeOrder(): void {
  new StripeGateway().charge(0);
  sendEmail();
}
