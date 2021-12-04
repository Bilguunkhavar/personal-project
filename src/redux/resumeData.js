import { RESUME_DATA } from '../shared/resumeData';

export const ResumeData = (state = RESUME_DATA, action) => {
    switch (action.type) {
        case 'SET_RESUME_DATA':
            console.log('sadfasdf', action);
            return { ...action.payload }
        default:
            return state;
    }
};