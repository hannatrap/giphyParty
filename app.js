console.log("Let's get this party started!");
//searching within the API for a gif

const $pageContent = $('#page-content');
const $searchInput = $('#search');

function addGif(res) {
    let results = res.data.length;
    if(results) {
        let randomIdx = Math.floor(Math.random() * results);
        let newDiv = $("<div");
        let newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url
        });
        newDiv.append(newGif);
        $pageContent.append(newDiv);

    }
}


$("form").on("submit", async function(e) {
e.preventDefault();

let search = $searchInput.val();
$searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {
    q: search,
    api_key: 'rd7GEruDqnqjGDaKfDMQavL7gzLAeaPz'
}
});
addGif(response.data);
});

$("#delete").on("click", function() {
    $pageContent.empty();
});



//adding gif to page
