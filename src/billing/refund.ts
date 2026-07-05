import { StripeGateway } from './gateway';
import { sendEmail } from '../notifications/email';

export function startRefund(id: string): void {}
export function validateRefund(id: string): boolean {
  return true;
}
export function issueRefund(id: string): void {
  new StripeGateway().charge(0);
  sendEmail();
}
