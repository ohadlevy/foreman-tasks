import React from 'react';
import ReactDOM from 'react-dom';
import TaskProgress from './components/TaskProgress';

const reactNode = document.querySelector('#content');

if (reactNode) {
  ReactDOM.render(
    <div>
      <TaskProgress percent="15"/>
    </div>,
    reactNode
  );
}
