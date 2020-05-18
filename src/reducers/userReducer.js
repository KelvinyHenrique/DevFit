const initialState = {
    name: '',
    level:'', //Beginner, Intermediate, advanced
    workoutDays:[], //ARRAY DO DIA 1 AO DIA 0
    myWorkouts: [],
    lastWorkout:'',//ID
    dailyProgress: ['2019-09-13', '2019-09-12']
};


export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_NAME':
                return {...state, name:action.payload.name};
            break;
    
        default:
            return state;
            break;
    }

}