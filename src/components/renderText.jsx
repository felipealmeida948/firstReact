import { render, unmountComponentAtNode } from 'react-dom';

export default function renderText(component) {
  const _el = document.createElement('div');
  document.body.appendChild(_el);
  render(component, _el);
  const text = _el.innerText;
  unmountComponentAtNode(_el);
  document.body.removeChild(_el);
  return text;
}
