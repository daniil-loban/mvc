export default class NewRowView {
  constructor(controller) {
    this.controller = controller
    
    this.element = document.createElement('div')
    this.element.classList.add('new-row')
    this.createLabeledInput('FullName:', 'FullName', 'fullname')
    this.createLabeledInput('Size:', 'Size', 'size')
    
    this.createButton = document.createElement('button')
    this.createButton.textContent = 'Create Row'
    this.element.appendChild(this.createButton)

    this.createButton.addEventListener('click', () => {
      this.controller.addNewRow()
    })

    this.inputFullName.onblur = (event) => {
      this.setFullName(event)
    }

    this.inputSize.onblur =  (event) => {
      const date = new Date().toLocaleTimeString()
      this.controller.updateModel({ size: event.target.value, date })
    }
  }
  
  setController(controller){
    this.controller = controller
  }

  setFullName(event){
    const [name, type] = event.target.value.split('.')
    const date = new Date().toLocaleTimeString()
    this.controller.updateModel({ name, type: type, date })
  }

  createLabeledInput(label, elementName, propertyName) {
    this[`input${elementName}`] = document.createElement('input');
    this[`input${elementName}`].setAttribute(propertyName, propertyName)
    this[`${propertyName}Label`] = document.createElement('label');
    this[`${propertyName}Label`].textContent = label
    this[`${propertyName}Label`].setAttribute('for', propertyName)
    this.element.append(this[`${propertyName}Label`], this[`input${elementName}`])
  }

  render() {
    return this.element;
  }

  update(model) {
    const { name, type, size } = model.data
    this.inputFullName.value = `${name || ''}${type ? '.': ''}${type || ''}`
    this.inputSize.value = size || '';
  }
}