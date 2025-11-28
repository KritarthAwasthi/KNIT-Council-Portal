document.addEventListener("DOMContentLoaded", function() {
    
    // Elements
    const grid = document.getElementById("calendar-grid");
    const monthDisplay = document.getElementById("current-month-year");
    const prevBtn = document.getElementById("prev-month");
    const nextBtn = document.getElementById("next-month");
    const modal = document.getElementById("event-modal");
    const closeModalBtn = document.getElementById("close-modal");

    // Colors for different councils
    const councilColors = {
        "cultural": "bg-red-500",
        "sports": "bg-green-500",
        "tech-robo": "bg-blue-600",
        "literary": "bg-yellow-500",
        "pfac": "bg-purple-500",
        "iei": "bg-orange-500",
        "iisf": "bg-indigo-500"
    };

    // State
    let currentDate = new Date(); // Starts at today (Nov 2025)
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // 1. MERGE DATA: Combine Events with Council Info
    const fullEventsList = calendarEvents.map(event => {
        const councilInfo = councilsData.find(c => c.id === event.councilId);
        return {
            ...event,
            councilName: councilInfo ? councilInfo.name : "Unknown",
            councilLogo: councilInfo ? councilInfo.logo : "images/logos/knit-logo.jpg"
        };
    });

    // 2. RENDER FUNCTION
    function renderCalendar(month, year) {
        grid.innerHTML = "";
        
        // Update Title
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        monthDisplay.innerText = `${monthNames[month]} ${year}`;

        // Calculations
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Empty slots for start of month
        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement("div");
            empty.className = "h-32 bg-gray-50 border border-gray-100";
            grid.appendChild(empty);
        }

        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const todaysEvents = fullEventsList.filter(e => e.date === dateString);

            // Cell Wrapper
            const cell = document.createElement("div");
            cell.className = "h-32 border border-gray-200 bg-white p-2 relative group hover:bg-blue-50 transition";
            cell.innerHTML = `<span class="text-gray-700 font-bold block mb-1">${day}</span>`;

            // Dots Container
            if (todaysEvents.length > 0) {
                const dotsContainer = document.createElement("div");
                dotsContainer.className = "flex flex-wrap gap-1";

                todaysEvents.forEach(event => {
                    const colorClass = councilColors[event.councilId] || "bg-gray-500";
                    
                    // Dot Wrapper (Relative for Tooltip)
                    const wrapper = document.createElement("div");
                    wrapper.className = "relative group/dot"; // sub-group for tooltip

                    // The Dot
                    const dot = document.createElement("div");
                    dot.className = `w-3 h-3 rounded-full ${colorClass} cursor-pointer hover:scale-125 transition-transform`;

                    // The Tooltip (Visible on Hover)
                    const tooltip = document.createElement("div");
                    tooltip.className = "hidden group-hover/dot:block absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-xs rounded shadow-xl p-2 pointer-events-none";
                    tooltip.innerHTML = `
                        <p class="font-bold text-blue-200 mb-0.5">${event.councilName}</p>
                        <p class="font-semibold text-white">${event.title}</p>
                        <span class="block mt-1 text-[10px] bg-gray-700 px-1 rounded inline-block">${event.type}</span>
                    `;

                    wrapper.appendChild(dot);
                    wrapper.appendChild(tooltip);
                    
                    // Click to Open Modal
                    dot.addEventListener("click", (e) => {
                        e.stopPropagation();
                        openModal(event);
                    });

                    dotsContainer.appendChild(wrapper);
                });
                cell.appendChild(dotsContainer);
            }
            grid.appendChild(cell);
        }
    }

    // Modal Logic
    function openModal(event) {
        document.getElementById("modal-event-title").innerText = event.title;
        document.getElementById("modal-event-desc").innerText = event.description;
        document.getElementById("modal-event-type").innerText = event.type;
        document.getElementById("modal-council-name").innerText = event.councilName;
        document.getElementById("modal-council-logo").src = event.councilLogo;
        
        const d = new Date(event.date);
        document.getElementById("modal-event-date").innerText = d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
        
        modal.classList.remove("hidden");
    }

    closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.add("hidden"); });

    // Buttons
    prevBtn.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) { currentMonth = 11; currentYear--; }
        renderCalendar(currentMonth, currentYear);
    });
    nextBtn.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) { currentMonth = 0; currentYear++; }
        renderCalendar(currentMonth, currentYear);
    });

    // Start
    renderCalendar(currentMonth, currentYear);
});