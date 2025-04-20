export default class RowController {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.view.setController(this)
    this.model.attachSubscriber(this.view)
  }  
    
  updateModel(keyValuePairs) {
    this.model.updateData(keyValuePairs);
  }

  toggleModelValue(key) {
    this.model.toggleValue(key);
  }

  render(){
    return this.view.render()
  }
}