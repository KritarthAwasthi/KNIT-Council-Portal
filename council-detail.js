// council-detail.js

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. GET THE COUNCIL ID FROM THE URL ---
    const params = new URLSearchParams(window.location.search);
    const councilId = params.get("id"); // This will be "cultural", "sports", etc.

    // --- 2. FIND THE CORRECT COUNCIL DATA ---
    // The 'find' method searches the array for the first item that matches the condition.
    const council = councilsData.find(c => c.id === councilId);

    // --- 3. IF NO COUNCIL IS FOUND, SHOW AN ERROR ---
    if (!council) {
        document.body.innerHTML = `<h1 class="text-center text-3xl mt-10">Error: Council not found. <a href="index.html" class="text-blue-600">Go back home</a></h1>`;
        return; // Stop the script
    }

    // --- 4. FILL THE PAGE WITH THE COUNCIL'S DATA ---
    
    // Set the browser tab title
    document.title = `${council.name} - Council Portal`;

    // Fill Header
    document.getElementById("council-logo").src = council.logo;
    document.getElementById("council-name").innerText = council.name;

    // Fill About Section
    document.getElementById("council-description").innerText = council.description;

    // Fill Social Links
    document.getElementById("council-insta").href = council.instagram;
    document.getElementById("council-insta-handle").innerText = `@${council.instagram.split('/')[3] || 'instagram'}`;
    
    // Only show YouTube link if it exists
    const youtubeLink = document.getElementById("council-youtube");
    if (council.youtube) {
        youtubeLink.href = council.youtube;
    } else {
        youtubeLink.style.display = "none"; // Hide the link if no URL
    }

    // Fill Members
    const membersContainer = document.getElementById("council-members");
    membersContainer.innerHTML = ""; // Clear the "Loading..." text
    council.members.forEach(member => {
        membersContainer.innerHTML += `
            <div class="flex items-center space-x-3">
                <img src="images/logos/user-avatar.png" class="h-10 w-10 rounded-full bg-gray-200"> <div>
                    <p class="font-semibold text-gray-800">${member.name}</p>
                    <p class="text-sm text-gray-600">${member.post}</p>
                </div>
            </div>
        `;
    });

    // Fill Events
    const eventsContainer = document.getElementById("council-events");
    eventsContainer.innerHTML = ""; // Clear "Loading..."
    council.famousEvents.forEach(event => {
        eventsContainer.innerHTML += `
            <div>
                <h4 class="text-lg font-semibold text-gray-800">${event.name}</h4>
                <p class="text-gray-600">${event.description}</p>
            </div>
        `;
    });

    // Fill Gallery
    const galleryContainer = document.getElementById("council-gallery");
    galleryContainer.innerHTML = ""; // Clear "Loading..."
    council.galleryImages.forEach(imgSrc => {
        galleryContainer.innerHTML += `
            <img src="${imgSrc}" alt="Gallery image" class="rounded-lg shadow-md object-cover h-40 w-full">
        `;
    });

});