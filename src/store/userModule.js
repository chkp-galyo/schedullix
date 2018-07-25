import userService from '../services/userService.js'

//------------------------------ ACTIONS ------------------------------
// export const ACT_LOAD_USER = 'todo/actions/loadUser'
//------------------------------ GETTERS ------------------------------
export const GETTER_AVAILABLE_TIME_LIST = 'user/getters/availableTimeList'
export const GETTER_USER = 'user/getters/user'
//------------------------------ MUTATIONS ----------------------------
// export const MUT_SET_USER = 'todo/mutations/setUser'

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
        },
        [GETTER_AVAILABLE_TIME_LIST]: (state) => (date) => {
            return date;
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