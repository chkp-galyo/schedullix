
export default {
    getUser
}


function getUser() {
    return {
        id: "fdgdfg",
        userName: "IdanHakim123",
        password: "123456",
        phone: "054-2886838",
        businessName: "AliBaba Hakim",
        location: {
            lat: 6354343,
            lng: 3453453
        },
        timeAppt: 30,
        workingHours: [{
            isOpen: true,
            day: 'Mon',
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            day: 'Tue',
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            day: 'Wed',
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            day: 'Thu',
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            day: 'Fri',
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            day: 'Sat',
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            day: 'Sun',
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        ],
        customers: [{
            name: "AliBaba",
            Phone: "065-346346",
            time: 54354354,
            isDone: true
        },
        {
            "name": "AliJounson",
            "Phone": "065-45654654",
            "time": 45245354,
            "isDone": false
        }
        ],

        configElements: {
            header: {
                isActive: true,
                titleTxt: "....",
                styleObj: {
                    color: "white",
                    background: "red",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center",
                    'background-image': "url('https://pngstocks.com/wp-content/uploads/2018/03/cb-background-10.jpeg')",
                }
            },
            about: {
                isActive: true,
                imgUrl: "http://laboutiquedelabiere.com/image/image%20biere/barbar/RJ-Barbar-200.jpg",
                titleTxt: "About us!",
                mainTxt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                styleObj: {
                    color: "white",
                    background: "red",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center",
                }
            },
            schedule: {
                isActive: true,
                colorHeader: "blue",
                colorAvailable: "",
                colorBusy: "",
                styleObj: {
                    color: "white",
                    background: "red",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center",
                    'background-image': "url('https://pngstocks.com/wp-content/uploads/2018/03/cb-background-10.jpeg')",
                },
                styleDate: {
                    colorHeader: "white",
                    colorBody: "red",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center",
                },
                styleApptsList: {
                    color: "white",
                    background: "red",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center",
                }
            },
            map: {
                isActive: true,
                titleTxt: "....",
                styleObj: {
                    color: "white",
                    background: "red",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center",
                    'background-image': "url('https://pngstocks.com/wp-content/uploads/2018/03/cb-background-10.jpeg')",
                }
            }
        }
    }
}
