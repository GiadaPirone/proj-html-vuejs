import{ reactive} from 'vue'

export const store = reactive({
    onlineCourses:[
        {
            img: "../assets/motivation-course-06-480x298.jpg",
            prezzo: "$30.00",
            descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            lezioni:"3 lessons",
            studenti:"50 Students"
        },
        {
            img: "../assets/motivation-course-05-480x298.jpg",
            prezzo: "$30.00",
            descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            lezioni:"1 lessons",
            studenti:"50 Students"
        },
        {
            img: "../assets/motivation-course-04-480x298.jpg",
            prezzo: "$20.00",
            descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            lezioni:"5 lessons",
            studenti:"50 Students"
        },
        {
            img: "../assets/motivation-course-03-480x298.jpg",
            prezzo: "$20.00",
            descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            lezioni:"18 lessons",
            studenti:"50 Students"
        },
        {
            img: "../assets/motivation-course-02-480x298.jpg",
            prezzo: "$25.99",
            descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            lezioni:"19 lessons",
            studenti:"50 Students"
        },
        {
            img: "../assets/motivation-course-01-480x298.jpg",
            prezzo: "$19.99",
            descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            lezioni:"17 lessons",
            studenti:"50 Students"
        },
    ],

    statistiche:[
        {
            dato: "1.926",
            testo: "finished session",
        },
        {
            dato:"100%",
            testo: "satisfaction rate",
        },
        {
            dato:"3092+",
            testo: "enrolled learners",
        },
        {
            dato:"200",
            testo: "online instructors",
        },
    ],
})