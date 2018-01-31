export const FILTER_COURSES = 'courses/FILTER';

export function filterCourses(searchText:string) {
    //this returns an action object
    return {
        type: FILTER_COURSES,
        searchText
    }
}