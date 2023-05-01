export default class {
  constructor() {
    this.arr = [];
  }

  pushItem(item) {
    this.arr.push(item);
  }

  render() {
    let innerHTML = '';
    for (let i = 0; i < this.arr.length; i += 1) {
      innerHTML += this.arr[i].render();
    }
    document.body.innerHTML = `<div class="container">${innerHTML}<div>`;
  }
}
