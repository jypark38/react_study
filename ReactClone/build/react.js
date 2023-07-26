// children 여러개 받을수 있어서 전개구문으로 가변매개변수 정의
function createElement(tag, props, ...children) {
  if (typeof tag === 'function') {
    return tag(null, props, ...children);
  }
  return {
    tag,
    props,
    children
  };
}
function renderDom(vDom) {
  if (typeof vDom === 'string') {
    return document.createTextNode(vDom);
  }
  const el = document.createElement(vDom.tag);
  vDom.children.map(element => {
    return renderDom(element);
  }).forEach(realEl => {
    el.append(realEl);
  });
  return el;
}
function render(element, container) {
  container.append(renderDom(element));
}
export { createElement, render };