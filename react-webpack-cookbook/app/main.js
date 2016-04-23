import React from 'react';
import Hello from './component.js';
import './main.css';

main();

function main() {
  React.render(<Hello />, document.getElementById('app'));
}
