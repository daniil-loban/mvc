export default class TableModel {
  constructor() {
    this.rowsModels = []
    this.subscribers = []
  }

  notifySubscribers() {
    this.subscribers.forEach(subscriber => subscriber.update(this.rowsModels));
  }

  addRowModel(rowModel) {
    this.rowsModels.push(rowModel);
    this.notifySubscribers()  
  }

  addRowsModels(rowsModels) {
    this.rowsModels = rowsModels
    this.notifySubscribers()  
  }

  attachSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  update(model){
    this.subscribers.forEach(subscriber => subscriber.updateRow(model));
  }
}