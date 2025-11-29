document.addEventListener("DOMContentLoaded", function() {
    
    // --- DOM ELEMENTS ---
    const grid = document.getElementById("calendar-grid");
    const monthDisplay = document.getElementById("current-month-year");
    const prevBtn = document.getElementById("prev-month");
    const nextBtn = document.getElementById("next-month");

    // Sidebar Elements
    const stateEmpty = document.getElementById("state-empty");
    const stateContent = document.getElementById("state-content");
    const detailDate = document.getElementById("detail-date");
    const detailContainer = document.getElementById("event-details-container");

    // --- CONFIGURATION ---
    const councilStyles = {
        "cultural": { bg: "bg-purple-500", text: "text-white", border: "border-purple-500", light: "bg-purple-50" },
        "literary": { bg: "bg-orange-100", text: "text-orange-900", border: "border-orange-300", light: "bg-orange-50" }, 
        "sports":   { bg: "bg-sky-400",    text: "text-white", border: "border-sky-400", light: "bg-sky-50" },
        "tech-robo":{ bg: "bg-gray-800",   text: "text-white", border: "border-gray-800", light: "bg-gray-100" },
        "pfac":     { bg: "bg-pink-500",   text: "text-white", border: "border-pink-500", light: "bg-pink-50" },
        "iei":      { bg: "bg-blue-600",   text: "text-white", border: "border-blue-600", light: "bg-blue-50" },
        "iisf":     { bg: "bg-indigo-600", text: "text-white", border: "border-indigo-600", light: "bg-indigo-50" }
    };

    // State
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let selectedDate = null;

    // --- DATA MERGING ---
    const fullEventsList = calendarEvents.map(event => {
        const councilInfo = councilsData.find(c => c.id === event.councilId);
        return {
            ...event,
            councilName: councilInfo ? councilInfo.name : "Unknown Council",
            councilLogo: councilInfo ? councilInfo.logo : "images/logos/knit-logo.jpg",
            // Defaults if missing in data.js
            time: event.time || "TBA",
            venue: event.venue || "TBA",
            contactName: event.contactName || "Council Head",
            contactNumber: event.contactNumber || "Not Available"
        };
    });

    // --- RENDER CALENDAR ---
    function renderCalendar(month, year) {
        grid.innerHTML = "";
        
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        monthDisplay.innerText = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Empty Slots
        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement("div");
            empty.className = "border-b border-r border-gray-100 bg-gray-50";
            grid.appendChild(empty);
        }

        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const todaysEvents = fullEventsList.filter(e => e.date === dateString);
            
            const cell = document.createElement("div");
            let cellClasses = "border-b border-r border-gray-100 relative cursor-pointer transition-all hover:brightness-95 group h-full min-h-[100px]"; // Added min-h
            
            let contentHTML = `<span class="absolute top-2 left-2 font-bold text-sm z-10">${day}</span>`;
            
            if (todaysEvents.length > 0) {
                const mainEvent = todaysEvents[0];
                const style = councilStyles[mainEvent.councilId] || { bg: "bg-gray-400", text: "text-white" };
                
                cellClasses += ` ${style.bg} ${style.text}`;
                contentHTML += `
                    <div class="h-full w-full flex flex-col justify-center items-center text-center p-2 pt-6">
                        <span class="text-sm font-bold leading-tight line-clamp-2">
                            ${mainEvent.title}
                        </span>
                        ${todaysEvents.length > 1 ? `<span class="text-xs opacity-90 mt-1 bg-black bg-opacity-20 px-2 rounded-full">+${todaysEvents.length - 1} more</span>` : ''}
                    </div>
                `;
            } else {
                cellClasses += " bg-white text-gray-700 hover:bg-gray-50";
            }

            if (selectedDate === dateString) {
                cellClasses += " ring-4 ring-inset ring-blue-500 z-20";
            }

            cell.className = cellClasses;
            cell.innerHTML = contentHTML;

            cell.addEventListener("click", () => {
                selectedDate = dateString;
                renderCalendar(currentMonth, currentYear);
                updateSidebar(dateString, todaysEvents);
            });

            grid.appendChild(cell);
        }
    }

    // --- THE NEW DETAILED SIDEBAR ---
    function updateSidebar(dateStr, events) {
        stateEmpty.classList.add("hidden");
        stateContent.classList.remove("hidden");

        const dateObj = new Date(dateStr);
        const niceDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        detailDate.innerText = niceDate;

        detailContainer.innerHTML = "";

        if (events.length === 0) {
            detailContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center h-64 text-gray-400">
                    <svg class="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p class="text-lg font-medium">No events scheduled</p>
                    <p class="text-sm">Enjoy your day off!</p>
                </div>
            `;
            return;
        }

        events.forEach(event => {
            const style = councilStyles[event.councilId] || { text: "text-gray-600", border: "border-gray-300", light: "bg-gray-50" };
            
            const card = document.createElement("div");
            card.className = "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6";

            card.innerHTML = `
                <div class="h-3 w-full ${style.bg}"></div>

                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center space-x-3">
                            <img src="${event.councilLogo}" class="h-10 w-10 rounded-full border border-gray-100 object-cover">
                            <div>
                                <p class="text-xs font-bold uppercase tracking-wider text-gray-500">${event.councilName}</p>
                                <span class="inline-block bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full mt-1">${event.type}</span>
                            </div>
                        </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-800 leading-tight mb-4">${event.title}</h2>

                    <div class="grid grid-cols-2 gap-3 mb-6">
                        <div class="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <p class="text-xs text-gray-400 uppercase font-bold mb-1">Time</p>
                            <div class="flex items-center text-gray-700 font-semibold text-sm">
                                <svg class="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                ${event.time}
                            </div>
                        </div>
                        <div class="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <p class="text-xs text-gray-400 uppercase font-bold mb-1">Venue</p>
                            <div class="flex items-center text-gray-700 font-semibold text-sm">
                                <svg class="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                ${event.venue}
                            </div>
                        </div>
                    </div>

                    <div class="mb-6">
                        <p class="text-xs text-gray-400 uppercase font-bold mb-2">Description</p>
                        <p class="text-gray-600 text-sm leading-relaxed">${event.description}</p>
                    </div>

                    <div class="mb-6 bg-blue-50 p-4 rounded-lg flex items-center justify-between">
                        <div>
                            <p class="text-xs text-blue-500 uppercase font-bold mb-1">Coordinator</p>
                            <p class="text-sm font-bold text-gray-800">${event.contactName}</p>
                        </div>
                        <div class="text-right">
                             <p class="text-xs text-blue-500 uppercase font-bold mb-1">Contact</p>
                             <a href="tel:${event.contactNumber}" class="text-sm font-bold text-gray-800 hover:text-blue-600 flex items-center">
                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                ${event.contactNumber}
                             </a>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <a href="${event.regLink || '#'}" class="flex items-center justify-center bg-gray-900 hover:bg-black text-white text-sm font-bold py-3 rounded-lg transition-colors">
                            Register Now
                        </a>
                        <a href="#" class="flex items-center justify-center border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-bold py-3 rounded-lg transition-colors">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Resources
                        </a>
                    </div>

                </div>
            `;
            detailContainer.appendChild(card);
        });
    }

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

    renderCalendar(currentMonth, currentYear);
});