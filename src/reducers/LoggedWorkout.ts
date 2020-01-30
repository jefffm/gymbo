export { }

export interface ILoggedWorkout {

}

const initialState: ILoggedWorkout = {
}

const LoggedWorkout = (
    state: ILoggedWorkout = initialState,
    action: any
): ILoggedWorkout => {
    // TODO: add plate, remove plate, update unit, update barWeight
    return state
}
export default LoggedWorkout