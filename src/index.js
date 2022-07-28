import _ from 'lodash';

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');

  return element;
};

document.body.appendChild(component());
