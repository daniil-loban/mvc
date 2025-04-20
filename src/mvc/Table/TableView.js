export default class TableView {
  constructor(controller){
  this.controller = controller
  this.element = document.createElement('table')
  this.element.setAttribute('border', 1)
  this.element.innerHTML =   
    `<thead>
      <tr>
        <th>name</th>
        <th>type</th>
        <th>date</th>
        <th>size</th>
      </tr>  
      </thead>
      <tbody>
      </tbody>
    `
    const tbody = this.element.querySelector('tbody');
    tbody.addEventListener('click', (event) => this.controller.handleRowClick(event))
  }

  render(){
    return this.element
  }
  
  update(models) {
    const rows = models.map(rowModel => {
      const rowTrElement = this.controller.getNewRowElement(rowModel) 
      return rowTrElement;
    });
    const tbody = this.element.querySelector('tbody');
    tbody.replaceChildren(...rows)
  }

  updateRow(model){
    this.controller.updateRow(model);
  }

}