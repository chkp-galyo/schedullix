import userService from '../services/userService.js'

//------------------------------ ACTIONS ------------------------------
export const ACT_LOAD_USER = 'user/actions/loadUser'
export const ACT_ADD_CUSTOMER = 'user/actions/addCustomer'
export const ACT_ADD_USER = 'user/actions/addUser'
//------------------------------ GETTERS ------------------------------
export const GETTER_TIMES_FOR_DATE = 'user/getters/timesForDate'
export const GETTER_CUSTOMERS_FOR_DATE = 'user/getters/customersForDate'
export const GETTER_USER = 'user/getters/user'
//------------------------------ MUTATIONS ----------------------------
export const MUT_ADD_CUSTOMER = 'user/mutations/addCustomer'
export const MUT_UPDATE_ABOUT_TXT = 'user/mutations/updateAboutTxt'
export const MUT_UPDATE_HEADER_IMG = 'user/mutations/updateHeaderImg'
export const MUT_SET_USER = 'user/mutations/setUser'
export const MUT_SET_USER_LOC = 'user/mutations/setUserLocation'

export default {
    state: {
        user: null
    },
    mutations: {
        // changeUser(state, payload) {

        //     state.user.fullName = payload.user.fullName;
        //     state.user.prefs = payload.user.prefs;
        // },

        [MUT_ADD_CUSTOMER](state, payload) {
            state.user.customers.unshift(payload.customer);
        },

        [MUT_SET_USER_LOC](state, payload) {
            state.user.location = payload.userLocation
        },
        [MUT_UPDATE_ABOUT_TXT](state, {
            aboutTxt
        }) {
            state.user.configElements.about.mainTxt = aboutTxt
        },
        [MUT_UPDATE_HEADER_IMG](state, {
            imgUrl
        }) {
            state.user.configElements.header.styleObj['background-image'] = `url(${imgUrl})`
        },
        // [MUT_ADD_ACTIVITY](state, payload) {
        //     state.user.activities.unshift(payload.activity);
        // },

        [MUT_SET_USER](state, {
            user
        }) {
            state.user = user;
        }
    },
    getters: {
        [GETTER_TIMES_FOR_DATE]: (state) => (dateSelectedTimestamp) => {
            var listForDay = [];
            var selectDateObj = new Date(dateSelectedTimestamp);
            var day = state.user.workingHours[selectDateObj.getDay()];
            var endTime = day.hoursOpen.endTime
            var timePerCustomer = state.user.timePerCustomer
            var time = { ...day.hoursOpen.startTime
            };


            listForDay.push({ ...time
            })
            listForDay[listForDay.length - 1].timestamp = generatorTimestamp(selectDateObj, `${time.hours}:${time.minutes}`);

            while (time.hours < endTime.hours ||
                (time.minutes + timePerCustomer < endTime.minutes && time.hours === endTime.hours)) {

                time.minutes += timePerCustomer;
                if (time.minutes >= 60) {
                    time.hours++;
                    time.minutes = 0;
                }
                listForDay.push({ ...time
                })
                listForDay[listForDay.length - 1].timestamp = generatorTimestamp(selectDateObj, `${time.hours}:${time.minutes}`);
            }
            return listForDay;
        },

        [GETTER_USER](state) {
            return { ...state.user
            };
        },

        [GETTER_CUSTOMERS_FOR_DATE]: (state) => (dateSelectedTimestamp) => {
            return state.user.customers.filter(customer => {
                return new Date(customer.time).toLocaleDateString() === new Date(dateSelectedTimestamp).toLocaleDateString()
            });
        }
    },
    actions: {
        [ACT_LOAD_USER](context, payload) {
            console.log('ACT_LOAD_USER :', payload.loginInfo);

            return userService.login(payload.loginInfo)
                .then(user => {
                    context.commit({
                        type: MUT_SET_USER,
                        user
                    })
                    return user;
                })
                .catch(
                    err => {
                        console.log('Wrong user to login!');
                        return err;
                    }
                )
        },

        [ACT_ADD_USER](context, payload) {
            return userService.addUser(payload.user)
                .then((res) => {
                    // console.log(res.ops[0]);
                    context.commit({
                        type: MUT_SET_USER,
                        user: res.ops[0]
                    })
                    return res.ops[0]
                })
        },


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

function generatorTimestamp(dateObj, strTime) {
    return new Date(`${dateObj.getMonth()+1}/${dateObj.getDate()}/${dateObj.getFullYear()} ${strTime}`).getTime();
}