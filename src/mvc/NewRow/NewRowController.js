import RowController from "../Row/RowController.js"

export default class NewRowController extends RowController {
  constructor(model, View, service) {
    super(model, new View())
    this.View = View
    this.service = service
  } 
   
  addNewRow(){
    this.service.addNewRow({...this.model.data})
    this.model.clear()
  }
}