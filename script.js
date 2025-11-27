document.addEventListener("DOMContentLoaded", function() {

    // 1. Find the empty container we made in our HTML
    const container = document.getElementById("council-cards-container");

    // 2. Loop through each council in our 'councilsData' array (from data.js)
    councilsData.forEach(council => {
        
        // 3. Create a new 'div' element for each council card
        const card = document.createElement("div");
        
        // 4. Add the Tailwind CSS classes to the card
        card.className = "bg-white rounded-lg shadow-lg overflow-hidden flex flex-col";

        // 5. Create the inner HTML for the card using the data
        card.innerHTML = `
            <div class="p-6 flex items-center space-x-4">
                <img src="${council.logo}" alt="${council.name} Logo" class="h-20 w-20 rounded-full flex-shrink-0 object-cover">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">${council.name}</h3>
                </div>
            </div>
            <div class="p-6 pt-0 flex-grow">
                <p class="text-gray-600 text-sm mb-6">${council.description}</p>
            </div>
            <div class="p-6 pt-0 bg-gray-50">
                <a href="council.html?id=${council.id}" class="inline-block bg-[#13426b] text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Know More
                </a>
            </div>
        `;
        
        // 6. Add the newly created card to the container
        container.appendChild(card);
    });

});