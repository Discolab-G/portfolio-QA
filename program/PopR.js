/* -----------------------------------------------------------------------------------------------------------
                                      JavaScript file of PopR 
*/ // -----------------------------------------------------------------------------------------------------------

// ----------------------------------------   research    -------------------------------------------------

    //      const & API 
const searchButton = document.getElementById('searchButton');
const answerScore = document.getElementById('answerScore');


    //      Answer to button

searchButton.addEventListener('click', () => {

    //      look for query 

    const nameSearch = document.getElementById('nameSearch');
    const searchItem = nameSearch.value;

    //    API call
    
    async function search() {
            
        const url = `/api/search/?q=${searchItem}`;

        try {
            const response = await fetch(url);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
            return "error at API call";
        } 
    };
    
    //      Answer

    async function displayAnswer () {
        const score = await search();
        answerScore.innerHTML = `<p class="answer" aria-label="answer">${score}</p>`;
    }

    //      Show answer

    displayAnswer ();
});



//  ------------------------------   Save result   ------------------------------------------------------- 

const saveButton = document.getElementById('saveButton');

    //      Check answer validity (type and positive)
saveButton.addEventListener('click', async function () {
    if (typeof answerScore !== 'number' || answerScore < 0) {
        console.error('Score invalide');
        return "score type lisibility error";
    }

    //       Score save
    const { data, error } = await supabase
    .from('PopR_historic_table')
    .insert ([{ Score_column: answerScore }]);
    

    //      save error 
    if (error) {
    console.error('Erreur insertion :', error.message);
    return;
    }

    //      Final save 
    console.log('Score sauvegardé :', data);
});



// -------------------------------------    Historic      ---------------------------------------------------

const refreshButton = document.getElementById('refreshButton');
const historicBody = document.getElementById('historicBody');


refreshButton.addEventListener('click', async function () {
    
    let { data: PopR_historic_table, error } = await supabase
    .from('PopR_historic_table')
    .select('*')

    if(error) {
        console.error('error', error.message);
        return 'Could not get supabase data';
    }

    
          
});







// ---------- Policy ----------

const policyLink = document.getElementById(policylink);

policyLink.addEventListener('click', function (event) {
    event.preventDefault();
    alert("Usage Policy & Privacy : This tool provides a decision-support metric. It does not perform 'automated individual decision-making' or profiling with legal effects. All final assessments remain at the sole discretion of the human user. This application is a technical demonstration developed for educational and portfolio purposes. Precision on Data sources : All information is fetched from public social media profiles via third-party APIs. This tool does not bypass privacy settings. Precision on privacy : No personal data is sold or shared. Search history is stored in a private database solely to demonstrate SQL and Data Analysis capabilities. Precision on responsability : The Score is based on a simplified academic algorithm and should not be used for professional recruitment or credit decisions. The author is not responsible for any misuse of the generated data. Precision on compliance : Users are encouraged to respect the Terms of Service of the respective social media platforms.");
});