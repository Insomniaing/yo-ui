export class customOpt {
  constructor(list, localKey) {
    this.list = list;
    this.localKey = localKey;
  }
  getShowColumn() {
    this.list.forEach((item) => {
      customOpt[item.key] = {
        key: item.key,
        isShow: item.isShow,
      };
    });
    return custom;
  }
  setCustomLocal(val) {
    this.getShowColumn();
    localStorage.setItem(this.localKey, JSON.stringify(customOpt.custom));
  }
}
