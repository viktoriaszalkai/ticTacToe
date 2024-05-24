export default class Elem {
  #ertek = "";
  #szuloElem;
  #divElem;
  #id = 0;
  constructor(id, ertek, szuloElem) {
    this.#id = id;
    this.#ertek = ertek;
    this.#szuloElem = szuloElem;
    this.#megjelenit();
    /* HA RÁKATTINTUNK AZ ELEMRE */
    this.#divElem = this.#szuloElem.children("div:last-child");
    this.#divElem.on("click", () => {
      if(this.#ertek == " "){
      this.#esemenyTrigger("lepes");
      }
    });
  }

  /* EGY OSZTÁLYBAN A THIS A KONKRÉT OBJEKTUMPÉLDÁNYT JELENTI, DE EGY ESEMÉNYKEZELŐBEN FUNCTION NÉVTELEN FÜGGVÉNYBEN HASZNÁLVA AZT A HTML ELEMET JELENTI, AMELYIK AZ ESEMÉNYT KIVÁLTOTTA(EVENT TARGET), NYÍL FÜGGVÉNNYEL HASZNÁLVA PEDIG AZ OBJEKTUMPÉLDÁNYRA MUTAT.*/

  #megjelenit() {
    let txt = `<div><p>${this.#ertek}</p></div>`;
    this.#szuloElem.append(txt);
  }

  /* információ  átadás */
  #esemenyTrigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#id });
    window.dispatchEvent(e);
  }
}
