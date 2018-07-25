import userService from '../services/userService.js'

// //------------------------------ ACTIONS ------------------------------
// export const ACT_LOAD_USER = 'todo/actions/loadUser'
// export const ACT_ADD_ACTIVITY = 'todo/actions/addActivity'
// export const ACT_UPDATE_USER = 'todo/actions/updateUser'
// //------------------------------ GETTERS ------------------------------
// export const GETTER_USER_NAME = 'todo/getters/userName'
// export const GETTER_PREFS_USER = 'todo/getters/prefsUser'
// export const GETTER_ACTIVITIES_LIST = 'todo/getters/activitiesList'
export const GETTER_USER = 'user/getters/user'
// //------------------------------ MUTATIONS ----------------------------
// export const MUT_SET_USER = 'todo/mutations/setUser'
// export const MUT_ADD_ACTIVITY = 'todo/mutations/addActivity'


export default {
    state: {
        user: userService.getUser()
    },
    mutations: {
        // changeUser(state, payload) {

        //     state.user.fullName = payload.user.fullName;
        //     state.user.prefs = payload.user.prefs;
        // },

        // [MUT_ADD_ACTIVITY](state, payload) {
        //     state.user.activities.unshift(payload.activity);
        // },

        // [MUT_SET_USER](state, {
        //     user
        // }) {
        //     state.user = user;
        // },
    },
    getters: {
        // [GETTER_ACTIVITIES_LIST](state) {
        //     return state.user.activities;
        // },

        // [GETTER_PREFS_USER](state) {
        //     return state.user.prefs;
        // },

        // [GETTER_USER_NAME](state) {
        //     return state.user.fullName;
        // },

        [GETTER_USER](state) {
            return { ...state.user
            };
        }
    },
    actions: {
        // [ACT_LOAD_USER](context, payload) {
        //     return userService.query()
        //         .then(user => {
        //             context.commit({
        //                 type: MUT_SET_USER,
        //                 user
        //             })
        //             return user;
        //         })
        //         .finally(err => {

        //         })
        // },

        // [ACT_ADD_ACTIVITY](context, payload) {
        //     var activity = {
        //         txt: payload.activityTxt,
        //         at: new Date().getTime()
        //     }

        //     return userService.addActivity(activity)
        //         .then(() => {
        //             context.commit({
        //                 type: MUT_ADD_ACTIVITY,
        //                 activity
        //             })
        //         })
        // },


        // [ACT_UPDATE_USER](context, payload) {
        //     return userService.updatePrefsUser(payload.user)
        //         .then(() => {
        //             context.commit({
        //                 type: 'changeUser',
        //                 user: payload.user
        //             })
        //         })
        // }
    }
}