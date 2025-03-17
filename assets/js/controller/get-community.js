import { fillCryptoCommunity } from "../temp/community.js";

export function fillCommunity(response) {
    console.log("Filling community cards with values:", response);

    const values = response.data || []; 
    const itemsPerPage = 10; 
    let currentPage = 1;

    const renderPage = (page) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentData = values.slice(start, end);

        const container = document.getElementById("fillcommunity");
        container.innerHTML = ""; 
        if (currentData.length === 0) {
            container.innerHTML = `
                <div class="text-center">
                    <img src="https://nekowawolf.xyz/admin/assets/img/pixchan.png" alt="No data found" class="mx-auto w-44 h-44">
                    <p class="text-gray-500 mt-4">No data available.</p>
                </div>
            `;

            document.querySelector("#pagination span").innerHTML = `
                Showing <span class="font-semibold text-white">0</span> to 
                <span class="font-semibold text-white">0</span> of 
                <span class="font-semibold text-white">0</span> Entries
            `;
    
            document.querySelector("#pagination .prev").disabled = true;
            document.querySelector("#pagination .next").disabled = true;

        } else {
            let content = currentData.map(value => {
                return fillCryptoCommunity
                    .replace("#IMG_URL#", value.img_url || "https://via.placeholder.com/80")
                    .replace("#NAME#", value.name || "Unknown Name")
                    .replace("#PLATFORMS#", value.platforms || "No Platforms")
                    .replace("#CATEGORY#", value.category || "No Category")
                    .replace("#LINK_URL#", value.link_url || "#");
            }).join("");

            container.innerHTML = content;

            const showingStart = start + 1;
            const showingEnd = Math.min(end, values.length);
            const totalEntries = values.length;
            document.querySelector("#pagination span").innerHTML = `
                Showing <span class="font-semibold text-white">${showingStart}</span> to 
                <span class="font-semibold text-white">${showingEnd}</span> of 
                <span class="font-semibold text-white">${totalEntries}</span> Entries
            `;

            document.querySelector("#pagination .prev").disabled = page === 1;
            document.querySelector("#pagination .next").disabled = end >= values.length;
        }
    };

    document.querySelector("#pagination .prev").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    document.querySelector("#pagination .next").addEventListener("click", () => {
        if (currentPage * itemsPerPage < values.length) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    renderPage(currentPage);
}
