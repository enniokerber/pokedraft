import {Subscription} from 'rxjs';

export class SubscriptionContainer {

  private subscriptions: Subscription[];

  constructor(...subscriptions: Subscription[]) {
    this.subscriptions = [];
    this.add(...subscriptions);
  }

  public add(...subscriptions: Subscription[]): void {
    subscriptions.forEach(
      (subscription) => this.subscriptions.push(subscription)
    );
  }

  public unsubscribeAll(): void {
    return this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
