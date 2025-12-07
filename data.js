// data.js

// --- PART 1: COUNCIL PROFILES (Static Data) ---
const councilsData = [
    {
        id: "cultural",
        name: "Cultural Council",
        logo: "images/cult/cult-logo.jpg",
        description: "The Cultural Council organizes all major cultural festivals, workshops, and events, bringing the campus to life with music, dance, and art.",
        famousEvents: [
            { name: "KNIT's Got Talent", description: "The freshers' talent hunt event." }
        ],
        instagram: "https://instagram.com/knit_cultural",
        youtube: "https://youtube.com/knitcultural",
        members: [
            { name: "Avinash Nishad", post: "Secretary" },
            { name: "Riya Sonkar", post: "Secretary" },
            { name: "Aditya Mishra", post: "Joint Secretary" },
            { name: "Vidisha Chaudhary", post: "Joint Secretary" }
        ],
        galleryImages: ["images/cult/gallery-1.jpg"]
    },
    {
        id: "literary",
        name: "Literary Council",
        logo: "images/lit/lit-logo.jpg",
        description: "Home to the wordsmiths, debaters, and quizzes. The Literary Council fosters a love for language and critical thinking through various events.",
        famousEvents: [
            { name: "Vagmita", description: "The annual debate and elocution competition." }
        ],
        instagram: "https://instagram.com/knit_literary",
        youtube: null,
        members: [
            { name: "Vaibhav Pandey", post: "Secretary" },
            { name: "Anushka Shekhar", post: "Secretary" },
            { name: "Venketesh Shukla", post: "Joint Secretary" },
            { name: "Yashi Yadav", post: "Joint Secretary" },
            { name: "Amritansh Pandey", post: "Joint Secretary" }
        ],
        galleryImages: ["images/lit/gallery-1.jpg"]
    },
    {
        id: "pfac",
        name: "Photography & Fine Arts Club (PFAC)",
        logo: "images/pfac/pfac-logo.jpg",
        description: "Capturing the beauty of campus life and promoting creativity. PFAC is the hub for artists, photographers, and designers.",
        famousEvents: [
            { name: "Cosmos", description: "Art exhibition and photography contest." }
        ],
        instagram: "https://instagram.com/knit_pfac",
        youtube: null,
        members: [
            { name: "Aman Kumar", post: "Secretary" },
            { name: "Dia Chaudhary", post: "Secretary" },
            { name: "Pushpendra Singh", post: "Joint Secretary" },
            { name: "Amna Zehra", post: "Joint Secretary" }
        ],
        galleryImages: ["images/pfac/gallery-1.jpg"]
    },
    {
        id: "sports",
        name: "Sports Council",
        logo: "images/sports/sports-logo.jpg",
        description: "Managing all sporting activities, from inter-branch tournaments to our annual sports fest, keeping the campus active and competitive.",
        famousEvents: [
            { name: "Tvaran", description: "Annual sports meet." }
        ],
        instagram: "https://instagram.com/knit_sports",
        youtube: null,
        members: [
            { name: "Deepanshu Pandey", post: "Secretary" },
            { name: "Manasvi Swaroop", post: "Secretary" },
        ],
        galleryImages: []
    },
    {
        id: "tech-robo",
        name: "Tech & Robo Council",
        logo: "images/tech/tech-logo.jpg",
        description: "The heart of innovation on campus. We build robots, host hackathons, and explore the latest in technology and coding.",
        famousEvents: [
            { name: "Tav", description: "Technical festival." }
        ],
        instagram: "https://instagram.com/knit_techrobo",
        youtube: null,
        members: [],
        galleryImages: []
    }
];


// --- PART 2: THE MASTER EVENTS LIST (Calendar Data) ---
// Date Format must be: "YYYY-MM-DD"

// In data.js

const calendarEvents = [
    {
        title: "Freshers' Auditions",
        date: "2025-11-05", // Make sure this matches your current month to see it!
        councilId: "cultural",
        type: "Freshers Only",
        description: "The stage is yours! We are looking for the next generation of dancers, singers, and actors. Come prepared with a 2-minute performance.",
        
        // --- NEW DETAILS ---
        time: "5:00 PM - 8:00 PM",
        venue: "Main Auditorium",
        contactName: "Aarav Singh",
        contactNumber: "+91 98765 43210",
        regLink: "https://forms.google.com/example",
        status: "Open"
    },
    {
        title: "Inter-Branch Cricket",
        date: "2025-11-08",
        councilId: "sports",
        type: "Tournament",
        description: "The battle for the branch supremacy begins. CSE vs IT qualifying match.",
        
        // --- NEW DETAILS ---
        time: "9:00 AM Onwards",
        venue: "College Ground",
        contactName: "Aman Gupta",
        contactNumber: "+91 91234 56789",
        regLink: "#",
        status: "Closed"
    },
    // ... Add similar details to your other events
];
// const calendarEvents = [
//     // NOV 2025 EVENTS (Simulated Current Month)
//     {
//         title: "Freshers' Auditions",
//         date: "2025-11-05",
//         councilId: "cultural", // Links to Cultural Council
//         type: "Freshers Only",
//         description: "Auditions for first-year students in dance and music."
//     },
//     {
//         title: "Cricket Selection",
//         date: "2025-11-08",
//         councilId: "sports", // Links to Sports Council
//         type: "Open for All",
//         description: "Selection trials for the college cricket team."
//     },
//     {
//         title: "Robotics Workshop",
//         date: "2025-11-12",
//         councilId: "tech-robo", // Links to Tech Council
//         type: "Workshop",
//         description: "Introduction to Arduino and sensors."
//     },
//     {
//         title: "Anokhi Day 1",
//         date: "2025-11-20",
//         councilId: "cultural",
//         type: "Major Event",
//         description: "Grand inauguration of the cultural fest."
//     },
//     {
//         title: "Anokhi Day 2",
//         date: "2025-11-21",
//         councilId: "cultural",
//         type: "Major Event",
//         description: "Battle of bands and fashion show."
//     },
//     {
//         title: "Yoga Morning",
//         date: "2025-11-25",
//         councilId: "sports",
//         type: "Wellness",
//         description: "Morning yoga session at the main ground."
//     }
// ];