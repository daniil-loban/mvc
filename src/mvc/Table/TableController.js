export default class TableController {
  constructor(tableModel, TableView) {
    this.getNewRowElement = this.getNewRowElement.bind(this)
    this.model = tableModel;
    this.view = new TableView(this);
    this.model.attachSubscriber(this.view)
    this.handleRowClick = this.handleRowClick.bind(this)
    this.setRowMVC = this.setRowMVC.bind(this)
    this.elementsMap = new WeakMap();
    this.modelsMap = new WeakMap();
  }

  setRowMVC(RowController, RowModel, RowView) {
    this.RowController = RowController
    this.RowModel = RowModel
    this.RowView = RowView
  }

  getNewRowElement(rowModel) {
    const oldElement = this.elementsMap.get(rowModel)
    if (oldElement) return oldElement
    
    const rowElement = new this.RowController(
      rowModel,
      new this.RowView(this)
    ).render(rowModel.data);
    this.elementsMap.set(rowModel, rowElement);
    this.modelsMap.set(rowElement, rowModel);
    return rowElement
  }

  updateRow(model){
    const view = new this.RowView();
    view.update(model)
    const element = this.elementsMap.get(model);
    Object.assign(element, view.element);
  }

  addRow(data) {
    const rowModel = new this.RowModel()
    this.model.addRowModel(rowModel)
    rowModel.updateData(data)
  }

  addRows(rows) {
    for(const data of rows){
      this.addRow(data)
    }
  }

  handleRowClick(event) {
    const row = event.target.closest('tr');
    if (row) {
      const modelRow = this.modelsMap.get(row);
      console.log(modelRow.data)
    }
  }

  render() {
    return this.view.render()
  }
}