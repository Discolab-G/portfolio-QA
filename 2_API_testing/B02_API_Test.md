# Test API Instagram Scraper Stable API

## Info API

Test case : TC02
Risk ID : R6
Functionnality : F02
Priority : High
Method : GET
Endpoint : https://instagram-scraper-stable-api.p.rapidapi.com/ig_get_fb_profile_hover.php?username_or_url=instagram

## Description

Verify the API question / answer over known Instagram profile. 

## Resquest headers

Host : 'instagram-scraper-stable-api.p.rapidapi.com'
Key : 'Hidden' 

## Request body 

JS : 

const url = 'https://instagram-scraper-stable-api.p.rapidapi.com/ig_get_fb_profile_hover.php?username_or_url=instagram';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Hidden',
		'x-rapidapi-host': 'instagram-scraper-stable-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

## Answer info 

Delay : 443 ms 
Error code : 200
Answer JSON : TC02.JSON  