import { get } from "https://bukulapak.github.io/api/process.js";
import { fillCommunity } from "./controller/get-community.js";
import { urlAPICryptoCommunity } from "./config/url.js";

document.getElementById('loading').classList.remove('hidden');

document.getElementById('pagination').classList.add('hidden');

get(urlAPICryptoCommunity, (response) => {

    document.getElementById('loading').classList.add('hidden');

    document.getElementById('pagination').classList.remove('hidden');

    const totalCommunity = response.data.length;
    document.querySelector("h1.text-2xl").innerHTML = `
        ${totalCommunity.toLocaleString()} Crypto Community
    `;

    fillCommunity({ data: response.data });

    setupFilterButtons(response.data);
    setupSearchInput(response.data);
}).catch(error => {
    document.getElementById('loading').classList.add('hidden');
    console.error('Error fetching data:', error);
});

function setupFilterButtons(data) {
    const filterButtons = document.querySelectorAll(".filter-button");

    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const category = e.target.getAttribute("data-category");

            filterButtons.forEach(btn => {
                btn.classList.remove("bg-blue-600");
                btn.classList.add("bg-gray-700");
            });
            e.target.classList.remove("bg-gray-700");
            e.target.classList.add("bg-blue-600");

            let filteredData;
            if (category === "All Types") {
                filteredData = data; 
            } else {
                filteredData = data.filter(item => item.category === category);
            }

            fillCommunity({ data: filteredData });
        });
    });
}

function setupSearchInput(data) {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm)
        );

        fillCommunity({ data: filteredData });
    });
}
