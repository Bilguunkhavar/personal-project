import { createStore, combineReducers } from 'redux';
import { ResumeData } from './resumeData';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            resumeData: ResumeData
        }),
    );

    return store;
};