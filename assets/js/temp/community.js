export let fillCryptoCommunity = 
`
<div class="bg-gray-900 rounded-lg p-4 flex items-center space-x-4 w-full max-w-2xl mx-auto">
      <img
        alt=""
        class="w-20 h-20 sm:w-24 sm:h-24 rounded-lg"
        height="80"
        src="#IMG_URL#"
        width="80"
      />
      <div class="flex-1">
        <h1 class="text-white text-xl font-bold sm:mb-2 mb-0">
          #NAME#
        </h1>
        <p class="text-gray-300 text-sm sm:-mt-2 sm:mb-2 mt-0 mb-0 ">#PLATFORMS#</p>
        <span
          class="bg-blue-600 text-white text-xs px-3 py-0 rounded-full">
          #CATEGORY#
        </span>
      </div>
      <a
        href="#LINK_URL#" 
        target="_blank" 
        class="bg-blue-800 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-lg text-sm sm:text-base sm:py-1 sm:px-4">
        JOIN
      </a>
  </div>
`;