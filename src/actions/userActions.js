export const reset = (dispatch) => {
    dispatch({type:'RESET'});
};
export const setName = (name, dispatch) => {
    dispatch({type:'SET_NAME', payload:{name}});
};
export const setWorkoutDays = (workoutDays, dispatch) => {
    dispatch({type:'SET_WORKOUTDAYS', payload:{workoutDays}});
};
export const setLevel = (level, dispatch) => {
    dispatch({type:'SET_LEVEL', payload:{level}});
};
export const setLastWorkout = (lastWorkout, dispatch) => {
    dispatch({type:'SET_LASTWORKOUT', payload:{lastWorkout}});
}

export const addWorkout = (workout, dispatch) => {
    dispatch({type:'ADD_WORKOUT', payload:{workout}});
}
export const updateWorkout = (workout, dispatch) => {
    dispatch({type:'UPDATE_WORKOUT', payload:{workout}});
}
export const delWorkout = (workout, dispatch) => {
    dispatch({type:'DEL_WORKOUT', payload:{workout}});
}

export const addProgress = (date, dispatch) => {
    dispatch({type:'ADD_PROGRESS', payload:{date}});
}
export const delProgress = (date, dispatch) => {
    dispatch({type:'DEL_PROGRESS', payload:{date}});
}