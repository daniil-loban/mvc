export default class RowModel {
  constructor(subscriber, data = {}) {
    this.data = data
    this.subscribers = subscriber ? [subscriber] : []
  }

  attachSubscriber(subscriber) {
    this.subscribers.push(subscriber);
    subscriber.update(this)
  }

  notifySubscribers() {
    this.subscribers.forEach(subscriber => subscriber.update(this));
  }

  clear() {
    this.data = {}
    this.notifySubscribers()
  }

  updateData(keyValuePairs) {
    Object.assign(this.data, keyValuePairs)
    this.notifySubscribers()
  }

  toggleValue(key) {
    if (this.data.hasOwnProperty(key)) {
      this.data[key] = !this.data[key];
      this.notifySubscribers(key);
    }
  }
}