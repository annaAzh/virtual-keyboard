export default class {
  constructor() {
    this.OS = navigator.userAgentData.platform.slice(0, 3);
  }

  getOSType() {
    return this.OS;
  }
}
