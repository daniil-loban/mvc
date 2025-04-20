### MVC pattern that allows sharing the same model in different controllers to synchronize the application

Using by controller:

    const tableController = new TableController(this.tableModel, TableView);
    tableController.setRowMVC(RowController, RowModel, RowEditView)
    document.body.appendChild(tableController.render());`


*Method render() returns root element of view.*

## Minimal View is:

    export default class ParagraphView {
      constructor(controller) {
        this.controller = controller
        this.element = document.createElement('p')
        this.element.onclick = () => {
          this.controller.clickHandler()
        }
      }
    
      setController(controller) {
        this.controller = controller
      }
    
      render() {
        return this.element
      }
    
      update(model) {
        // You can also use the controller here
        const { data: { color , text} } = model
        this.element.style.color = color
        this.element.innerText = text
      }
    }

*Method setController used for already insctance of view*

## Minimal Model is:
    
    export default class ParagraphModel {
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
    
      updateData(keyValuePairs) {
        Object.assign(this.data, keyValuePairs)
        this.notifySubscribers()
      }
    }

*Each subscriber must have an update method that can be called by the model.
A subscriber is not necessarily a view.*

## Minimal Conroller is:
    
    export default class ParagraphController {
      constructor(model, view) {
        this.model = model
        this.view = view
        this.view.setController(this)
        this.model.attachSubscriber(this.view)
      }
    
      updateModel(keyValuePairs) {
        this.model.updateData(keyValuePairs);
      }
    
      render() {
        return this.view.render()
      }
    }
