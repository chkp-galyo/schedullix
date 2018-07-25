
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
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
            hours: {
                from: "08:30",
                to: "17:00"
            }
        },
        {
            isOpen: true,
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
                imgUrl: "https://pngstocks.com/wp-content/uploads/2018/03/cb-background-10.jpeg",
                titleTxt: "....",
                styleObj: {
                    color: "white",
                    background: "red",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center"
                }
            },
            about: {
                isActive: true,
                imgUrl: "....",
                titleTxt: "....",
                mainTxt: "....",
                color: "",
                bgColor: "",
                sizeFont: "",
                font: "",
                bold: "",
                align: "center / left / right"
            },
            schedule: {
                isActive: true,
                color: "",
                colorAvailable: "",
                colorBusy: "",
                bgColor: "",
                sizeFont: "",
                font: "",
                bold: ""
            },
            map: {
                isActive: true,
                titleTxt: "....",
                color: "",
                bgColor: "",
                sizeFont: "",
                font: "",
                bold: "",
                align: "center / left / right"
            }
        }
    }
}
