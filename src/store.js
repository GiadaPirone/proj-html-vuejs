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

    articoli:[
        {
            img:"../assets/motivation-blog-04-480x325.jpg",
            data:"May 13,2020",
            titolo:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
            anteprima: "Ipsum dolor sit amet consectetur ",
        },
        {
            img:"../assets/motivation-blog-03-480x325.jpg",
            data:"May 13,2020",
            titolo:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
            anteprima: "Ipsum dolor sit amet consectetur adipisicing. ",
        },
        {
            img:"../assets/motivation-blog-02-480x325.jpg",
            data:"May 13,2020",
            titolo:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            anteprima: "Nostrum ducimus amet ",
        },
        {
            img:"../assets/motivation-blog-01-480x325.jpg",
            data:"May 13,2020",
            titolo:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            anteprima: "Nostrum ducimus amet consectetur.",
        },
    ]

    
})