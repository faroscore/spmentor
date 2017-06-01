import {combineReducers} from 'redux';

import lib from "./lib.js"
import filter from "./filter.js"
import changing_book from "./changing_book.js"

export default combineReducers({lib,filter,changing_book});
