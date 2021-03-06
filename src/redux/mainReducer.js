import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth32971Reducer from '../features/EmailAuth32971/redux/reducers';
import EmailAuth32943Reducer from '../features/EmailAuth32943/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth32971: EmailAuth32971Reducer,
EmailAuth32943: EmailAuth32943Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});