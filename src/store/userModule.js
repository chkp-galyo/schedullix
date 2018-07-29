import userService from '../services/userService.js'

//------------------------------ ACTIONS ------------------------------
export const ACT_LOAD_USER = 'user/actions/loadUser'
export const ACT_ADD_CUSTOMER = 'user/actions/addCustomer'
export const ACT_ADD_USER = 'user/actions/addUser'
export const ACT_UPDATE_USER = 'user/actions/updateUser'
//------------------------------ GETTERS ------------------------------
export const GETTER_TIMES_FOR_DATE = 'user/getters/timesForDate'
export const GETTER_CUSTOMERS_FOR_DATE = 'user/getters/customersForDate'
export const GETTER_USER = 'user/getters/user'
export const GETTER_USER_ID = 'user/getters/userId'

//------------------------------ MUTATIONS ----------------------------
export const MUT_ADD_CUSTOMER = 'user/mutations/addCustomer'
export const MUT_UPDATE_ABOUT_TXT = 'user/mutations/updateAboutTxt'
export const MUT_UPDATE_HEADER_IMG = 'user/mutations/updateHeaderImg'
export const MUT_SET_USER = 'user/mutations/setUser'
export const MUT_SET_USER_LOC = 'user/mutations/setUserLocation'
export const MUT_UPDATE_USER = 'user/mutations/updateUser'
export const MUT_UPDATE_WORKING_HOURS = 'user/mutations/updateWorkingHours'
export const MUT_UPDATE_COLOR_CMP = 'user/mutations/updateTextColor'
export const MUT_UPDATE_BG_COLOR_CMP = 'user/mutations/updateBackgroundColor'
export const MUT_UPDATE_IMG = 'user/mutations/updateImage'

export default {
    state: {
        user: null
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
            return state.user;
        },

        [GETTER_USER_ID](state) {
            return state.user._id
        },

        [GETTER_CUSTOMERS_FOR_DATE]: (state) => (dateSelectedTimestamp) => {
            return state.user.customers.filter(customer => {
                return new Date(customer.time).toLocaleDateString() === new Date(dateSelectedTimestamp).toLocaleDateString()
            });
        }
    },
    mutations: {
        [MUT_ADD_CUSTOMER](state, payload) {
            state.user.customers.unshift(payload.customer);
        },

        [MUT_SET_USER_LOC](state, payload) {
            state.user.location = payload.userLocation
        },

        [MUT_UPDATE_ABOUT_TXT](state, {aboutTxt}) {
            state.user.configElements.about.mainTxt = aboutTxt
        },

        [MUT_UPDATE_HEADER_IMG](state, {imgUrl}) {
            state.user.configElements.header.styleObj['background-image'] = `url(${imgUrl})`
            console.log(state.user)
        },

        [MUT_SET_USER](state, {user}) {
            state.user = user;
        },
        [MUT_UPDATE_WORKING_HOURS](state, {workingHours}) {
            console.log('work hours', workingHours)
            state.user.workingHours = workingHours
            console.log('state store', state.user.workingHours)
        },
        [MUT_UPDATE_COLOR_CMP](state, payload) {
            state.user.configElements[payload.cmp].styleObj[payload.propertyToUpdate] = payload.value
        },
        [MUT_UPDATE_IMG](state, payload) {
            state.user.configElements[payload.cmp].styleObj['background-image'] = `url(${payload.imgUrl})`
        }
    },
    actions: {
        [ACT_LOAD_USER](context, payload) {
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
                .then(res => {
                    context.commit({
                        type: MUT_SET_USER,
                        user: res.ops[0]
                    })
                    return res.ops[0]
                })
        },

        [ACT_ADD_CUSTOMER](context, payload) {
            return userService.addCustomer(payload.userId, payload.customer)
            .then(() => {
                context.commit({
                    type: MUT_ADD_CUSTOMER,
                    customer: payload.customer
                })
            })
        },

        [ACT_UPDATE_USER](context, payload) {
            return userService.updateUser(payload.user)
                .then(() => {
                    context.commit({
                        type: MUT_SET_USER,
                        user: payload.user
                    })
                })
        }
    }
}

function generatorTimestamp(dateObj, strTime) {
    return new Date(`${dateObj.getMonth()+1}/${dateObj.getDate()}/${dateObj.getFullYear()} ${strTime}`).getTime();
}