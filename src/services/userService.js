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
            lat: 36.778259,
            lng: -119.417931
        },
        timePerCustomer: 30,
        workingHours: [{
                isOpen: true,
                day: 'Mon',
                hoursOpen: {
                    startTime: {
                        hours: 8,
                        minutes: 30
                    },
                    endTime: {
                        hours: 17,
                        minutes: 30
                    }
                }
            },
            {
                isOpen: true,
                day: 'Tue',
                hoursOpen: {
                    startTime: {
                        hours: 8,
                        minutes: 30
                    },
                    endTime: {
                        hours: 17,
                        minutes: 30
                    }
                }
            },
            {
                isOpen: true,
                day: 'Wed',
                hoursOpen: {
                    startTime: {
                        hours: 8,
                        minutes: 30
                    },
                    endTime: {
                        hours: 17,
                        minutes: 30
                    }
                }
            },
            {
                isOpen: true,
                day: 'Thu',
                hoursOpen: {
                    startTime: {
                        hours: 8,
                        minutes: 30
                    },
                    endTime: {
                        hours: 17,
                        minutes: 30
                    }
                }
            },
            {
                isOpen: true,
                day: 'Fri',
                hoursOpen: {
                    startTime: {
                        hours: 8,
                        minutes: 30
                    },
                    endTime: {
                        hours: 17,
                        minutes: 0
                    }
                }
            },
            {
                isOpen: true,
                day: 'Sat',
                hoursOpen: {
                    startTime: {
                        hours: 8,
                        minutes: 30
                    },
                    endTime: {
                        hours: 17,
                        minutes: 30
                    }
                }
            },
            {
                isOpen: true,
                day: 'Sun',
                hoursOpen: {
                    startTime: {
                        hours: 8,
                        minutes: 30
                    },
                    endTime: {
                        hours: 17,
                        minutes: 30
                    }
                }
            },
        ],
        customers: [{
                name: "AliBaba",
                Phone: "065-423",
                time: 1532583000000,
                isDone: true
            },
            {
                "name": "Pipi",
                "Phone": "065gdfgdfg54",
                "time": 1532599200000,
                "isDone": false
            }
        ],

        configElements: {
            header: {
                isActive: true,
                titleTxt: "Welcom to my Bussiness!",
                styleObj: {
                    color: "white",
                    background: "red",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center",
                    'background-image': "url('https://media.ultimahora.com/adjuntos/161/imagenes/000/705/0000705263.jpg')",
                }
            },
            about: {
                isActive: true,
                imgUrl: "http://www.mimejornegocio.com/wp-content/uploads/2017/08/Barbershop_034smoke_c_Lupi_Spuma-2-570x342.jpg",
                titleTxt: "About us:",
                mainTxt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                styleObj: {
                    color: "white",
                    background: "#4b3e3b",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "200",
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
                    background: "#4b3e3b",
                    'font-size': "16px",
                    'font-family': "Arial",
                    'font-weight': "700",
                    'text-align': "center",
                },
                styleDate: {
                    colorHeader: "brown",
                    landscape: true,
                    dark: true,
                    light: false,
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