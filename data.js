// data.js

// --- PART 1: COUNCIL PROFILES (Static Data) ---
const councilsData = [
    {
        id: "cultural",
        name: "Cultural Council",
        logo: "images/cult/cult-logo.jpg", // Make sure this image exists!
        description: "The Cultural Council organizes all major cultural festivals, workshops, and events.",
        // We keep famousEvents here just for the 'About Us' text on the profile page
        famousEvents: [
            { name: "Anubhuti", description: "The annual cultural fest." }
        ],
        instagram: "https://instagram.com/knit_cultural",
        youtube: "https://youtube.com/knitcultural",
        members: [
            { name: "Avinash Nishad", post: "Secretary" },
            { name: "Riya Sonkar", post: "Secretary" },
            { name: "Aditya Mishra", post: "Joint Secretary" },
            { name: "Vidisha Chaudhary", post: "Joint Secretary" }
            
        ],
        galleryImages: ["images/cult/gallery-1.jpg"] // Ensure these exist
    },
    {
        id: "sports",
        name: "Sports Council",
        logo: "images/sports/sports-logo.jpg",
        description: "Managing all sporting activities and keeping the campus active.",
        famousEvents: [
            {   name: "Aagaz", description: "Annual sports meet." }
        ],
        instagram: "https://instagram.com/knit_sports",
        youtube: null,
        members: [
            { name: "Aman Gupta", post: "Captain" }
        ],
        galleryImages: []
    },
    {
        id: "tech-robo",
        name: "Tech & Robo Council",
        logo: "images/tech/tech-logo.jpg",
        description: "Innovation, robotics, and coding challenges.",
        famousEvents: [],
        instagram: "",
        youtube: null,
        members: [],
        galleryImages: []
    }
    // ... You can add your other councils (PFAC, IEI, etc.) here
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