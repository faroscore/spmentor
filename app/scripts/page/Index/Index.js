import _Page from '../_Base';
import template from './Index.jade';
import './Index.css';
import img from 'images/cat.png';
console.log(img);
export default _Page.extend({

  template,

  className: 'p-index',
});
