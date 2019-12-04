import {combineReducers} from 'redux';
import CourseReducer from './CourseReducer';
import UserReducer from '../../DayFive/Reducer/UserReducer';

const rootReducer = combineReducers({
    courses: CourseReducer,
    user: UserReducer
})

export default rootReducer;
