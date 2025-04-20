import RowView from "./RowView.js"

export default class RowEditView extends RowView {
  constructor(controller) {
    super(controller);
    this.inputName = document.createElement('input');
    this.inputName.oninput =  (event) =>
      this.controller.updateModel({ name: event.target.value })
    this.name.appendChild(this.inputName);
  }

  update(model) {
    super.update(model);
    this.inputName.value = model.data.name || '';
  }
}