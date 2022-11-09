const apiKey = "d7302177";
const filmInput = document.querySelector('input')




//API Call using AXIOS
const fetchData = async (search) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd7302177',
            s: search
        }
    });
    const data = response.data;
    console.log(data)
}



//Logic to set timeout between keystrokes 
let timeoutId;
const onInput = (e) =>{
    if(timeoutId){
        clearTimeout(timeoutId);
    }
        timeoutId = setTimeout(() => {
        const input = e.target.value;
        fetchData(input);
    }, 1000);
}

// EVENT LISTENERS
filmInput.addEventListener("input", onInput)