// JavaScript file of PopR 

// ----------   research    --------------

async function fetchFromRapidAPI() {
  try {
    const response = await fetch('https://instagram-scraper-stable-api.p.rapidapi.com/get_ig_user_about.php?username_or_url=quoteoftheday', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'instagram-scraper-stable-api.p.rapidapi.com',
        'X-RapidAPI-Key': '4f536a07ebmsh319f1fdea0f5a93p159e1fjsn9ae5eafc06a6'
      }
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération:', error);
  }
};

// Appeler la fonction

searchButton.addEventListener('click', () {
    let nameSearch = document.getElementById('nameSearch');
    fetchFromRapidAPI(nameSearch);
    console.log(followers);
    answerScore = element.textContent(followers);
});



const searchButton = document.getElementById(searchButton);
const answerScore = document.getElementById(answerScore);
const saveButton = document.getElementById(saveButton);

addEventListener("keypress", function () {
    let nameSearch = this.document.getElementById(nameSearch);
})

saveButton.addEventListener('click', function () {
    const { data } = await supabase
  .from('PopR_historic_table')
  .insert([
    { Score_column: 'answerScore' },
  ]);
});

// -----------    Historic      -------------

import {'PopR_historic_table'} from '@supabase/supabase-js'


async function refreshAllData() {
    const refresh = document.getElementById('refreshButton');
    if (refresh) refresh.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> loading...';

    try {
        const r = await window.pywebview.api.get_sheet_data('PopR_historic_table');
        if (r.success) historic = r.data;
    } catch (e) {
        savedHistoric = [];
    }

    if (refresh) refresh.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> loading...';
}

const historicTable = document.getElementById(historicTable);


let historic = {
    id:[],
    created_at:[],
    Score:[],
};

try {
    let { data: PopR_historic_table, error } = await supabase
    .from('PopR_historic_table')
    .select('*')
};

// Refresh table 
async function refreshAllData() {
    if (keypress) historicTable.innerHTML='<i class)"resfresh ..."></i> loading...';

    //load of historic
    for(let historic of historicBody)
};


const historicBody = document.getElementById(historicBody);

// ---------- Policy ----------

const policyLink = document.getElementById(policylink);

policyLink.addEventListener('click', function (event) {
    event.preventDefault();
    alert("Usage Policy & Privacy : This tool provides a decision-support metric. It does not perform 'automated individual decision-making' or profiling with legal effects. All final assessments remain at the sole discretion of the human user. This application is a technical demonstration developed for educational and portfolio purposes. Precision on Data sources : All information is fetched from public social media profiles via third-party APIs. This tool does not bypass privacy settings. Precision on privacy : No personal data is sold or shared. Search history is stored in a private database solely to demonstrate SQL and Data Analysis capabilities. Precision on responsability : The Score is based on a simplified academic algorithm and should not be used for professional recruitment or credit decisions. The author is not responsible for any misuse of the generated data. Precision on compliance : Users are encouraged to respect the Terms of Service of the respective social media platforms.)
,});