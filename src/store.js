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
    ],

    icone:[
        "fa-brands fa-twitter",
        "fa-brands fa-facebook-f",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin-in"
    ],

    explore:[
        "Start here",
        "Blog",
        "About us",
        "Succes story",
        "Courses",
        "Contact us",

    ],

    informazioni: [
        "Membership",
        "Purchase guide",
        "Privacy policy",
        "Terms of service",
    ],

    recensioni:[
        {
            storia: "I am free to learn at my own pace, follow my own schedule and choos the subject i want to learn from the syllabus. Great study portal for people like me.",
            img: "../assets/testimonial-avata-02.jpg",
            name:"Mina Hollace",
            professione: "/Freelancer"
        },
        {
            storia:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nesciunt quasi, sint in eaque non laboriosam molestiae eos est, excepturi illo cupiditate rerum deserunt. Corporis, quaerat.",
            img:"../assets/testimonial-avata-03.jpg",
            name:"Harry ",
            professione:"/Project Manager",

        },
        {
            storia:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nesciunt quasi, sint in eaque non laboriosam molestiae eos est, excepturi illo cupiditate rerum deserunt. Corporis, quaerat.",
            img:"../assets/testimonial-avata-01.jpg",
            name:"Jacob",
            professione:"/Data Scientist",

        },
        {
            storia:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nesciunt quasi, sint in eaque non laboriosam molestiae eos est, excepturi illo cupiditate rerum deserunt. ",
            img:"../assets/testimonial-avata-04.jpg",
            name:"	Oliver",
            professione:"/SEO Specialist",

        },
    ]

    
})