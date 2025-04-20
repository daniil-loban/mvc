export default class RowView {
  constructor(controller) {
    this.controller = controller
    this.element = document.createElement('tr')
    this.name = document.createElement('td')
    this.date = document.createElement('td')
    this.type = document.createElement('td')
    this.size = document.createElement('td')
    this.element.append(
      this.name,
      this.type,
      this.date,
      this.size
    )
  }

  setController(controller) {
    this.controller = controller
  }

  changeData(valueObject) {
    this.controller.updateModel(valueObject);
  }

  render() {
    return this.element
  }

  update(model) {
    const { data:  {name, date, type, size, selected} } = model
    if (selected) this.element.style.background = 'lightblue'
    this.element.color = selected ? 'lightblue' : 'black'
    if (name && this.name.children.length === 0) this.name.textContent = name
    if (date) this.date.textContent = date
    if (type) this.type.textContent = type
    if (size) this.size.textContent = size
  }
}