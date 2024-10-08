const countries = [
    {
    "abbreviation": "BD",
    "capital": "Dhaka",
    "currency": "BDT",
    "name": "Bangladesh",
    "phone": "880",
    "population": 162951560,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1280px-Flag_of_Bangladesh.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/National_emblem_of_Bangladesh.svg/1280px-National_emblem_of_Bangladesh.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bangladesh_%28orthographic_projection%29.svg/1280px-Bangladesh_(orthographic_projection).svg.png"
    },
    "id": 1
    },
    {
    "abbreviation": "BE",
    "capital": "Brussels",
    "currency": "EUR",
    "name": "Belgium",
    "phone": "32",
    "population": 11348159,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1182px-Flag_of_Belgium.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Great_coat_of_arms_of_Belgium.svg/1280px-Great_coat_of_arms_of_Belgium.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Belgium_%28orthographic_projection%29.svg/1920px-Belgium_%28orthographic_projection%29.svg.png"
    },
    "id": 2
    },
    {
    "abbreviation": "BF",
    "capital": "Ouagadougou",
    "currency": "XOF",
    "name": "Burkina Faso",
    "phone": "226",
    "population": 18646433,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/1280px-Flag_of_Burkina_Faso.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_Burkina_Faso.svg/1280px-Coat_of_arms_of_Burkina_Faso.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Burkina_Faso_%28orthographic_projection%29.svg/1280px-Burkina_Faso_(orthographic_projection).svg.png"
    },
    "id": 3
    },
    {
    "abbreviation": "BG",
    "capital": "Sofia",
    "currency": "BGN",
    "name": "Bulgaria",
    "phone": "359",
    "population": 7127822,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1280px-Flag_of_Bulgaria.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coat_of_arms_of_Bulgaria.svg/1280px-Coat_of_arms_of_Bulgaria.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/EU-Bulgaria.svg/2560px-EU-Bulgaria.svg.png"
    },
    "id": 4
    },
    {
    "abbreviation": "BA",
    "capital": "Sarajevo",
    "currency": "BAM",
    "name": "Bosnia and Herzegovina",
    "phone": "387",
    "population": 3516816,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1280px-Flag_of_Bosnia_and_Herzegovina.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coat_of_arms_of_Bosnia_and_Herzegovina.svg/1280px-Coat_of_arms_of_Bosnia_and_Herzegovina.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Europe-Bosnia_and_Herzegovina.svg/2560px-Europe-Bosnia_and_Herzegovina.svg.png"
    },
    "id": 5
    },
    {
    "abbreviation": "BB",
    "capital": "Bridgetown",
    "currency": "BBD",
    "name": "Barbados",
    "phone": "+1-246",
    "population": 284996,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coat_of_arms_of_Barbados_%283%29.svg/1280px-Coat_of_arms_of_Barbados_(3).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/BRB_orthographic.svg/251280px-BRB_orthographic.svg.png"
    },
    "id": 6
    },
    {
    "abbreviation": "WF",
    "capital": "Mata Utu",
    "currency": "XPF",
    "name": "Wallis and Futuna",
    "phone": "681",
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Wallis_and_Futuna.svg/1280px-Flag_of_Wallis_and_Futuna.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Coat_of_arms_of_Wallis_and_Futuna.svg/1280px-Coat_of_arms_of_Wallis_and_Futuna.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wallis_and_Futuna_on_the_globe_%28Polynesia_centered%29.svg/1920px-Wallis_and_Futuna_on_the_globe_%28Polynesia_centered%29.svg.png"
    },
    "id": 7
    },
    {
    "abbreviation": "BL",
    "capital": "Gustavia",
    "currency": "EUR",
    "name": "Saint Barthelemy",
    "phone": "590",
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Flag_of_Saint_Barthelemy.svg/1280px-Flag_of_Saint_Barthelemy.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Blason_St_Barth%C3%A9l%C3%A9my_TOM_entire.svg/1280px-Blason_St_Barth%C3%A9l%C3%A9my_TOM_entire.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Saint_Barthelemy_on_the_globe_%28Americas_centered%29.svg/1920px-Saint_Barthelemy_on_the_globe_%28Americas_centered%29.svg.png"
    },
    "id": 8
    },
    {
    "abbreviation": "BM",
    "capital": "Hamilton",
    "currency": "BMD",
    "name": "Bermuda",
    "phone": "+1-441",
    "population": 65331,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/1280px-Flag_of_Bermuda.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Coat_of_arms_of_Bermuda.svg/1280px-Coat_of_arms_of_Bermuda.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/United_Kingdom_on_the_globe_%28Bermuda_special%29_%28Americas_centered%29.svg/1920px-United_Kingdom_on_the_globe_%28Bermuda_special%29_%28Americas_centered%29.svg.png"
    },
    "id": 9
    },
    {
    "abbreviation": "BN",
    "capital": "Bandar Seri Begawan",
    "currency": "BND",
    "name": "Brunei",
    "phone": "673",
    "population": 423196,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1280px-Flag_of_Brunei.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Emblem_of_Brunei.svg/1280px-Emblem_of_Brunei.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Brunei_%28orthographic_projection%29.svg/1280px-Brunei_(orthographic_projection).svg.png"
    },
    "id": 10
    },
    {
    "abbreviation": "BO",
    "capital": "Sucre",
    "currency": "BOB",
    "name": "Bolivia",
    "phone": "591",
    "population": 10887882,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1280px-Flag_of_Bolivia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Escudo_de_Bolivia.svg/1280px-Escudo_de_Bolivia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/BOL_orthographic.svg/221280px-BOL_orthographic.svg.png"
    },
    "id": 11
    },
    {
    "abbreviation": "BH",
    "capital": "Manama",
    "currency": "BHD",
    "name": "Bahrain",
    "phone": "973",
    "population": 1425171,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1280px-Flag_of_Bahrain.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Emblem_of_Bahrain.svg/1280px-Emblem_of_Bahrain.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Map_of_Bahrain.svg/2560px-Map_of_Bahrain.svg.png"
    },
    "id": 12
    },
    {
    "abbreviation": "BI",
    "capital": "Bujumbura",
    "currency": "BIF",
    "name": "Burundi",
    "phone": "257",
    "population": 10524117,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/1280px-Flag_of_Burundi.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Coat_of_arms_of_Burundi.svg/1280px-Coat_of_arms_of_Burundi.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Burundi_%28orthographic_projection%29.svg/1280px-Burundi_(orthographic_projection).svg.png"
    },
    "id": 13
    },
    {
    "abbreviation": "BJ",
    "capital": "Porto-Novo",
    "currency": "XOF",
    "name": "Benin",
    "phone": "229",
    "population": 10872298,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/1280px-Flag_of_Benin.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Coat_of_arms_of_Benin.svg/1280px-Coat_of_arms_of_Benin.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Benin_%28orthographic_projection_with_inset%29.svg/1920px-Benin_%28orthographic_projection_with_inset%29.svg.png"
    },
    "id": 14
    },
    {
    "abbreviation": "BT",
    "capital": "Thimphu",
    "currency": "BTN",
    "name": "Bhutan",
    "phone": "975",
    "population": 797765,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/1280px-Flag_of_Bhutan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_Bhutan.svg/1280px-Emblem_of_Bhutan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bhutan_%28orthographic_projection%29.svg/500px-Bhutan_%28orthographic_projection%29.svg.png"
    },
    "id": 15
    },
    {
    "abbreviation": "JM",
    "capital": "Kingston",
    "currency": "JMD",
    "name": "Jamaica",
    "phone": "+1-876",
    "population": 2881355,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1280px-Flag_of_Jamaica.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Coat_of_arms_of_Jamaica.svg/1280px-Coat_of_arms_of_Jamaica.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Jamaica_%28orthographic_projection%29.svg/1280px-Jamaica_(orthographic_projection).svg.png"
    },
    "id": 16
    },
    {
    "abbreviation": "BV",
    "capital": "None",
    "currency": "NOK",
    "name": "Bouvet Island",
    "phone": "47",
    "population": 0,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2560px-Flag_of_Norway.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Coat_of_arms_of_Norway.svg/1024px-Coat_of_arms_of_Norway.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bouvet_Island_on_the_globe_%28Antarctica_centered%29.svg/1920px-Bouvet_Island_on_the_globe_%28Antarctica_centered%29.svg.png"
    },
    "id": 17
    },
    {
    "abbreviation": "BW",
    "capital": "Gaborone",
    "currency": "BWP",
    "name": "Botswana",
    "phone": "267",
    "population": 2250260,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/1280px-Flag_of_Botswana.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_Botswana.svg/1280px-Coat_of_arms_of_Botswana.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Botswana_%28centered_orthographic_projection%29.svg/1920px-Botswana_%28centered_orthographic_projection%29.svg.png"
    },
    "id": 18
    },
    {
    "abbreviation": "WS",
    "capital": "Apia",
    "currency": "WST",
    "name": "Samoa",
    "phone": "685",
    "population": 195125,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/1280px-Flag_of_Samoa.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Coat_of_arms_of_Samoa.svg/1280px-Coat_of_arms_of_Samoa.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Samoa_on_the_globe_%28Polynesia_centered%29.svg/1920px-Samoa_on_the_globe_%28Polynesia_centered%29.svg.png"
    },
    "id": 19
    },
    {
    "abbreviation": "BQ",
    "capital": "Kralendijk",
    "currency": "USD",
    "name": "Bonaire of Netherlands Caribbeans",
    "phone": "599",
    "population": 24090,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Bonaire.svg/2560px-Flag_of_Bonaire.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bonaire_wapen.svg/1280px-Bonaire_wapen.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Bonaire_in_its_region.svg/2560px-Bonaire_in_its_region.svg.png"
    },
    "id": 20
    },
    {
    "abbreviation": "BR",
    "capital": "Brasilia",
    "currency": "BRL",
    "name": "Brazil",
    "phone": "55",
    "population": 207652865,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1280px-Coat_of_arms_of_Brazil.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BRA_orthographic.svg/251280px-BRA_orthographic.svg.png"
    },
    "id": 21
    },
    {
    "abbreviation": "BS",
    "capital": "Nassau",
    "currency": "BSD",
    "name": "Bahamas",
    "phone": "+1-242",
    "population": 391232,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/1280px-Flag_of_the_Bahamas.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Coat_of_arms_of_the_Bahamas.svg/1280px-Coat_of_arms_of_the_Bahamas.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/The_Bahamas_on_the_globe_%28Americas_centered%29.svg/440px-The_Bahamas_on_the_globe_%28Americas_centered%29.svg.png"
    },
    "id": 22
    },
    {
    "abbreviation": "JE",
    "capital": "Saint Helier",
    "currency": "GBP",
    "name": "Jersey",
    "phone": "+44-1534",
    "population": 103267,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Jersey.svg/1280px-Flag_of_Jersey.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Coat_of_Arms_of_Jersey.svg/1280px-Coat_of_Arms_of_Jersey.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Europe-Jersey.svg/2560px-Europe-Jersey.svg.png"
    },
    "id": 23
    },
    {
    "abbreviation": "BY",
    "capital": "Minsk",
    "currency": "BYR",
    "name": "Belarus",
    "phone": "375",
    "population": 9507120,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1280px-Flag_of_Belarus.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_Belarus_%282020%29.svg/1280px-Coat_of_arms_of_Belarus_(2020).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Europe-Belarus_%28orthographic_projection%29.svg/1920px-Europe-Belarus_%28orthographic_projection%29.svg.png"
    },
    "id": 24
    },
    {
    "abbreviation": "BZ",
    "capital": "Belmopan",
    "currency": "BZD",
    "name": "Belize",
    "phone": "501",
    "population": 366954,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1280px-Flag_of_Belize.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Belize.svg/1280px-Coat_of_arms_of_Belize.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BLZ_orthographic.svg/251280px-BLZ_orthographic.svg.png"
    },
    "id": 25
    },
    {
    "abbreviation": "RU",
    "capital": "Moscow",
    "currency": "RUB",
    "name": "Russia",
    "phone": "7",
    "population": 144342396,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Coat_of_Arms_of_the_Russian_Federation.svg/1280px-Coat_of_Arms_of_the_Russian_Federation.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Russian_Federation_%28orthographic_projection%29_-_All_Territorial_Disputes.svg/1920px-Russian_Federation_%28orthographic_projection%29_-_All_Territorial_Disputes.svg.png"
    },
    "id": 26
    },
    {
    "abbreviation": "RW",
    "capital": "Kigali",
    "currency": "RWF",
    "name": "Rwanda",
    "phone": "250",
    "population": 11917508,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/1280px-Flag_of_Rwanda.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/1280px-Coat_of_arms_of_Rwanda.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Location_Rwanda_AU_Africa.svg/1920px-Location_Rwanda_AU_Africa.svg.png"
    },
    "id": 27
    },
    {
    "abbreviation": "RS",
    "capital": "Belgrade",
    "currency": "RSD",
    "name": "Serbia",
    "phone": "381",
    "population": 7057412,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1280px-Flag_of_Serbia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_Serbia.svg/1280px-Coat_of_arms_of_Serbia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Serbia_%28orthographic_projection%29.svg/1280px-Serbia_(orthographic_projection).svg.png"
    },
    "id": 28
    },
    {
    "abbreviation": "TL",
    "capital": "Dili",
    "currency": "USD",
    "name": "East Timor",
    "phone": "670",
    "population": 1268671,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_East_Timor.svg/1280px-Coat_of_arms_of_East_Timor.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Timor_Leste_%28orthographic_projection%29.svg/1920px-Timor_Leste_%28orthographic_projection%29.svg.png"
    },
    "id": 29
    },
    {
    "abbreviation": "RE",
    "capital": "Saint-Denis",
    "currency": "EUR",
    "name": "Reunion",
    "phone": "262",
    "population": 885700,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Armoiries_R%C3%A9union.svg/2560px-Armoiries_R%C3%A9union.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/D%C3%A9partement_974_in_France_%28zoom%29.svg/2560px-D%C3%A9partement_974_in_France_%28zoom%29.svg.png"
    },
    "id": 30
    },
    {
    "abbreviation": "TM",
    "capital": "Ashgabat",
    "currency": "TMT",
    "name": "Turkmenistan",
    "phone": "993",
    "population": 5662544,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1280px-Flag_of_Turkmenistan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Emblem_of_Turkmenistan.svg/1280px-Emblem_of_Turkmenistan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Turkmenistan_on_the_globe_%28Afro-Eurasia_centered%29.svg/1920px-Turkmenistan_on_the_globe_%28Afro-Eurasia_centered%29.svg.png"
    },
    "id": 31
    },
    {
    "abbreviation": "TJ",
    "capital": "Dushanbe",
    "currency": "TJS",
    "name": "Tajikistan",
    "phone": "992",
    "population": 8734951,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1280px-Flag_of_Tajikistan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Emblem_of_Tajikistan.svg/1280px-Emblem_of_Tajikistan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tajikistan_%28orthographic_projection%29.svg/1280px-Tajikistan_(orthographic_projection).svg.png"
    },
    "id": 32
    },
    {
    "abbreviation": "RO",
    "capital": "Bucharest",
    "currency": "RON",
    "name": "Romania",
    "phone": "40",
    "population": 19705301,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Coat_of_arms_of_Romania.svg/1280px-Coat_of_arms_of_Romania.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/EU-Romania_%28orthographic_projection%29.svg/1920px-EU-Romania_%28orthographic_projection%29.svg.png"
    },
    "id": 33
    },
    {
    "abbreviation": "TK",
    "capital": "None",
    "currency": "NZD",
    "name": "Tokelau",
    "phone": "690",
    "population": 1500,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokelau.svg/1280px-Flag_of_Tokelau.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Badge_of_Tokelau.svg/1280px-Badge_of_Tokelau.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/New_Zealand_on_the_globe_%28Tokelau_special%29_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/1920px-New_Zealand_on_the_globe_%28Tokelau_special%29_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"
    },
    "id": 34
    },
    {
    "abbreviation": "GW",
    "capital": "Bissau",
    "currency": "XOF",
    "name": "Guinea-Bissau",
    "phone": "245",
    "population": 1815698,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/2560px-Flag_of_Guinea-Bissau.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Coat_of_arms_of_Guinea-Bissau_%28variant%29.svg/1920px-Coat_of_arms_of_Guinea-Bissau_%28variant%29.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Location_Guinea_Bissau_AU_Africa.svg/1920px-Location_Guinea_Bissau_AU_Africa.svg.png"
    },
    "id": 35
    },
    {
    "abbreviation": "GU",
    "capital": "Hagatna",
    "currency": "USD",
    "name": "Guam",
    "phone": "+1-671",
    "population": 162896,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/1280px-Flag_of_Guam.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Seal_of_Guam.svg/1280px-Seal_of_Guam.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Guam_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg/1920px-Guam_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg.png"
    },
    "id": 36
    },
    {
    "abbreviation": "GT",
    "capital": "Guatemala City",
    "currency": "GTQ",
    "name": "Guatemala",
    "phone": "502",
    "population": 16582469,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1280px-Flag_of_Guatemala.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Coat_of_arms_of_Guatemala.svg/1280px-Coat_of_arms_of_Guatemala.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Guatemala_%28orthographic_projection%29.svg/1280px-Guatemala_(orthographic_projection).svg.png"
    },
    "id": 37
    },
    {
    "abbreviation": "GS",
    "capital": "King Edward Point",
    "currency": "FKP",
    "name": "South Georgia and the South Sandwich Islands",
    "phone": "500",
    "population": 100,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg/1280px-Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Coat_of_arms_of_South_Georgia_and_the_South_Sandwich_Islands.svg/1280px-Coat_of_arms_of_South_Georgia_and_the_South_Sandwich_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/South_Georgia_and_the_South_Sandwich_Islands_in_United_Kingdom.svg/1920px-South_Georgia_and_the_South_Sandwich_Islands_in_United_Kingdom.svg.png"
    },
    "id": 38
    },
    {
    "abbreviation": "GR",
    "capital": "Athens",
    "currency": "EUR",
    "name": "Greece",
    "phone": "30",
    "population": 10746740,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1280px-Flag_of_Greece.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Coat_of_arms_of_Greece.svg/1280px-Coat_of_arms_of_Greece.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/EU-Greece_%28orthographic_projection%29.svg/1920px-EU-Greece_%28orthographic_projection%29.svg.png"
    },
    "id": 39
    },
    {
    "abbreviation": "GQ",
    "capital": "Malabo",
    "currency": "XAF",
    "name": "Equatorial Guinea",
    "phone": "240",
    "population": 1221490,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1280px-Flag_of_Equatorial_Guinea.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Coat_of_arms_of_Equatorial_Guinea.svg/1280px-Coat_of_arms_of_Equatorial_Guinea.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/GNQ_orthographic.svg/221280px-GNQ_orthographic.svg.png"
    },
    "id": 40
    },
    {
    "abbreviation": "GP",
    "capital": "Basse-Terre",
    "currency": "EUR",
    "name": "Guadeloupe",
    "phone": "590",
    "population": 378561,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Unofficial_flag_of_Guadeloupe_%28local%29.svg/1024px-Unofficial_flag_of_Guadeloupe_%28local%29.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Coat_of_arms_of_Guadeloupe.svg/1280px-Coat_of_arms_of_Guadeloupe.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Guadeloupe_in_France_2016.svg/2560px-Guadeloupe_in_France_2016.svg.png"
    },
    "id": 41
    },
    {
    "abbreviation": "JP",
    "capital": "Tokyo",
    "currency": "JPY",
    "name": "Japan",
    "phone": "81",
    "population": 126994511,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Imperial_Seal_of_Japan.svg/1280px-Imperial_Seal_of_Japan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Japan_%28orthographic_projection%29.svg/1280px-Japan_(orthographic_projection).svg.png"
    },
    "id": 42
    },
    {
    "abbreviation": "GY",
    "capital": "Georgetown",
    "currency": "GYD",
    "name": "Guyana",
    "phone": "592",
    "population": 773303,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1280px-Flag_of_Guyana.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Coat_of_arms_of_Guyana.svg/1280px-Coat_of_arms_of_Guyana.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/GUY_orthographic.svg/251280px-GUY_orthographic.svg.png"
    },
    "id": 43
    },
    {
    "abbreviation": "GG",
    "capital": "St Peter Port",
    "currency": "GBP",
    "name": "Guernsey",
    "phone": "+44-1481",
    "population": 63950,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Guernsey.svg/1280px-Flag_of_Guernsey.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coat_of_arms_of_Guernsey.svg/1280px-Coat_of_arms_of_Guernsey.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/English_Channel_location_map.svg/2560px-English_Channel_location_map.svg.png"
    },
    "id": 44
    },
    {
    "abbreviation": "GF",
    "capital": "Cayenne",
    "currency": "EUR",
    "name": "French Guiana",
    "phone": "594",
    "population": 295385,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Coat_of_arms_of_French_Guyana.svg/1280px-Coat_of_arms_of_French_Guyana.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/French_Guiana_in_France_2016.svg/2560px-French_Guiana_in_France_2016.svg.png"
    },
    "id": 45
    },
    {
    "abbreviation": "GE",
    "capital": "Tbilisi",
    "currency": "GEL",
    "name": "Georgia",
    "phone": "995",
    "population": 3719300,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1280px-Flag_of_Georgia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Greater_coat_of_arms_of_Georgia.svg/1280px-Greater_coat_of_arms_of_Georgia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Georgia_%28orthographic_projection_with_inset%29.svg/1920px-Georgia_%28orthographic_projection_with_inset%29.svg.png"
    },
    "id": 46
    },
    {
    "abbreviation": "GD",
    "capital": "St. George's",
    "currency": "XCD",
    "name": "Grenada",
    "phone": "+1-473",
    "population": 107317,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1280px-Flag_of_Grenada.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Coat_of_arms_of_Grenada.svg/1280px-Coat_of_arms_of_Grenada.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Grenada_on_the_globe_%28Americas_centered%29.svg/1920px-Grenada_on_the_globe_%28Americas_centered%29.svg.png"
    },
    "id": 47
    },
    {
    "abbreviation": "GB",
    "capital": "London",
    "currency": "GBP",
    "name": "United Kingdom",
    "phone": "44",
    "population": 65637239,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Royal_Coat_of_Arms_of_the_United_Kingdom_%28both_variants%29.svg/2560px-Royal_Coat_of_Arms_of_the_United_Kingdom_%28both_variants%29.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Europe-UK_%28orthographic_projection%29.svg/1920px-Europe-UK_%28orthographic_projection%29.svg.png"
    },
    "id": 48
    },
    {
    "abbreviation": "GA",
    "capital": "Libreville",
    "currency": "XAF",
    "name": "Gabon",
    "phone": "241",
    "population": 1979786,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/1280px-Flag_of_Gabon.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Coat_of_arms_of_Gabon.svg/1280px-Coat_of_arms_of_Gabon.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Gabon_%28orthographic_projection%29.svg/1280px-Gabon_(orthographic_projection).svg.png"
    },
    "id": 49
    },
    {
    "abbreviation": "SV",
    "capital": "San Salvador",
    "currency": "USD",
    "name": "El Salvador",
    "phone": "503",
    "population": 6344722,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1280px-Flag_of_El_Salvador.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Coat_of_arms_of_El_Salvador.svg/1280px-Coat_of_arms_of_El_Salvador.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/El_Salvador_%28orthographic_projection%29.svg/1280px-El_Salvador_(orthographic_projection).svg.png"
    },
    "id": 50
    },
    {
    "abbreviation": "GN",
    "capital": "Conakry",
    "currency": "GNF",
    "name": "Guinea",
    "phone": "224",
    "population": 12395924,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/1280px-Flag_of_Guinea.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Guinea-new.svg/1280px-Coat_of_arms_of_Guinea-new.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Guinea_%28orthographic_projection%29.svg/1920px-Guinea_%28orthographic_projection%29.svg.png"
    },
    "id": 51
    },
    {
    "abbreviation": "GM",
    "capital": "Banjul",
    "currency": "GMD",
    "name": "Gambia",
    "phone": "220",
    "population": 2038501,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/1280px-Flag_of_The_Gambia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coat_of_arms_of_The_Gambia.svg/1280px-Coat_of_arms_of_The_Gambia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Gambia_%28orthographic_projection_with_inset%29.svg/1920px-Gambia_%28orthographic_projection_with_inset%29.svg.png"
    },
    "id": 52
    },
    {
    "abbreviation": "GL",
    "capital": "Nuuk",
    "currency": "DKK",
    "name": "Greenland",
    "phone": "299",
    "population": 56186,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/1280px-Flag_of_Greenland.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Greenland.svg/1280px-Coat_of_arms_of_Greenland.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Greenland_%28orthographic_projection%29.svg/1280px-Greenland_(orthographic_projection).svg.png"
    },
    "id": 53
    },
    {
    "abbreviation": "GI",
    "capital": "Gibraltar",
    "currency": "GIP",
    "name": "Gibraltar",
    "phone": "350",
    "population": 34408,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/1280px-Flag_of_Gibraltar.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Coat_of_arms_of_Gibraltar1.svg/1280px-Coat_of_arms_of_Gibraltar1.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Gibraltar_location_in_Europe.svg/2560px-Gibraltar_location_in_Europe.svg.png"
    },
    "id": 54
    },
    {
    "abbreviation": "GH",
    "capital": "Accra",
    "currency": "GHS",
    "name": "Ghana",
    "phone": "233",
    "population": 28206728,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1280px-Flag_of_Ghana.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Coat_of_arms_of_Ghana.svg/1280px-Coat_of_arms_of_Ghana.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ghana_%28orthographic_projection%29.svg/1280px-Ghana_(orthographic_projection).svg.png"
    },
    "id": 55
    },
    {
    "abbreviation": "OM",
    "capital": "Muscat",
    "currency": "OMR",
    "name": "Oman",
    "phone": "968",
    "population": 4424762,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1280px-Flag_of_Oman.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/National_emblem_of_Oman.svg/1280px-National_emblem_of_Oman.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Oman_%28better%29_%28orthographic_projection%29.svg/1920px-Oman_%28better%29_%28orthographic_projection%29.svg.png"
    },
    "id": 56
    },
    {
    "abbreviation": "TN",
    "capital": "Tunis",
    "currency": "TND",
    "name": "Tunisia",
    "phone": "216",
    "population": 11403248,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1280px-Flag_of_Tunisia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Coat_of_arms_of_Tunisia.svg/1280px-Coat_of_arms_of_Tunisia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tunisia_location_%28orthographic_projection%29.svg/1920px-Tunisia_location_%28orthographic_projection%29.svg.png"
    },
    "id": 57
    },
    {
    "abbreviation": "JO",
    "capital": "Amman",
    "currency": "JOD",
    "name": "Jordan",
    "phone": "962",
    "population": 9455802,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1280px-Flag_of_Jordan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Coat_of_arms_of_Jordan.png/1280px-Coat_of_arms_of_Jordan.png.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jordan_%28orthographic_projection%29.svg/1280px-Jordan_(orthographic_projection).svg.png"
    },
    "id": 58
    },
    {
    "abbreviation": "HR",
    "capital": "Zagreb",
    "currency": "HRK",
    "name": "Croatia",
    "phone": "385",
    "population": 4170600,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Coat_of_arms_of_Croatia.svg/1280px-Coat_of_arms_of_Croatia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/EU-Croatia_%28orthographic_projection%29.png/1920px-EU-Croatia_%28orthographic_projection%29.png"
    },
    "id": 59
    },
    {
    "abbreviation": "HT",
    "capital": "Port-au-Prince",
    "currency": "HTG",
    "name": "Haiti",
    "phone": "509",
    "population": 10847334,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1280px-Flag_of_Haiti.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/1280px-Coat_of_arms_of_Haiti.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Haiti_%28orthographic_projection%29.svg/1280px-Haiti_(orthographic_projection).svg.png"
    },
    "id": 60
    },
    {
    "abbreviation": "HU",
    "capital": "Budapest",
    "currency": "HUF",
    "name": "Hungary",
    "phone": "36",
    "population": 9817958,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Coat_of_arms_of_Hungary.svg/1280px-Coat_of_arms_of_Hungary.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/EU-Hungary.svg/2560px-EU-Hungary.svg.png"
    },
    "id": 61
    },
    {
    "abbreviation": "HK",
    "capital": "Hong Kong",
    "currency": "HKD",
    "name": "Hong Kong",
    "phone": "852",
    "population": 7346700,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1280px-Flag_of_Hong_Kong.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Regional_Emblem_of_Hong_Kong.svg/1280px-Regional_Emblem_of_Hong_Kong.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hong_Kong_in_China_%28zoomed%29_%28%2Ball_claims_hatched%29.svg/2560px-Hong_Kong_in_China_%28zoomed%29_%28%2Ball_claims_hatched%29.svg.png"
    },
    "id": 62
    },
    {
    "abbreviation": "HN",
    "capital": "Tegucigalpa",
    "currency": "HNL",
    "name": "Honduras",
    "phone": "504",
    "population": 9112867,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1280px-Flag_of_Honduras.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coat_of_arms_of_Honduras.svg/1280px-Coat_of_arms_of_Honduras.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/HND_orthographic.svg/251280px-HND_orthographic.svg.png"
    },
    "id": 63
    },
    {
    "abbreviation": "HM",
    "capital": "None",
    "currency": "AUD",
    "name": "Heard Island and McDonald Islands",
    "phone": "61",
    "population": 0,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/2560px-Flag_of_Australia_%28converted%29.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Coat_of_Arms_of_Australia.svg/2560px-Coat_of_Arms_of_Australia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Australia_in_its_region_%28Heard_Island_and_McDonald_Islands_special%29.svg/2560px-Australia_in_its_region_%28Heard_Island_and_McDonald_Islands_special%29.svg.png"
    },
    "id": 64
    },
    {
    "abbreviation": "VE",
    "capital": "Caracas",
    "currency": "VEF",
    "name": "Venezuela",
    "phone": "58",
    "population": 31568179,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1280px-Flag_of_Venezuela.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Coat_of_arms_of_Venezuela.svg/1280px-Coat_of_arms_of_Venezuela.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Venezuela_Orthographic_Map.svg/1920px-Venezuela_Orthographic_Map.svg.png"
    },
    "id": 65
    },
    {
    "abbreviation": "PR",
    "capital": "San Juan",
    "currency": "USD",
    "name": "Puerto Rico",
    "phone": "+1-787 and 1-939",
    "population": 3411307,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/1280px-Flag_of_Puerto_Rico.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Coat_of_arms_of_the_Commonwealth_of_Puerto_Rico.svg/1280px-Coat_of_arms_of_the_Commonwealth_of_Puerto_Rico.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Puerto_Rico_%28orthographic_projection%29.svg/1280px-Puerto_Rico_(orthographic_projection).svg.png"
    },
    "id": 66
    },
    {
    "abbreviation": "PS",
    "capital": "Ramallah",
    "currency": "ILS",
    "name": "State of Palestine",
    "phone": "970",
    "population": 4551566,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/2560px-Flag_of_Palestine.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Coat_of_arms_of_Palestine.svg/1280px-Coat_of_arms_of_Palestine.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/State_of_Palestine_%28orthographic_projection%29.svg/1920px-State_of_Palestine_%28orthographic_projection%29.svg.png"
    },
    "id": 67
    },
    {
    "abbreviation": "PW",
    "capital": "Ngerulmud",
    "currency": "USD",
    "name": "Palau",
    "phone": "680",
    "population": 16766,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/1280px-Flag_of_Palau.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Seal_of_Palau.svg/1280px-Seal_of_Palau.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Palau_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg/1920px-Palau_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg.png"
    },
    "id": 68
    },
    {
    "abbreviation": "PT",
    "capital": "Lisbon",
    "currency": "EUR",
    "name": "Portugal",
    "phone": "351",
    "population": 10324611,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Coat_of_arms_of_Portugal.svg/1280px-Coat_of_arms_of_Portugal.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/EU-Portugal_%28orthographic_projection%29.svg/1920px-EU-Portugal_%28orthographic_projection%29.svg.png"
    },
    "id": 69
    },
    {
    "abbreviation": "SJ",
    "capital": "Longyearbyen",
    "currency": "NOK",
    "name": "Svalbard",
    "phone": "47",
    "population": 2530,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2560px-Flag_of_Norway.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Coat_of_arms_of_Norway.svg/1024px-Coat_of_arms_of_Norway.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Norway-Svalbard.svg/2560px-Norway-Svalbard.svg.png"
    },
    "id": 70
    },
    {
    "abbreviation": "PY",
    "capital": "Asuncion",
    "currency": "PYG",
    "name": "Paraguay",
    "phone": "595",
    "population": 6725308,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Coat_of_arms_of_Paraguay.svg/1280px-Coat_of_arms_of_Paraguay.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/PRY_orthographic.svg/251280px-PRY_orthographic.svg.png"
    },
    "id": 71
    },
    {
    "abbreviation": "IQ",
    "capital": "Baghdad",
    "currency": "IQD",
    "name": "Iraq",
    "phone": "964",
    "population": 37202572,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1280px-Flag_of_Iraq.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Coat_of_arms_of_Iraq_%282008%E2%80%93present%29.svg/1280px-Coat_of_arms_of_Iraq_(2008%E2%80%93present).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Iraq_%28orthographic%29.svg/1920px-Iraq_%28orthographic%29.svg.png"
    },
    "id": 72
    },
    {
    "abbreviation": "PA",
    "capital": "Panama City",
    "currency": "PAB",
    "name": "Panama",
    "phone": "507",
    "population": 4034119,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1280px-Flag_of_Panama.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Coat_of_arms_of_Panama.svg/1280px-Coat_of_arms_of_Panama.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PAN_orthographic.svg/251280px-PAN_orthographic.svg.png"
    },
    "id": 73
    },
    {
    "abbreviation": "PF",
    "capital": "Papeete",
    "currency": "XPF",
    "name": "French Polynesia",
    "phone": "689",
    "population": 280208,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/1280px-Flag_of_French_Polynesia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Coat_of_arms_of_French_Polynesia.svg/1280px-Coat_of_arms_of_French_Polynesia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/French_Polynesia_on_the_globe_%28French_Polynesia_centered%29.svg/1920px-French_Polynesia_on_the_globe_%28French_Polynesia_centered%29.svg.png"
    },
    "id": 74
    },
    {
    "abbreviation": "PG",
    "capital": "Port Moresby",
    "currency": "PGK",
    "name": "Papua New Guinea",
    "phone": "675",
    "population": 8084991,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/1280px-Flag_of_Papua_New_Guinea.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/National_Emblem_of_Papua_New_Guinea.svg/1280px-National_Emblem_of_Papua_New_Guinea.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Papua_New_Guinea_%28orthographic_projection%29.svg/1280px-Papua_New_Guinea_(orthographic_projection).svg.png"
    },
    "id": 75
    },
    {
    "abbreviation": "PE",
    "capital": "Lima",
    "currency": "PEN",
    "name": "Peru",
    "phone": "51",
    "population": 31773839,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Escudo_nacional_del_Per%C3%BA.svg/1280px-Escudo_nacional_del_Per%C3%BA.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PER_orthographic.svg/251280px-PER_orthographic.svg.png"
    },
    "id": 76
    },
    {
    "abbreviation": "PK",
    "capital": "Islamabad",
    "currency": "PKR",
    "name": "Pakistan",
    "phone": "92",
    "population": 193203476,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1280px-Flag_of_Pakistan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/State_emblem_of_Pakistan.svg/1280px-State_emblem_of_Pakistan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pakistan_%28orthographic_projection%29.svg/1280px-Pakistan_(orthographic_projection).svg.png"
    },
    "id": 77
    },
    {
    "abbreviation": "PH",
    "capital": "Manila",
    "currency": "PHP",
    "name": "Philippines",
    "phone": "63",
    "population": 103320222,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_the_Philippines.svg/1280px-Coat_of_arms_of_the_Philippines.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/PHL_orthographic.svg/221280px-PHL_orthographic.svg.png"
    },
    "id": 78
    },
    {
    "abbreviation": "PN",
    "capital": "Adamstown",
    "currency": "NZD",
    "name": "Pitcairn",
    "phone": "870",
    "population": 35,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_the_Pitcairn_Islands.svg/1280px-Flag_of_the_Pitcairn_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coat_of_arms_of_the_Pitcairn_Islands.svg/1920px-Coat_of_arms_of_the_Pitcairn_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pitcairn_Islands_in_United_Kingdom.svg/2560px-Pitcairn_Islands_in_United_Kingdom.svg.png"
    },
    "id": 79
    },
    {
    "abbreviation": "PL",
    "capital": "Warsaw",
    "currency": "PLN",
    "name": "Poland",
    "phone": "48",
    "population": 37948016,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Herb_Polski.svg/1280px-Herb_Polski.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/EU-Poland_%28orthographic_projection%29.svg/1920px-EU-Poland_%28orthographic_projection%29.svg.png"
    },
    "id": 80
    },
    {
    "abbreviation": "PM",
    "capital": "Saint-Pierre",
    "currency": "EUR",
    "name": "Saint Pierre and Miquelon",
    "phone": "508",
    "population": 6092,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Armoiries_SaintPierreetMiquelon.svg/1280px-Armoiries_SaintPierreetMiquelon.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Saint_Pierre_and_Miquelon_in_France.svg/2560px-Saint_Pierre_and_Miquelon_in_France.svg.png"
    },
    "id": 81
    },
    {
    "abbreviation": "ZM",
    "capital": "Lusaka",
    "currency": "ZMK",
    "name": "Zambia",
    "phone": "260",
    "population": 16591390,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/1280px-Flag_of_Zambia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coat_of_arms_of_Zambia.svg/1280px-Coat_of_arms_of_Zambia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Zambia_%28orthographic_projection%29.svg/1280px-Zambia_(orthographic_projection).svg.png"
    },
    "id": 82
    },
    {
    "abbreviation": "EH",
    "capital": "El-Aaiun",
    "currency": "EHP",
    "name": "Sahrawi Arab Democratic Republic",
    "phone": "212",
    "population": 200000,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg/1280px-Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Coat_of_arms_of_the_Sahrawi_Arab_Democratic_Republic.svg/170px-Coat_of_arms_of_the_Sahrawi_Arab_Democratic_Republic.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sahrawi_Arab_Democratic_Republic_%28orthographic_projection%29.svg/1920px-Sahrawi_Arab_Democratic_Republic_%28orthographic_projection%29.svg.png"
    },
    "id": 83
    },
    {
    "abbreviation": "EE",
    "capital": "Tallinn",
    "currency": "EUR",
    "name": "Estonia",
    "phone": "372",
    "population": 1316481,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1280px-Flag_of_Estonia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Coat_of_arms_of_Estonia.svg/1280px-Coat_of_arms_of_Estonia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/EU-Estonia.svg/500px-EU-Estonia.svg.png"
    },
    "id": 84
    },
    {
    "abbreviation": "EG",
    "capital": "Cairo",
    "currency": "EGP",
    "name": "Egypt",
    "phone": "20",
    "population": 95688681,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1280px-Flag_of_Egypt.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coat_of_arms_of_Egypt_%28Official%29.svg/1280px-Coat_of_arms_of_Egypt_(Official).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/EGY_orthographic.svg/251280px-EGY_orthographic.svg.png"
    },
    "id": 85
    },
    {
    "abbreviation": "ZA",
    "capital": "Pretoria",
    "currency": "ZAR",
    "name": "South Africa",
    "phone": "27",
    "population": 55908865,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1280px-Flag_of_South_Africa.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Coat_of_arms_of_South_Africa.svg/1280px-Coat_of_arms_of_South_Africa.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/South_Africa_%28orthographic_projection%29.svg/1280px-South_Africa_(orthographic_projection).svg.png"
    },
    "id": 86
    },
    {
    "abbreviation": "EC",
    "capital": "Quito",
    "currency": "USD",
    "name": "Ecuador",
    "phone": "593",
    "population": 16385068,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1280px-Flag_of_Ecuador.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/1280px-Coat_of_arms_of_Ecuador.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ECU_orthographic.svg/251280px-ECU_orthographic.svg.png"
    },
    "id": 87
    },
    {
    "abbreviation": "IT",
    "capital": "Rome",
    "currency": "EUR",
    "name": "Italy",
    "phone": "39",
    "population": 60600590,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_of_Italy.svg/1280px-Emblem_of_Italy.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EU-Italy_%28orthographic_projection%29.svg/1920px-EU-Italy_%28orthographic_projection%29.svg.png"
    },
    "id": 88
    },
    {
    "abbreviation": "VN",
    "capital": "Hanoi",
    "currency": "VND",
    "name": "Vietnam",
    "phone": "84",
    "population": 92701100,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Vietnam.svg/1280px-Emblem_of_Vietnam.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Vietnam_%28orthographic_projection%29.svg/1920px-Vietnam_%28orthographic_projection%29.svg.png"
    },
    "id": 89
    },
    {
    "abbreviation": "SB",
    "capital": "Honiara",
    "currency": "SBD",
    "name": "Solomon Islands",
    "phone": "677",
    "population": 721956,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Coat_of_arms_of_the_Solomon_Islands.svg/1280px-Coat_of_arms_of_the_Solomon_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Solomon_Islands_on_the_globe_%28Oceania_centered%29.svg/1920px-Solomon_Islands_on_the_globe_%28Oceania_centered%29.svg.png"
    },
    "id": 90
    },
    {
    "abbreviation": "ET",
    "capital": "Addis Ababa",
    "currency": "ETB",
    "name": "Ethiopia",
    "phone": "251",
    "population": 102403196,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1280px-Flag_of_Ethiopia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Emblem_of_Ethiopia.svg/1280px-Emblem_of_Ethiopia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ethiopia_%28Africa_orthographic_projection%29.svg/1920px-Ethiopia_%28Africa_orthographic_projection%29.svg.png"
    },
    "id": 91
    },
    {
    "abbreviation": "SO",
    "capital": "Mogadishu",
    "currency": "SOS",
    "name": "Somalia",
    "phone": "252",
    "population": 14317996,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1280px-Flag_of_Somalia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Somalia.svg/1280px-Coat_of_arms_of_Somalia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Somalia_%28orthographic_projection%29.svg/1280px-Somalia_(orthographic_projection).svg.png"
    },
    "id": 92
    },
    {
    "abbreviation": "ZW",
    "capital": "Harare",
    "currency": "ZWL",
    "name": "Zimbabwe",
    "phone": "263",
    "population": 16150362,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1280px-Flag_of_Zimbabwe.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coat_of_arms_of_Zimbabwe.svg/1280px-Coat_of_arms_of_Zimbabwe.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Zimbabwe_%28orthographic_projection%29.svg/1920px-Zimbabwe_%28orthographic_projection%29.svg.png"
    },
    "id": 93
    },
    {
    "abbreviation": "SA",
    "capital": "Riyadh",
    "currency": "SAR",
    "name": "Saudi Arabia",
    "phone": "966",
    "population": 32275687,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1280px-Flag_of_Saudi_Arabia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Emblem_of_Saudi_Arabia.svg/1280px-Emblem_of_Saudi_Arabia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saudi_Arabia_%28orthographic_projection%29.svg/1280px-Saudi_Arabia_(orthographic_projection).svg.png"
    },
    "id": 94
    },
    {
    "abbreviation": "ES",
    "capital": "Madrid",
    "currency": "EUR",
    "name": "Spain",
    "phone": "34",
    "population": 46443959,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg/1280px-Escudo_de_Espa%C3%B1a_(mazonado).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/EU-Spain_%28orthographic_projection%29.svg/1920px-EU-Spain_%28orthographic_projection%29.svg.png"
    },
    "id": 95
    },
    {
    "abbreviation": "ER",
    "capital": "Asmara",
    "currency": "ERN",
    "name": "Eritrea",
    "phone": "291",
    "population": 3554389,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/1280px-Flag_of_Eritrea.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emblem_of_Eritrea_%28or_argent_azur%29.svg/1280px-Emblem_of_Eritrea_(or_argent_azur).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Eritrea_%28Africa_orthographic_projection%29.svg/1920px-Eritrea_%28Africa_orthographic_projection%29.svg.png"
    },
    "id": 96
    },
    {
    "abbreviation": "ME",
    "capital": "Podgorica",
    "currency": "EUR",
    "name": "Montenegro",
    "phone": "382",
    "population": 622781,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1280px-Flag_of_Montenegro.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Coat_of_arms_of_Montenegro.svg/1280px-Coat_of_arms_of_Montenegro.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Europe-Montenegro.svg/2560px-Europe-Montenegro.svg.png"
    },
    "id": 97
    },
    {
    "abbreviation": "MD",
    "capital": "Chisinau",
    "currency": "MDL",
    "name": "Moldova",
    "phone": "373",
    "population": 3552000,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Coat_of_arms_of_Moldova.svg/1280px-Coat_of_arms_of_Moldova.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Location_Moldova_Europe.png"
    },
    "id": 98
    },
    {
    "abbreviation": "MG",
    "capital": "Antananarivo",
    "currency": "MGA",
    "name": "Madagascar",
    "phone": "261",
    "population": 24894551,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1280px-Flag_of_Madagascar.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Seal_of_Madagascar.svg/1280px-Seal_of_Madagascar.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Madagascar_%28centered_orthographic_projection%29.svg/1920px-Madagascar_%28centered_orthographic_projection%29.svg.png"
    },
    "id": 99
    },
    {
    "abbreviation": "MF",
    "capital": "Marigot",
    "currency": "EUR",
    "name": "Saint Martin",
    "phone": "590",
    "population": 73777,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Arms_of_the_French_Republic.svg/1920px-Arms_of_the_French_Republic.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Saint_Martin_in_its_region.svg/2560px-Saint_Martin_in_its_region.svg.png"
    },
    "id": 100
    },
    {
    "abbreviation": "MA",
    "capital": "Rabat",
    "currency": "MAD",
    "name": "Morocco",
    "phone": "212",
    "population": 35276786,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1280px-Flag_of_Morocco.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Coat_of_arms_of_Morocco.svg/1280px-Coat_of_arms_of_Morocco.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Morocco_%28orthographic_projection%2C_WS_claimed%29.svg/1920px-Morocco_%28orthographic_projection%2C_WS_claimed%29.svg.png"
    },
    "id": 101
    },
    {
    "abbreviation": "MC",
    "capital": "Monaco",
    "currency": "EUR",
    "name": "Monaco",
    "phone": "377",
    "population": 38499,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1280px-Flag_of_Monaco.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Coat_of_arms_of_Monaco.svg/1280px-Coat_of_arms_of_Monaco.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Monaco_Europe_Location.svg/2560px-Monaco_Europe_Location.svg.png"
    },
    "id": 102
    },
    {
    "abbreviation": "UZ",
    "capital": "Tashkent",
    "currency": "UZS",
    "name": "Uzbekistan",
    "phone": "998",
    "population": 31848200,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/1280px-Emblem_of_Uzbekistan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/UZB_orthographic.svg/251280px-UZB_orthographic.svg.png"
    },
    "id": 103
    },
    {
    "abbreviation": "MM",
    "capital": "Nay Pyi Taw",
    "currency": "MMK",
    "name": "Myanmar",
    "phone": "95",
    "population": 52885223,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/1280px-Flag_of_Myanmar.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/State_seal_of_Myanmar.svg/1280px-State_seal_of_Myanmar.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Myanmar_%28orthographic_projection%29.svg/1920px-Myanmar_%28orthographic_projection%29.svg.png"
    },
    "id": 104
    },
    {
    "abbreviation": "ML",
    "capital": "Bamako",
    "currency": "XOF",
    "name": "Mali",
    "phone": "223",
    "population": 17994837,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1280px-Flag_of_Mali.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Coat_of_arms_of_Mali.svg/1280px-Coat_of_arms_of_Mali.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mali_%28orthographic_projection%29.svg/1280px-Mali_(orthographic_projection).svg.png"
    },
    "id": 105
    },
    {
    "abbreviation": "MO",
    "capital": "None",
    "currency": "MOP",
    "name": "Macao",
    "phone": "853",
    "population": 612167,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/1280px-Flag_of_Macau.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Regional_Emblem_of_Macau.svg/1280px-Regional_Emblem_of_Macau.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Macau_locator_map.svg/2560px-Macau_locator_map.svg.png"
    },
    "id": 106
    },
    {
    "abbreviation": "MN",
    "capital": "Ulan Bator",
    "currency": "MNT",
    "name": "Mongolia",
    "phone": "976",
    "population": 3027398,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1280px-Flag_of_Mongolia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/State_emblem_of_Mongolia.svg/1280px-State_emblem_of_Mongolia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mongolia_%28orthographic_projection%29.svg/1280px-Mongolia_(orthographic_projection).svg.png"
    },
    "id": 107
    },
    {
    "abbreviation": "MH",
    "capital": "Majuro",
    "currency": "USD",
    "name": "Marshall Islands",
    "phone": "692",
    "population": 53066,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/1280px-Flag_of_the_Marshall_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Seal_of_the_Marshall_Islands.svg/1280px-Seal_of_the_Marshall_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Marshall_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/1920px-Marshall_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"
    },
    "id": 108
    },
    {
    "abbreviation": "MK",
    "capital": "Skopje",
    "currency": "MKD",
    "name": "North Macedonia",
    "phone": "389",
    "population": 2081206,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1280px-Flag_of_North_Macedonia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Coat_of_arms_of_North_Macedonia.svg/1280px-Coat_of_arms_of_North_Macedonia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/3/35/Location_Macedonia_Europe.png"
    },
    "id": 109
    },
    {
    "abbreviation": "MU",
    "capital": "Port Louis",
    "currency": "MUR",
    "name": "Mauritius",
    "phone": "230",
    "population": 1263473,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1280px-Flag_of_Mauritius.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Mauritius_%28Original_version%29.svg/1280px-Coat_of_arms_of_Mauritius_(Original_version).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mauritius_%28orthographic_projection_with_inset%29.svg/1920px-Mauritius_%28orthographic_projection_with_inset%29.svg.png"
    },
    "id": 110
    },
    {
    "abbreviation": "MT",
    "capital": "Valletta",
    "currency": "EUR",
    "name": "Malta",
    "phone": "356",
    "population": 436947,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1280px-Flag_of_Malta.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Malta.svg/1280px-Coat_of_arms_of_Malta.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/EU-Malta.svg/2560px-EU-Malta.svg.png"
    },
    "id": 111
    },
    {
    "abbreviation": "MW",
    "capital": "Lilongwe",
    "currency": "MWK",
    "name": "Malawi",
    "phone": "265",
    "population": 18091575,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1280px-Flag_of_Malawi.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Coat_of_arms_of_Malawi.svg/1280px-Coat_of_arms_of_Malawi.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Malawi_%28orthographic_projection%29.svg/1920px-Malawi_%28orthographic_projection%29.svg.png"
    },
    "id": 112
    },
    {
    "abbreviation": "MV",
    "capital": "Male",
    "currency": "MVR",
    "name": "Maldives",
    "phone": "960",
    "population": 417492,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/1280px-Flag_of_Maldives.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Emblem_of_Maldives.svg/1280px-Emblem_of_Maldives.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Maldives_%28orthographic_projection%29.svg/1280px-Maldives_(orthographic_projection).svg.png"
    },
    "id": 113
    },
    {
    "abbreviation": "MQ",
    "capital": "Fort-de-France",
    "currency": "EUR",
    "name": "Martinique",
    "phone": "596",
    "population": 349925,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag-of-Martinique.svg/2560px-Flag-of-Martinique.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Arms_of_the_French_Republic.svg/1920px-Arms_of_the_French_Republic.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Martinique_in_France_2016.svg/2560px-Martinique_in_France_2016.svg.png"
    },
    "id": 114
    },
    {
    "abbreviation": "MP",
    "capital": "Saipan",
    "currency": "USD",
    "name": "Northern Mariana Islands",
    "phone": "+1-670",
    "population": 55023,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_the_Northern_Mariana_Islands.svg/1280px-Flag_of_the_Northern_Mariana_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Seal_of_the_Northern_Mariana_Islands.svg/1280px-Seal_of_the_Northern_Mariana_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Northern_Mariana_Islands_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg/1920px-Northern_Mariana_Islands_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg.png"
    },
    "id": 115
    },
    {
    "abbreviation": "MS",
    "capital": "Plymouth",
    "currency": "XCD",
    "name": "Montserrat",
    "phone": "+1-664",
    "population": 4390,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/1280px-Flag_of_Montserrat.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Coat_of_arms_of_Montserrat.svg/1280px-Coat_of_arms_of_Montserrat.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Montserrat_in_United_Kingdom.svg/2560px-Montserrat_in_United_Kingdom.svg.png"
    },
    "id": 116
    },
    {
    "abbreviation": "MR",
    "capital": "Nouakchott",
    "currency": "MRO",
    "name": "Mauritania",
    "phone": "222",
    "population": 4301018,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/1280px-Flag_of_Mauritania.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/National_Seal_of_Mauritania.svg/1920px-National_Seal_of_Mauritania.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mauritania_%28orthographic_projection%29.svg/1920px-Mauritania_%28orthographic_projection%29.svg.png"
    },
    "id": 117
    },
    {
    "abbreviation": "IM",
    "capital": "Douglas",
    "currency": "GBP",
    "name": "Isle of Man",
    "phone": "44",
    "population": 83737,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_the_Isle_of_Man.svg/1280px-Flag_of_the_Isle_of_Man.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Coat_of_arms_of_the_Isle_of_Man.svg/1280px-Coat_of_arms_of_the_Isle_of_Man.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Europe-Isle_of_Man.svg/2560px-Europe-Isle_of_Man.svg.png"
    },
    "id": 118
    },
    {
    "abbreviation": "UG",
    "capital": "Kampala",
    "currency": "UGX",
    "name": "Uganda",
    "phone": "256",
    "population": 41487965,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1280px-Flag_of_Uganda.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Coat_of_arms_of_Uganda.svg/1280px-Coat_of_arms_of_Uganda.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Uganda_%28orthographic_projection%29.svg/1280px-Uganda_(orthographic_projection).svg.png"
    },
    "id": 119
    },
    {
    "abbreviation": "TZ",
    "capital": "Dodoma",
    "currency": "TZS",
    "name": "Tanzania",
    "phone": "255",
    "population": 55572201,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1280px-Flag_of_Tanzania.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coat_of_arms_of_Tanzania.svg/1280px-Coat_of_arms_of_Tanzania.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tanzania_%28orthographic_projection%29.svg/1280px-Tanzania_(orthographic_projection).svg.png"
    },
    "id": 120
    },
    {
    "abbreviation": "MY",
    "capital": "Kuala Lumpur",
    "currency": "MYR",
    "name": "Malaysia",
    "phone": "60",
    "population": 31187265,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/1280px-Coat_of_arms_of_Malaysia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Malaysia_%28orthographic_projection%29.svg/1280px-Malaysia_(orthographic_projection).svg.png"
    },
    "id": 121
    },
    {
    "abbreviation": "MX",
    "capital": "Mexico City",
    "currency": "MXN",
    "name": "Mexico",
    "phone": "52",
    "population": 127540423,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Coat_of_arms_of_Mexico.svg/1280px-Coat_of_arms_of_Mexico.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MEX_orthographic.svg/261280px-MEX_orthographic.svg.png"
    },
    "id": 122
    },
    {
    "abbreviation": "IL",
    "capital": "Jerusalem",
    "currency": "ILS",
    "name": "Israel",
    "phone": "972",
    "population": 8547100,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1280px-Flag_of_Israel.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Israel.svg/1280px-Emblem_of_Israel.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/ISR_orthographic.svg/251280px-ISR_orthographic.svg.png"
    },
    "id": 123
    },
    {
    "abbreviation": "FR",
    "capital": "Paris",
    "currency": "EUR",
    "name": "France",
    "phone": "33",
    "population": 66896109,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Coat_of_arms_of_the_French_Republic.svg/1280px-Coat_of_arms_of_the_French_Republic.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/EU-France_%28orthographic_projection%29.svg/1920px-EU-France_%28orthographic_projection%29.svg.png"
    },
    "id": 124
    },
    {
    "abbreviation": "IO",
    "capital": "None",
    "currency": "USD",
    "name": "British Indian Ocean Territory",
    "phone": "246",
    "population": 0,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg/2560px-Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Coat_of_arms_of_the_British_Indian_Ocean_Territory.svg/1920px-Coat_of_arms_of_the_British_Indian_Ocean_Territory.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/British_Indian_Ocean_Territory_in_United_Kingdom.svg/2560px-British_Indian_Ocean_Territory_in_United_Kingdom.svg.png"
    },
    "id": 125
    },
    {
    "abbreviation": "SH",
    "capital": "Jamestown",
    "currency": "SHP",
    "name": "Saint Helena",
    "phone": "290",
    "population": 4439,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Saint_Helena.svg/1280px-Flag_of_Saint_Helena.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Coat_of_Arms_of_Saint_Helena.svg/1024px-Coat_of_Arms_of_Saint_Helena.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Saint_Helena_on_the_Globe_%28in_the_United_Kingdom%29.svg/1920px-Saint_Helena_on_the_Globe_%28in_the_United_Kingdom%29.svg.png"
    },
    "id": 126
    },
    {
    "abbreviation": "FI",
    "capital": "Helsinki",
    "currency": "EUR",
    "name": "Finland",
    "phone": "358",
    "population": 5495096,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1280px-Flag_of_Finland.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Coat_of_arms_of_Finland.svg/1280px-Coat_of_arms_of_Finland.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/EU-Finland_%28orthographic_projection%29.svg/1920px-EU-Finland_%28orthographic_projection%29.svg.png"
    },
    "id": 127
    },
    {
    "abbreviation": "FJ",
    "capital": "Suva",
    "currency": "FJD",
    "name": "Fiji",
    "phone": "679",
    "population": 898760,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1280px-Flag_of_Fiji.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coat_of_arms_of_Fiji.svg/1280px-Coat_of_arms_of_Fiji.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Fiji_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/1920px-Fiji_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"
    },
    "id": 128
    },
    {
    "abbreviation": "FK",
    "capital": "Stanley",
    "currency": "FKP",
    "name": "Falkland Islands",
    "phone": "500",
    "population": 3662,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_Falkland_Islands.svg/1280px-Flag_of_the_Falkland_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Coat_of_arms_of_the_Falkland_Islands.svg/1280px-Coat_of_arms_of_the_Falkland_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Location_map_of_the_Falklands_%E2%80%93_Alternative_version_4.svg/2560px-Location_map_of_the_Falklands_%E2%80%93_Alternative_version_4.svg.png"
    },
    "id": 129
    },
    {
    "abbreviation": "FM",
    "capital": "Palikir",
    "currency": "USD",
    "name": "Federated States of Micronesia",
    "phone": "691",
    "population": 104937,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1280px-Flag_of_the_Federated_States_of_Micronesia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_the_Federated_States_of_Micronesia.svg/1280px-Seal_of_the_Federated_States_of_Micronesia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Micronesia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/1920px-Micronesia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"
    },
    "id": 130
    },
    {
    "abbreviation": "FO",
    "capital": "Torshavn",
    "currency": "DKK",
    "name": "Faroe Islands",
    "phone": "298",
    "population": 49117,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/1280px-Flag_of_the_Faroe_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Coat_of_arms_of_the_Faroe_Islands.svg/1280px-Coat_of_arms_of_the_Faroe_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Europe-Faroe_Islands.svg/2560px-Europe-Faroe_Islands.svg.png"
    },
    "id": 131
    },
    {
    "abbreviation": "NI",
    "capital": "Managua",
    "currency": "NIO",
    "name": "Nicaragua",
    "phone": "505",
    "population": 6149928,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1280px-Flag_of_Nicaragua.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_Nicaragua.svg/1280px-Coat_of_arms_of_Nicaragua.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/NIC_orthographic.svg/251280px-NIC_orthographic.svg.png"
    },
    "id": 132
    },
    {
    "abbreviation": "NL",
    "capital": "Amsterdam",
    "currency": "EUR",
    "name": "Netherlands",
    "phone": "31",
    "population": 17018408,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/State_coat_of_arms_of_the_Netherlands.svg/1280px-State_coat_of_arms_of_the_Netherlands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/EU-Netherlands.svg/2560px-EU-Netherlands.svg.png"
    },
    "id": 133
    },
    {
    "abbreviation": "NO",
    "capital": "Oslo",
    "currency": "NOK",
    "name": "Norway",
    "phone": "47",
    "population": 5232929,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Coat_of_arms_of_Norway.svg/1280px-Coat_of_arms_of_Norway.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Europe-Norway_%28orthographic_projection%29.svg/1920px-Europe-Norway_%28orthographic_projection%29.svg.png"
    },
    "id": 134
    },
    {
    "abbreviation": "NA",
    "capital": "Windhoek",
    "currency": "NAD",
    "name": "Namibia",
    "phone": "264",
    "population": 2479713,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/1280px-Flag_of_Namibia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Coat_of_arms_of_Namibia.svg/1280px-Coat_of_arms_of_Namibia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Namibia_%28orthographic_projection%29.svg/1920px-Namibia_%28orthographic_projection%29.svg.png"
    },
    "id": 135
    },
    {
    "abbreviation": "VU",
    "capital": "Port Vila",
    "currency": "VUV",
    "name": "Vanuatu",
    "phone": "678",
    "population": 270402,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/1280px-Flag_of_Vanuatu.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Vanuatu.svg/1280px-Coat_of_arms_of_Vanuatu.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Vanuatu_on_the_globe_%28Polynesia_centered%29.svg/1920px-Vanuatu_on_the_globe_%28Polynesia_centered%29.svg.png"
    },
    "id": 136
    },
    {
    "abbreviation": "NC",
    "capital": "Noumea",
    "currency": "XPF",
    "name": "New Caledonia",
    "phone": "687",
    "population": 278000,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flags_of_New_Caledonia-edit.svg/2560px-Flags_of_New_Caledonia-edit.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emblem_of_New_Caledonia.svg/1280px-Emblem_of_New_Caledonia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/New_Caledonia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/1920px-New_Caledonia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"
    },
    "id": 137
    },
    {
    "abbreviation": "NE",
    "capital": "Niamey",
    "currency": "XOF",
    "name": "Niger",
    "phone": "227",
    "population": 20672987,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/1195px-Flag_of_Niger.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Coat_of_arms_of_Niger.svg/1280px-Coat_of_arms_of_Niger.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Niger_%28orthographic_projection%29.svg/1280px-Niger_(orthographic_projection).svg.png"
    },
    "id": 138
    },
    {
    "abbreviation": "NF",
    "capital": "Kingston",
    "currency": "AUD",
    "name": "Norfolk Island",
    "phone": "672",
    "population": 2188,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Norfolk_Island.svg/1280px-Flag_of_Norfolk_Island.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Coat_of_arms_of_Norfolk_Island.svg/1920px-Coat_of_arms_of_Norfolk_Island.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Australia_on_the_globe_%28Norfolk_Island_special%29_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/1920px-Australia_on_the_globe_%28Norfolk_Island_special%29_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"
    },
    "id": 139
    },
    {
    "abbreviation": "NG",
    "capital": "Abuja",
    "currency": "NGN",
    "name": "Nigeria",
    "phone": "234",
    "population": 185989640,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_Nigeria.svg/1280px-Coat_of_arms_of_Nigeria.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nigeria_%28orthographic_projection%29.svg/1280px-Nigeria_(orthographic_projection).svg.png"
    },
    "id": 140
    },
    {
    "abbreviation": "NZ",
    "capital": "Wellington",
    "currency": "NZD",
    "name": "New Zealand",
    "phone": "64",
    "population": 4692700,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Coat_of_arms_of_New_Zealand.svg/1280px-Coat_of_arms_of_New_Zealand.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NZL_orthographic_NaturalEarth.svg/1920px-NZL_orthographic_NaturalEarth.svg.png"
    },
    "id": 141
    },
    {
    "abbreviation": "NP",
    "capital": "Kathmandu",
    "currency": "NPR",
    "name": "Nepal",
    "phone": "977",
    "population": 28982771,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/840px-Flag_of_Nepal.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/New_Emblem_of_Nepal.svg/1280px-New_Emblem_of_Nepal.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nepal_%28orthographic_projection%29.svg/1280px-Nepal_(orthographic_projection).svg.png"
    },
    "id": 142
    },
    {
    "abbreviation": "NR",
    "capital": "Yaren",
    "currency": "AUD",
    "name": "Nauru",
    "phone": "674",
    "population": 13049,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/1280px-Flag_of_Nauru.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Coat_of_arms_of_Nauru.svg/1280px-Coat_of_arms_of_Nauru.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/NRU_orthographic.svg/1920px-NRU_orthographic.svg.png"
    },
    "id": 143
    },
    {
    "abbreviation": "NU",
    "capital": "Alofi",
    "currency": "NZD",
    "name": "Niue",
    "phone": "683",
    "population": 1937,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Niue.svg/1280px-Flag_of_Niue.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Public_Seal_of_Niue.svg/1280px-Public_Seal_of_Niue.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Niue_on_the_globe_%28Polynesia_centered%29.svg/1920px-Niue_on_the_globe_%28Polynesia_centered%29.svg.png"
    },
    "id": 144
    },
    {
    "abbreviation": "CK",
    "capital": "Avarua",
    "currency": "NZD",
    "name": "Cook Islands",
    "phone": "682",
    "population": 15040,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/1280px-Flag_of_the_Cook_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coat_of_arms_of_the_Cook_Islands.svg/1280px-Coat_of_arms_of_the_Cook_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cook_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/1920px-Cook_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"
    },
    "id": 145
    },
    {
    "abbreviation": "XK",
    "capital": "Pristina",
    "currency": "EUR",
    "name": "Kosovo",
    "phone": "383",
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/1280px-Flag_of_Kosovo.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Emblem_of_the_Republic_of_Kosovo.svg/1920px-Emblem_of_the_Republic_of_Kosovo.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Europe-Republic_of_Kosovo.svg/2560px-Europe-Republic_of_Kosovo.svg.png"
    },
    "id": 146
    },
    {
    "abbreviation": "CI",
    "capital": "Yamoussoukro",
    "currency": "XOF",
    "name": "Ivory Coast",
    "phone": "225",
    "population": 23695919,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/2560px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Coat_of_Arms_of_the_Ivory_Coast.svg/1280px-Coat_of_Arms_of_the_Ivory_Coast.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/C%C3%B4te_d%27Ivoire_%28orthographic_projection%29.svg/1920px-C%C3%B4te_d%27Ivoire_%28orthographic_projection%29.svg.png"
    },
    "id": 147
    },
    {
    "abbreviation": "CH",
    "capital": "Bern",
    "currency": "CHF",
    "name": "Switzerland",
    "phone": "41",
    "population": 8372098,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1024px-Flag_of_Switzerland.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Coat_of_arms_of_Switzerland.svg/1280px-Coat_of_arms_of_Switzerland.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Switzerland_%28orthographic_projection%29.svg/1920px-Switzerland_%28orthographic_projection%29.svg.png"
    },
    "id": 148
    },
    {
    "abbreviation": "CO",
    "capital": "Bogota",
    "currency": "COP",
    "name": "Colombia",
    "phone": "57",
    "population": 48653419,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Coat_of_arms_of_Colombia.svg/1280px-Coat_of_arms_of_Colombia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29.svg/1920px-COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29.svg.png"
    },
    "id": 149
    },
    {
    "abbreviation": "CN",
    "capital": "Beijing",
    "currency": "CNY",
    "name": "China",
    "phone": "86",
    "population": 1378665000,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/National_Emblem_of_the_People%27s_Republic_of_China_%282%29.svg/1280px-National_Emblem_of_the_People%27s_Republic_of_China_(2).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CHN_orthographic.svg/1920px-CHN_orthographic.svg.png"
    },
    "id": 150
    },
    {
    "abbreviation": "CM",
    "capital": "Yaounde",
    "currency": "XAF",
    "name": "Cameroon",
    "phone": "237",
    "population": 23439189,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1280px-Flag_of_Cameroon.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Coat_of_arms_of_Cameroon.svg/1280px-Coat_of_arms_of_Cameroon.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cameroon_%28orthographic_projection%29.svg/1280px-Cameroon_(orthographic_projection).svg.png"
    },
    "id": 151
    },
    {
    "abbreviation": "CL",
    "capital": "Santiago",
    "currency": "CLP",
    "name": "Chile",
    "phone": "56",
    "population": 17909754,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1280px-Flag_of_Chile.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Coat_of_arms_of_Chile_%28c%29.svg/1280px-Coat_of_arms_of_Chile_(c).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CHL_orthographic_%28%2Ball_claims%29.svg/1920px-CHL_orthographic_%28%2Ball_claims%29.svg.png"
    },
    "id": 152
    },
    {
    "abbreviation": "CC",
    "capital": "West Island",
    "currency": "AUD",
    "name": "Cocos Islands",
    "phone": "61",
    "population": 593,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg/2560px-Flag_of_the_Cocos_%28Keeling%29_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Coat_of_Arms_of_Australia.svg/2560px-Coat_of_Arms_of_Australia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Australia_on_the_globe_%28Cocos_%28Keeling%29_Islands_special%29_%28Southeast_Asia_centered%29.svg/1920px-Australia_on_the_globe_%28Cocos_%28Keeling%29_Islands_special%29_%28Southeast_Asia_centered%29.svg.png"
    },
    "id": 153
    },
    {
    "abbreviation": "CA",
    "capital": "Ottawa",
    "currency": "CAD",
    "name": "Canada",
    "phone": "1",
    "population": 36286425,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Coat_of_arms_of_Canada.svg/1280px-Coat_of_arms_of_Canada.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/CAN_orthographic.svg/221280px-CAN_orthographic.svg.png"
    },
    "id": 154
    },
    {
    "abbreviation": "CG",
    "capital": "Brazzaville",
    "currency": "XAF",
    "name": "Republic of the Congo",
    "phone": "242",
    "population": 5125821,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/1280px-Flag_of_the_Republic_of_the_Congo.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Coat_of_arms_of_the_Republic_of_the_Congo.svg/1280px-Coat_of_arms_of_the_Republic_of_the_Congo.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Republic_of_the_Congo_%28orthographic_projection%29.svg/1280px-Republic_of_the_Congo_(orthographic_projection).svg.png"
    },
    "id": 155
    },
    {
    "abbreviation": "CF",
    "capital": "Bangui",
    "currency": "XAF",
    "name": "Central African Republic",
    "phone": "236",
    "population": 4594621,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/1280px-Flag_of_the_Central_African_Republic.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Coat_of_arms_of_the_Central_African_Republic.svg/1280px-Coat_of_arms_of_the_Central_African_Republic.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Central_African_Republic_%28orthographic_projection%29.svg/1280px-Central_African_Republic_(orthographic_projection).svg.png"
    },
    "id": 156
    },
    {
    "abbreviation": "CD",
    "capital": "Kinshasa",
    "currency": "CDF",
    "name": "Democratic Republic of the Congo",
    "phone": "243",
    "population": 78736153,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1280px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coat_of_arms_of_the_Democratic_Republic_of_the_Congo.svg/1280px-Coat_of_arms_of_the_Democratic_Republic_of_the_Congo.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Democratic_Republic_of_the_Congo_%28orthographic_projection%29.svg/1280px-Democratic_Republic_of_the_Congo_(orthographic_projection).svg.png"
    },
    "id": 157
    },
    {
    "abbreviation": "CZ",
    "capital": "Prague",
    "currency": "CZK",
    "name": "Czech Republic",
    "phone": "420",
    "population": 10561633,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Coat_of_arms_of_the_Czech_Republic.svg/1280px-Coat_of_arms_of_the_Czech_Republic.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/EU-Czech_Republic.svg/2560px-EU-Czech_Republic.svg.png"
    },
    "id": 158
    },
    {
    "abbreviation": "CY",
    "capital": "Nicosia",
    "currency": "EUR",
    "name": "Cyprus",
    "phone": "357",
    "population": 1170125,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1280px-Flag_of_Cyprus.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Cyprus_%282006%29.svg/1920px-Coat_of_arms_of_Cyprus_%282006%29.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Republic_of_Cyprus_%28orthographic_projection%29.svg/1920px-Republic_of_Cyprus_%28orthographic_projection%29.svg.png"
    },
    "id": 159
    },
    {
    "abbreviation": "CX",
    "capital": "Flying Fish Cove",
    "currency": "AUD",
    "name": "Christmas Island",
    "phone": "61",
    "population": 1692,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_of_Christmas_Island.svg/1280px-Flag_of_Christmas_Island.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Coat_of_Arms_of_Australia.svg/2560px-Coat_of_Arms_of_Australia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Australia_on_the_globe_%28Christmas_Island_special%29_%28Southeast_Asia_centered%29.svg/1920px-Australia_on_the_globe_%28Christmas_Island_special%29_%28Southeast_Asia_centered%29.svg.png"
    },
    "id": 160
    },
    {
    "abbreviation": "CR",
    "capital": "San Jose",
    "currency": "CRC",
    "name": "Costa Rica",
    "phone": "506",
    "population": 4857274,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1280px-Flag_of_Costa_Rica.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_Costa_Rica.svg/1280px-Coat_of_arms_of_Costa_Rica.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/CRI_orthographic.svg/251280px-CRI_orthographic.svg.png"
    },
    "id": 161
    },
    {
    "abbreviation": "CW",
    "capital": " Willemstad",
    "currency": "ANG",
    "name": "Curacao",
    "phone": "599",
    "population": 159999,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/2560px-Flag_of_Cura%C3%A7ao.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Coat_of_arms_of_Cura%C3%A7ao.svg/1280px-Coat_of_arms_of_Cura%C3%A7ao.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Curacao_in_its_region.svg/2560px-Curacao_in_its_region.svg.png"
    },
    "id": 162
    },
    {
    "abbreviation": "CV",
    "capital": "Praia",
    "currency": "CVE",
    "name": "Cape Verde",
    "phone": "238",
    "population": 539560,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1280px-Flag_of_Cape_Verde.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coat_of_arms_of_Cape_Verde.svg/1280px-Coat_of_arms_of_Cape_Verde.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cape_Verde_%28orthographic_projection%29.svg/1280px-Cape_Verde_(orthographic_projection).svg.png"
    },
    "id": 163
    },
    {
    "abbreviation": "CU",
    "capital": "Havana",
    "currency": "CUP",
    "name": "Cuba",
    "phone": "53",
    "population": 11475982,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Coat_of_arms_of_Cuba.svg/1280px-Coat_of_arms_of_Cuba.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/CUB_orthographic.svg/251280px-CUB_orthographic.svg.png"
    },
    "id": 164
    },
    {
    "abbreviation": "SZ",
    "capital": "Mbabane",
    "currency": "SZL",
    "name": "Kingdom of Eswatini",
    "phone": "268",
    "population": 1343098,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/1280px-Flag_of_Eswatini.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Coat_of_arms_of_Eswatini.svg/1280px-Coat_of_arms_of_Eswatini.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eswatini_on_the_globe_%28special_marker%29_%28Madagascar_centered%29.svg/1920px-Eswatini_on_the_globe_%28special_marker%29_%28Madagascar_centered%29.svg.png"
    },
    "id": 165
    },
    {
    "abbreviation": "SY",
    "capital": "Damascus",
    "currency": "SYP",
    "name": "Syria",
    "phone": "963",
    "population": 18430453,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1280px-Flag_of_Syria.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Coat_of_arms_of_Syria.svg/1280px-Coat_of_arms_of_Syria.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Syria_%28orthographic_projection%29.svg/1280px-Syria_(orthographic_projection).svg.png"
    },
    "id": 166
    },
    {
    "abbreviation": "SX",
    "capital": "Philipsburg",
    "currency": "ANG",
    "name": "Sint Maarten",
    "phone": "599",
    "population": 40005,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Sint_Maarten.svg/1280px-Flag_of_Sint_Maarten.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Coat_of_arms_of_Sint_Maarten.svg/1280px-Coat_of_arms_of_Sint_Maarten.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sint_Maarten_in_its_region.svg/2560px-Sint_Maarten_in_its_region.svg.png"
    },
    "id": 167
    },
    {
    "abbreviation": "KG",
    "capital": "Bishkek",
    "currency": "KGS",
    "name": "Kyrgyzstan",
    "phone": "996",
    "population": 6082700,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1280px-Flag_of_Kyrgyzstan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Emblem_of_Kyrgyzstan.svg/1280px-Emblem_of_Kyrgyzstan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kyrgyzstan_%28orthographic_projection%29.svg/1280px-Kyrgyzstan_(orthographic_projection).svg.png"
    },
    "id": 168
    },
    {
    "abbreviation": "KE",
    "capital": "Nairobi",
    "currency": "KES",
    "name": "Kenya",
    "phone": "254",
    "population": 48461567,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1280px-Flag_of_Kenya.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coat_of_arms_of_Kenya_%28Official%29.svg/1280px-Coat_of_arms_of_Kenya_(Official).svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kenya_%28orthographic_projection%29.svg/1280px-Kenya_(orthographic_projection).svg.png"
    },
    "id": 169
    },
    {
    "abbreviation": "SS",
    "capital": "Juba",
    "currency": "SSP",
    "name": "South Sudan",
    "phone": "211",
    "population": 12230730,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/1280px-Flag_of_South_Sudan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coat_of_arms_of_South_Sudan.svg/1280px-Coat_of_arms_of_South_Sudan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/South_Sudan_%28orthographic_projection%29_highlighted.svg/1920px-South_Sudan_%28orthographic_projection%29_highlighted.svg.png"
    },
    "id": 170
    },
    {
    "abbreviation": "SR",
    "capital": "Paramaribo",
    "currency": "SRD",
    "name": "Suriname",
    "phone": "597",
    "population": 558368,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1280px-Flag_of_Suriname.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Coat_of_arms_of_Suriname.svg/1280px-Coat_of_arms_of_Suriname.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/SUR_orthographic.svg/251280px-SUR_orthographic.svg.png"
    },
    "id": 171
    },
    {
    "abbreviation": "KI",
    "capital": "Tarawa",
    "currency": "AUD",
    "name": "Kiribati",
    "phone": "686",
    "population": 114395,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/1280px-Flag_of_Kiribati.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Coat_of_arms_of_Kiribati.svg/1280px-Coat_of_arms_of_Kiribati.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Kiribati_on_the_globe_%28Polynesia_centered%29.svg/1920px-Kiribati_on_the_globe_%28Polynesia_centered%29.svg.png"
    },
    "id": 172
    },
    {
    "abbreviation": "KH",
    "capital": "Phnom Penh",
    "currency": "KHR",
    "name": "Cambodia",
    "phone": "855",
    "population": 15762370,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1280px-Flag_of_Cambodia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Royal_arms_of_Cambodia.svg/1280px-Royal_arms_of_Cambodia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cambodia_on_the_globe_%28Cambodia_centered%29.svg/1920px-Cambodia_on_the_globe_%28Cambodia_centered%29.svg.png"
    },
    "id": 173
    },
    {
    "abbreviation": "KN",
    "capital": "Basseterre",
    "currency": "XCD",
    "name": "Saint Kitts and Nevis",
    "phone": "+1-869",
    "population": 54821,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/1280px-Flag_of_Saint_Kitts_and_Nevis.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Coat_of_arms_of_Saint_Kitts_and_Nevis.svg/1920px-Coat_of_arms_of_Saint_Kitts_and_Nevis.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/KNA_orthographic.svg/1920px-KNA_orthographic.svg.png"
    },
    "id": 174
    },
    {
    "abbreviation": "KM",
    "capital": "Moroni",
    "currency": "KMF",
    "name": "Comoros",
    "phone": "269",
    "population": 795601,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/1280px-Flag_of_the_Comoros.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Seal_of_the_Comoros.svg/1280px-Seal_of_the_Comoros.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Comoros_%28orthographic_projection%29.svg/1920px-Comoros_%28orthographic_projection%29.svg.png"
    },
    "id": 175
    },
    {
    "abbreviation": "ST",
    "capital": "Sao Tome",
    "currency": "STD",
    "name": "Sao Tome and Principe",
    "phone": "239",
    "population": 199910,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Sao_Tome_and_Principe.svg/1280px-Flag_of_Sao_Tome_and_Principe.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/1280px-Coat_of_arms_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Location_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_AU_Africa.svg/1920px-Location_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_AU_Africa.svg.png"
    },
    "id": 176
    },
    {
    "abbreviation": "SK",
    "capital": "Bratislava",
    "currency": "EUR",
    "name": "Slovakia",
    "phone": "421",
    "population": 5428704,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1280px-Flag_of_Slovakia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Coat_of_arms_of_Slovakia.svg/1280px-Coat_of_arms_of_Slovakia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/EU-Slovakia.svg/2560px-EU-Slovakia.svg.png"
    },
    "id": 177
    },
    {
    "abbreviation": "KR",
    "capital": "Seoul",
    "currency": "KRW",
    "name": "South Korea",
    "phone": "82",
    "population": 51245707,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Emblem_of_South_Korea.svg/1280px-Emblem_of_South_Korea.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Republic_of_Korea_%28orthographic_projection%29.svg/1920px-Republic_of_Korea_%28orthographic_projection%29.svg.png"
    },
    "id": 178
    },
    {
    "abbreviation": "SI",
    "capital": "Ljubljana",
    "currency": "EUR",
    "name": "Slovenia",
    "phone": "386",
    "population": 2064845,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1280px-Flag_of_Slovenia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Coat_of_arms_of_Slovenia.svg/1280px-Coat_of_arms_of_Slovenia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EU-Slovenia.svg/2560px-EU-Slovenia.svg.png"
    },
    "id": 179
    },
    {
    "abbreviation": "KP",
    "capital": "Pyongyang",
    "currency": "KPW",
    "name": "North Korea",
    "phone": "850",
    "population": 25368620,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1280px-Flag_of_North_Korea.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emblem_of_North_Korea.svg/1280px-Emblem_of_North_Korea.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Democratic_People%27s_Republic_of_Korea_%28orthographic_projection%29.svg/1920px-Democratic_People%27s_Republic_of_Korea_%28orthographic_projection%29.svg.png"
    },
    "id": 180
    },
    {
    "abbreviation": "KW",
    "capital": "Kuwait City",
    "currency": "KWD",
    "name": "Kuwait",
    "phone": "965",
    "population": 4052584,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1280px-Flag_of_Kuwait.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Emblem_of_Kuwait.svg/1280px-Emblem_of_Kuwait.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/KWT_orthographic.svg/251280px-KWT_orthographic.svg.png"
    },
    "id": 181
    },
    {
    "abbreviation": "SN",
    "capital": "Dakar",
    "currency": "XOF",
    "name": "Senegal",
    "phone": "221",
    "population": 15411614,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Coat_of_arms_of_Senegal.svg/1280px-Coat_of_arms_of_Senegal.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Senegal_%28orthographic_projection%29.svg/1920px-Senegal_%28orthographic_projection%29.svg.png"
    },
    "id": 182
    },
    {
    "abbreviation": "SM",
    "capital": "San Marino",
    "currency": "EUR",
    "name": "San Marino",
    "phone": "378",
    "population": 33203,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/1280px-Flag_of_San_Marino.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_San_Marino.svg/1280px-Coat_of_arms_of_San_Marino.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/San_Marino_Europe_Location.svg/2560px-San_Marino_Europe_Location.svg.png"
    },
    "id": 183
    },
    {
    "abbreviation": "SL",
    "capital": "Freetown",
    "currency": "SLL",
    "name": "Sierra Leone",
    "phone": "232",
    "population": 7396190,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/1280px-Flag_of_Sierra_Leone.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Coat_of_arms_of_Sierra_Leone.svg/1280px-Coat_of_arms_of_Sierra_Leone.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sierra_Leone_%28orthographic_projection%29.svg/1920px-Sierra_Leone_%28orthographic_projection%29.svg.png"
    },
    "id": 184
    },
    {
    "abbreviation": "SC",
    "capital": "Victoria",
    "currency": "SCR",
    "name": "Seychelles",
    "phone": "248",
    "population": 94677,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/1280px-Flag_of_Seychelles.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Coat_of_arms_of_Seychelles.svg/1280px-Coat_of_arms_of_Seychelles.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Location_Seychelles_AU_Africa.svg/1920px-Location_Seychelles_AU_Africa.svg.png"
    },
    "id": 185
    },
    {
    "abbreviation": "KZ",
    "capital": "Astana",
    "currency": "KZT",
    "name": "Kazakhstan",
    "phone": "7",
    "population": 17797032,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Emblem_of_Kazakhstan_latin.svg/1280px-Emblem_of_Kazakhstan_latin.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kazakhstan_%28orthographic_projection%29.svg/1280px-Kazakhstan_(orthographic_projection).svg.png"
    },
    "id": 186
    },
    {
    "abbreviation": "KY",
    "capital": "George Town",
    "currency": "KYD",
    "name": "Cayman Islands",
    "phone": "+1-345",
    "population": 60765,
    "media": {
    "flag": "https:1f1fe.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Coat_of_arms_of_the_Cayman_Islands.svg/1280px-Coat_of_arms_of_the_Cayman_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Cayman_Islands_in_United_Kingdom.svg/2560px-Cayman_Islands_in_United_Kingdom.svg.png"
    },
    "id": 187
    },
    {
    "abbreviation": "SG",
    "capital": "Singapur",
    "currency": "SGD",
    "name": "Singapore",
    "phone": "65",
    "population": 5607283,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1280px-Flag_of_Singapore.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Coat_of_arms_of_Singapore.svg/1280px-Coat_of_arms_of_Singapore.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Singapore_on_the_globe_%28Southeast_Asia_centered%29_zoom.svg/1920px-Singapore_on_the_globe_%28Southeast_Asia_centered%29_zoom.svg.png"
    },
    "id": 188
    },
    {
    "abbreviation": "SE",
    "capital": "Stockholm",
    "currency": "SEK",
    "name": "Sweden",
    "phone": "46",
    "population": 9903122,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1280px-Flag_of_Sweden.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Sweden.svg/1280px-Coat_of_arms_of_Sweden.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/EU-Sweden_%28orthographic_projection%29.svg/1920px-EU-Sweden_%28orthographic_projection%29.svg.png"
    },
    "id": 189
    },
    {
    "abbreviation": "SD",
    "capital": "Khartoum",
    "currency": "SDG",
    "name": "Sudan",
    "phone": "249",
    "population": 39578828,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1280px-Flag_of_Sudan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Emblem_of_Sudan.svg/1280px-Emblem_of_Sudan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sudan_%28orthographic_projection%29_highlighted.svg/1920px-Sudan_%28orthographic_projection%29_highlighted.svg.png"
    },
    "id": 190
    },
    {
    "abbreviation": "DO",
    "capital": "Santo Domingo",
    "currency": "DOP",
    "name": "Dominican Republic",
    "phone": "+1-809 and 1-829",
    "population": 10648791,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_the_Dominican_Republic.svg/1280px-Coat_of_arms_of_the_Dominican_Republic.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Dominican_Republic_%28orthographic_projection%29.svg/1280px-Dominican_Republic_(orthographic_projection).svg.png"
    },
    "id": 191
    },
    {
    "abbreviation": "DM",
    "capital": "Roseau",
    "currency": "XCD",
    "name": "Dominica",
    "phone": "+1-767",
    "population": 73543,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1280px-Flag_of_Dominica.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat-of-arms-of-Dominica.svg/1280px-Coat-of-arms-of-Dominica.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dominica_on_the_globe_%28Americas_centered%29.svg/1920px-Dominica_on_the_globe_%28Americas_centered%29.svg.png"
    },
    "id": 192
    },
    {
    "abbreviation": "DJ",
    "capital": "Djibouti",
    "currency": "DJF",
    "name": "Djibouti",
    "phone": "253",
    "population": 942333,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/1280px-Flag_of_Djibouti.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Emblem_of_Djibouti.svg/1280px-Emblem_of_Djibouti.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Djibouti_%28orthographic_projection%29.svg/1280px-Djibouti_(orthographic_projection).svg.png"
    },
    "id": 193
    },
    {
    "abbreviation": "DK",
    "capital": "Copenhagen",
    "currency": "DKK",
    "name": "Denmark",
    "phone": "45",
    "population": 5731118,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/National_Coat_of_arms_of_Denmark.svg/1280px-National_Coat_of_arms_of_Denmark.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kingdom_of_Denmark_%28orthographic_projection%29.svg/1280px-Kingdom_of_Denmark_(orthographic_projection).svg.png"
    },
    "id": 194
    },
    {
    "abbreviation": "VG",
    "capital": "Road Town",
    "currency": "USD",
    "name": "British Virgin Islands",
    "phone": "+1-284",
    "population": 30661,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/1280px-Flag_of_the_British_Virgin_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Coat_of_arms_of_the_British_Virgin_Islands.svg/1280px-Coat_of_arms_of_the_British_Virgin_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/British_Virgin_Islands_on_the_globe_%28Americas_centered%29.svg/1920px-British_Virgin_Islands_on_the_globe_%28Americas_centered%29.svg.png"
    },
    "id": 195
    },
    {
    "abbreviation": "DE",
    "capital": "Berlin",
    "currency": "EUR",
    "name": "Germany",
    "phone": "49",
    "population": 82667685,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/1280px-Coat_of_arms_of_Germany.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/EU-Germany_%28orthographic_projection%29.svg/1920px-EU-Germany_%28orthographic_projection%29.svg.png"
    },
    "id": 196
    },
    {
    "abbreviation": "YE",
    "capital": "Sanaa",
    "currency": "YER",
    "name": "Yemen",
    "phone": "967",
    "population": 27584213,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1280px-Flag_of_Yemen.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emblem_of_Yemen.svg/1280px-Emblem_of_Yemen.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yemen_on_the_globe_%28Yemen_centered%29.svg/1920px-Yemen_on_the_globe_%28Yemen_centered%29.svg.png"
    },
    "id": 197
    },
    {
    "abbreviation": "DZ",
    "capital": "Algiers",
    "currency": "DZD",
    "name": "Algeria",
    "phone": "213",
    "population": 40606052,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Emblem_of_Algeria.svg/1280px-Emblem_of_Algeria.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Algeria_%28centered_orthographic_projection%29.svg/1920px-Algeria_%28centered_orthographic_projection%29.svg.png"
    },
    "id": 198
    },
    {
    "abbreviation": "US",
    "capital": "Washington",
    "currency": "USD",
    "name": "United States",
    "phone": "1",
    "population": 323127513,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Greater_coat_of_arms_of_the_United_States.svg/1280px-Greater_coat_of_arms_of_the_United_States.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/USA_orthographic.svg/221280px-USA_orthographic.svg.png"
    },
    "id": 199
    },
    {
    "abbreviation": "UY",
    "capital": "Montevideo",
    "currency": "UYU",
    "name": "Uruguay",
    "phone": "598",
    "population": 3444006,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Coat_of_arms_of_Uruguay.svg/1280px-Coat_of_arms_of_Uruguay.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/URY_orthographic.svg/221280px-URY_orthographic.svg.png"
    },
    "id": 200
    },
    {
    "abbreviation": "YT",
    "capital": "Mamoudzou",
    "currency": "EUR",
    "name": "Mayotte",
    "phone": "262",
    "population": 320901,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_Arms_of_Mayotte.svg/1280px-Coat_of_Arms_of_Mayotte.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/D%C3%A9partement_976_in_France_%28zoom%29.svg/2560px-D%C3%A9partement_976_in_France_%28zoom%29.svg.png"
    },
    "id": 201
    },
    {
    "abbreviation": "UM",
    "capital": "Washington",
    "currency": "USD",
    "name": "United States Minor Outlying Islands",
    "phone": "1",
    "population": 316,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/2560px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Greater_coat_of_arms_of_the_United_States.svg/1920px-Greater_coat_of_arms_of_the_United_States.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/7/72/United_States_Minor_Outlying_Islands.png"
    },
    "id": 202
    },
    {
    "abbreviation": "LB",
    "capital": "Beirut",
    "currency": "LBP",
    "name": "Lebanon",
    "phone": "961",
    "population": 6006668,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1280px-Flag_of_Lebanon.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Coat_of_arms_of_Lebanon.svg/1280px-Coat_of_arms_of_Lebanon.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lebanon_%28orthographic_projection%29.svg/1280px-Lebanon_(orthographic_projection).svg.png"
    },
    "id": 203
    },
    {
    "abbreviation": "LC",
    "capital": "Castries",
    "currency": "XCD",
    "name": "Saint Lucia",
    "phone": "+1-758",
    "population": 178015,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1280px-Flag_of_Saint_Lucia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Coat_of_arms_of_Saint_Lucia.svg/1280px-Coat_of_arms_of_Saint_Lucia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Saint_Lucia_on_the_globe_%28Americas_centered%29.svg/1920px-Saint_Lucia_on_the_globe_%28Americas_centered%29.svg.png"
    },
    "id": 204
    },
    {
    "abbreviation": "LA",
    "capital": "Vientiane",
    "currency": "LAK",
    "name": "Laos",
    "phone": "856",
    "population": 6758353,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1280px-Flag_of_Laos.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Emblem_of_Laos.svg/1280px-Emblem_of_Laos.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Laos_%28orthographic_projection%29.svg/1280px-Laos_(orthographic_projection).svg.png"
    },
    "id": 205
    },
    {
    "abbreviation": "TV",
    "capital": "Funafuti",
    "currency": "AUD",
    "name": "Tuvalu",
    "phone": "688",
    "population": 11097,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1280px-Flag_of_Tuvalu.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Coat_of_arms_of_Tuvalu.svg/1280px-Coat_of_arms_of_Tuvalu.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tuvalu_on_the_globe_%28Polynesia_centered%29.svg/1920px-Tuvalu_on_the_globe_%28Polynesia_centered%29.svg.png"
    },
    "id": 206
    },
    {
    "abbreviation": "TW",
    "capital": "Taipei",
    "currency": "TWD",
    "name": "Taiwan",
    "phone": "886",
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1280px-Flag_of_the_Republic_of_China.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/National_Emblem_of_the_Republic_of_China.svg/1280px-National_Emblem_of_the_Republic_of_China.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Island_of_Taiwan_%28orthographic_projection%29.svg/1280px-Island_of_Taiwan_(orthographic_projection).svg.png"
    },
    "id": 207
    },
    {
    "abbreviation": "TT",
    "capital": "Port of Spain",
    "currency": "TTD",
    "name": "Trinidad and Tobago",
    "phone": "+1-868",
    "population": 1364962,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1280px-Flag_of_Trinidad_and_Tobago.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Coat_of_arms_of_Trinidad_and_Tobago.svg/1280px-Coat_of_arms_of_Trinidad_and_Tobago.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Trinidad_and_Tobago_%28orthographic_projection%29.svg/1280px-Trinidad_and_Tobago_(orthographic_projection).svg.png"
    },
    "id": 208
    },
    {
    "abbreviation": "TR",
    "capital": "Ankara",
    "currency": "TRY",
    "name": "Turkey",
    "phone": "90",
    "population": 79512426,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1280px-Flag_of_Turkey.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Turkey_%28orthographic_projection%29.svg/1280px-Turkey_(orthographic_projection).svg.png"
    },
    "id": 209
    },
    {
    "abbreviation": "LK",
    "capital": "Colombo",
    "currency": "LKR",
    "name": "Sri Lanka",
    "phone": "94",
    "population": 21203000,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1280px-Flag_of_Sri_Lanka.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Emblem_of_Sri_Lanka.svg/1280px-Emblem_of_Sri_Lanka.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sri_Lanka_%28orthographic_projection%29.svg/1280px-Sri_Lanka_(orthographic_projection).svg.png"
    },
    "id": 210
    },
    {
    "abbreviation": "LI",
    "capital": "Vaduz",
    "currency": "CHF",
    "name": "Liechtenstein",
    "phone": "423",
    "population": 37666,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1280px-Flag_of_Liechtenstein.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Staatswappen-Liechtensteins.svg/1280px-Staatswappen-Liechtensteins.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Europe-Liechtenstein.svg/2560px-Europe-Liechtenstein.svg.png"
    },
    "id": 211
    },
    {
    "abbreviation": "LV",
    "capital": "Riga",
    "currency": "EUR",
    "name": "Latvia",
    "phone": "371",
    "population": 1960424,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1280px-Flag_of_Latvia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Coat_of_arms_of_Latvia.svg/1280px-Coat_of_arms_of_Latvia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EU-Latvia.svg/2560px-EU-Latvia.svg.png"
    },
    "id": 212
    },
    {
    "abbreviation": "TO",
    "capital": "Nuku'alofa",
    "currency": "TOP",
    "name": "Tonga",
    "phone": "676",
    "population": 107122,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/1280px-Flag_of_Tonga.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Coat_of_arms_of_Tonga.svg/1280px-Coat_of_arms_of_Tonga.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tonga_on_the_globe_%28Polynesia_centered%29.svg/1920px-Tonga_on_the_globe_%28Polynesia_centered%29.svg.png"
    },
    "id": 213
    },
    {
    "abbreviation": "LT",
    "capital": "Vilnius",
    "currency": "LTL",
    "name": "Lithuania",
    "phone": "370",
    "population": 2872298,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1280px-Flag_of_Lithuania.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Lithuania.svg/1280px-Coat_of_arms_of_Lithuania.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/EU-Lithuania.svg/2560px-EU-Lithuania.svg.png"
    },
    "id": 214
    },
    {
    "abbreviation": "LU",
    "capital": "Luxembourg",
    "currency": "EUR",
    "name": "Luxembourg",
    "phone": "352",
    "population": 582972,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1280px-Flag_of_Luxembourg.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_Luxembourg.svg/1280px-Coat_of_arms_of_Luxembourg.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/EU-Luxembourg.svg/2560px-EU-Luxembourg.svg.png"
    },
    "id": 215
    },
    {
    "abbreviation": "LR",
    "capital": "Monrovia",
    "currency": "LRD",
    "name": "Liberia",
    "phone": "231",
    "population": 4613823,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/1280px-Flag_of_Liberia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Coat_of_arms_of_Liberia.svg/1280px-Coat_of_arms_of_Liberia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Liberia_%28orthographic_projection%29.svg/1920px-Liberia_%28orthographic_projection%29.svg.png"
    },
    "id": 216
    },
    {
    "abbreviation": "LS",
    "capital": "Maseru",
    "currency": "LSL",
    "name": "Lesotho",
    "phone": "266",
    "population": 2203821,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/1280px-Flag_of_Lesotho.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coat_of_arms_of_Lesotho.svg/1280px-Coat_of_arms_of_Lesotho.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lesotho_%28orthographic_projection%29.svg/1920px-Lesotho_%28orthographic_projection%29.svg.png"
    },
    "id": 217
    },
    {
    "abbreviation": "TH",
    "capital": "Bangkok",
    "currency": "THB",
    "name": "Thailand",
    "phone": "66",
    "population": 68863514,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1280px-Flag_of_Thailand.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Thailand.svg/1280px-Emblem_of_Thailand.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Thailand_%28orthographic_projection%29.svg/1280px-Thailand_(orthographic_projection).svg.png"
    },
    "id": 218
    },
    {
    "abbreviation": "TF",
    "capital": "Saint Pierre",
    "currency": "EUR",
    "name": "French Southern Territories",
    "phone": "None",
    "population": 400,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_the_French_Southern_and_Antarctic_Lands.svg/2560px-Flag_of_the_French_Southern_and_Antarctic_Lands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Armoiries_des_Terres_australes_et_antarctiques_fran%C3%A7aises.svg/1280px-Armoiries_des_Terres_australes_et_antarctiques_fran%C3%A7aises.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/France_on_the_globe_%28French_Southern_and_Antarctic_Lands_special%29_%28Madagascar_centered%29.svg/1920px-France_on_the_globe_%28French_Southern_and_Antarctic_Lands_special%29_%28Madagascar_centered%29.svg.png"
    },
    "id": 219
    },
    {
    "abbreviation": "TG",
    "capital": "Lome",
    "currency": "XOF",
    "name": "Togo",
    "phone": "228",
    "population": 7606374,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/1280px-Flag_of_Togo.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Emblem_of_Togo.svg/1280px-Emblem_of_Togo.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Location_Togo_AU_Africa.svg/1920px-Location_Togo_AU_Africa.svg.png"
    },
    "id": 220
    },
    {
    "abbreviation": "TD",
    "capital": "N'Djamena",
    "currency": "XAF",
    "name": "Chad",
    "phone": "235",
    "population": 14452543,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1280px-Flag_of_Chad.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Coat_of_arms_of_Chad.svg/1280px-Coat_of_arms_of_Chad.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Chad_%28orthographic_projection%29.svg/1280px-Chad_(orthographic_projection).svg.png"
    },
    "id": 221
    },
    {
    "abbreviation": "TC",
    "capital": "Cockburn Town",
    "currency": "USD",
    "name": "Turks and Caicos Islands",
    "phone": "+1-649",
    "population": 34900,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg/1280px-Flag_of_the_Turks_and_Caicos_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coat_of_arms_of_the_Turks_and_Caicos_Islands.svg/1280px-Coat_of_arms_of_the_Turks_and_Caicos_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Turks_and_Caicos_Islands_in_United_Kingdom_%28special_marker%29.svg/2560px-Turks_and_Caicos_Islands_in_United_Kingdom_%28special_marker%29.svg.png"
    },
    "id": 222
    },
    {
    "abbreviation": "LY",
    "capital": "Tripolis",
    "currency": "LYD",
    "name": "Libya",
    "phone": "218",
    "population": 6293253,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1280px-Flag_of_Libya.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/The_emblem_on_the_passport_of_Libya.svg/1280px-The_emblem_on_the_passport_of_Libya.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Libya_%28centered_orthographic_projection%29.svg/1920px-Libya_%28centered_orthographic_projection%29.svg.png"
    },
    "id": 223
    },
    {
    "abbreviation": "VA",
    "capital": "Vatican City",
    "currency": "EUR",
    "name": "Vatican",
    "phone": "379",
    "population": 764,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/1024px-Flag_of_the_Vatican_City.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Coat_of_arms_of_the_Vatican_City.svg/1280px-Coat_of_arms_of_the_Vatican_City.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Vatican_Europe_Location.svg/2560px-Vatican_Europe_Location.svg.png"
    },
    "id": 224
    },
    {
    "abbreviation": "VC",
    "capital": "Kingstown",
    "currency": "XCD",
    "name": "Saint Vincent and the Grenadines",
    "phone": "+1-784",
    "population": 109643,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1280px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Coat_of_arms_of_Saint_Vincent_and_the_Grenadines.svg/1280px-Coat_of_arms_of_Saint_Vincent_and_the_Grenadines.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/VCT_orthographic.svg/1920px-VCT_orthographic.svg.png"
    },
    "id": 225
    },
    {
    "abbreviation": "AE",
    "capital": "Abu Dhabi",
    "currency": "AED",
    "name": "United Arab Emirates",
    "phone": "971",
    "population": 9269612,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_United_Arab_Emirates.svg/1280px-Emblem_of_the_United_Arab_Emirates.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/United_Arab_Emirates_%28orthographic_projection%29.svg/1280px-United_Arab_Emirates_(orthographic_projection).svg.png"
    },
    "id": 226
    },
    {
    "abbreviation": "AD",
    "capital": "Andorra la Vella",
    "currency": "EUR",
    "name": "Andorra",
    "phone": "376",
    "population": 77281,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1280px-Flag_of_Andorra.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_Andorra.svg/1280px-Coat_of_arms_of_Andorra.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/1/12/Location_Andorra_Europe.png"
    },
    "id": 227
    },
    {
    "abbreviation": "AG",
    "capital": "St. John's",
    "currency": "XCD",
    "name": "Antigua and Barbuda",
    "phone": "+1-268",
    "population": 100963,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1280px-Flag_of_Antigua_and_Barbuda.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Coat_of_arms_of_Antigua_and_Barbuda.svg/1280px-Coat_of_arms_of_Antigua_and_Barbuda.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ATG_orthographic.svg/251280px-ATG_orthographic.svg.png"
    },
    "id": 228
    },
    {
    "abbreviation": "AF",
    "capital": "Kabul",
    "currency": "AFN",
    "name": "Afghanistan",
    "phone": "93",
    "population": 34656032,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/2880px-Flag_of_the_Taliban.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Arms_of_the_Islamic_Emirate_of_Afghanistan.svg/1920px-Arms_of_the_Islamic_Emirate_of_Afghanistan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Afghanistan_%28orthographic_projection%29.svg/1280px-Afghanistan_(orthographic_projection).svg.png"
    },
    "id": 229
    },
    {
    "abbreviation": "AI",
    "capital": "The Valley",
    "currency": "XCD",
    "name": "Anguilla",
    "population": 18741,
    "phone": "+1-264",
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Anguilla.svg/1280px-Flag_of_Anguilla.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Coat_of_arms_of_Anguilla.svg/1280px-Coat_of_arms_of_Anguilla.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Anguilla_in_United_Kingdom.svg/2560px-Anguilla_in_United_Kingdom.svg.png"
    },
    "id": 230
    },
    {
    "abbreviation": "VI",
    "capital": "Charlotte Amalie",
    "currency": "USD",
    "name": "U.S. Virgin Islands",
    "phone": "+1-340",
    "population": 102951,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/2560px-Flag_of_the_United_States_Virgin_Islands.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Seal_of_the_United_States_Virgin_Islands.svg/1280px-Seal_of_the_United_States_Virgin_Islands.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/United_States_Virgin_Islands_on_the_globe_%28Americas_centered%29.svg/1920px-United_States_Virgin_Islands_on_the_globe_%28Americas_centered%29.svg.png"
    },
    "id": 231
    },
    {
    "abbreviation": "IS",
    "capital": "Reykjavik",
    "currency": "ISK",
    "name": "Iceland",
    "phone": "354",
    "population": 334252,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1280px-Flag_of_Iceland.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Coat_of_arms_of_Iceland.svg/1280px-Coat_of_arms_of_Iceland.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Iceland_%28orthographic_projection%29.svg/1280px-Iceland_(orthographic_projection).svg.png"
    },
    "id": 232
    },
    {
    "abbreviation": "IR",
    "capital": "Tehran",
    "currency": "IRR",
    "name": "Iran",
    "phone": "98",
    "population": 80277428,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1280px-Flag_of_Iran.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Emblem_of_Iran.svg/1280px-Emblem_of_Iran.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Iran_%28orthographic_projection%29.svg/1280px-Iran_(orthographic_projection).svg.png"
    },
    "id": 233
    },
    {
    "abbreviation": "AM",
    "capital": "Yerevan",
    "currency": "AMD",
    "name": "Armenia",
    "phone": "374",
    "population": 2924816,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Coat_of_arms_of_Armenia.svg/1280px-Coat_of_arms_of_Armenia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Armenia_%28orthographic_projection%29.svg/1280px-Armenia_(orthographic_projection).svg.png"
    },
    "id": 234
    },
    {
    "abbreviation": "AL",
    "capital": "Tirana",
    "currency": "ALL",
    "name": "Albania",
    "phone": "355",
    "population": 2876101,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1280px-Flag_of_Albania.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Coat_of_arms_of_Albania.svg/1280px-Coat_of_arms_of_Albania.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Albania_%28orthographic_projection%29.svg/1280px-Albania_(orthographic_projection).svg.png"
    },
    "id": 235
    },
    {
    "abbreviation": "AO",
    "capital": "Luanda",
    "currency": "AOA",
    "name": "Angola",
    "phone": "244",
    "population": 28813463,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Emblem_of_Angola.svg/1280px-Emblem_of_Angola.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Angola_%28orthographic_projection%29.svg/1280px-Angola_(orthographic_projection).svg.png"
    },
    "id": 236
    },
    {
    "abbreviation": "AQ",
    "capital": "None",
    "currency": "None",
    "name": "Antarctica",
    "phone": "None",
    "population": 1300,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg/1024px-Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg.png",
    "emblem": "",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/1280px-Antarctica_(orthographic_projection).svg.png"
    },
    "id": 237
    },
    {
    "abbreviation": "AS",
    "capital": "Pago Pago",
    "currency": "USD",
    "name": "American Samoa",
    "phone": "+1-684",
    "population": 55599,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_American_Samoa.svg/1280px-Flag_of_American_Samoa.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Seal_of_American_Samoa.svg/1280px-Seal_of_American_Samoa.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/American_Samoa_on_the_globe_%28Polynesia_centered%29.svg/1920px-American_Samoa_on_the_globe_%28Polynesia_centered%29.svg.png"
    },
    "id": 238
    },
    {
    "abbreviation": "AR",
    "capital": "Buenos Aires",
    "currency": "ARS",
    "name": "Argentina",
    "phone": "54",
    "population": 43847430,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coat_of_arms_of_Argentina.svg/1280px-Coat_of_arms_of_Argentina.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/ARG_orthographic_%28%2Ball_claims%29.svg/1920px-ARG_orthographic_%28%2Ball_claims%29.svg.png"
    },
    "id": 239
    },
    {
    "abbreviation": "AU",
    "capital": "Canberra",
    "currency": "AUD",
    "name": "Australia",
    "phone": "61",
    "population": 24127159,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Coat_of_Arms_of_Australia.svg/1280px-Coat_of_Arms_of_Australia.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Australia_with_AAT_%28orthographic_projection%29.svg/1280px-Australia_with_AAT_(orthographic_projection).svg.png"
    },
    "id": 240
    },
    {
    "abbreviation": "AT",
    "capital": "Vienna",
    "currency": "EUR",
    "name": "Austria",
    "phone": "43",
    "population": 8747358,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Austria_Bundesadler.svg/1280px-Austria_Bundesadler.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/EU-Austria_%28orthographic_projection%29.svg/1920px-EU-Austria_%28orthographic_projection%29.svg.png"
    },
    "id": 241
    },
    {
    "abbreviation": "AW",
    "capital": "Oranjestad",
    "currency": "AWG",
    "name": "Aruba",
    "phone": "297",
    "population": 104822,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Aruba.svg/1280px-Flag_of_Aruba.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_Aruba.svg/1280px-Coat_of_arms_of_Aruba.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Aruba_in_its_region_%28zoom%29.svg/2560px-Aruba_in_its_region_%28zoom%29.svg.png"
    },
    "id": 242
    },
    {
    "abbreviation": "IN",
    "capital": "New Delhi",
    "currency": "INR",
    "name": "India",
    "phone": "91",
    "population": 1324171354,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1280px-Emblem_of_India.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_%28orthographic_projection%29.svg/1280px-India_(orthographic_projection).svg.png"
    },
    "id": 243
    },
    {
    "abbreviation": "AX",
    "capital": "Mariehamn",
    "currency": "EUR",
    "name": "Aland Islands",
    "phone": "+358-18",
    "population": 30129,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/2560px-Flag_of_%C3%85land.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_%C3%85land.svg/1280px-Coat_of_arms_of_%C3%85land.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ahvenanmaa_in_Finland.svg/1280px-Ahvenanmaa_in_Finland.svg.png"
    },
    "id": 244
    },
    {
    "abbreviation": "AZ",
    "capital": "Baku",
    "currency": "AZN",
    "name": "Azerbaijan",
    "phone": "994",
    "population": 9762274,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1280px-Flag_of_Azerbaijan.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Emblem_of_Azerbaijan.svg/1280px-Emblem_of_Azerbaijan.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Azerbaijan_orthographic_projection.svg/1920px-Azerbaijan_orthographic_projection.svg.png"
    },
    "id": 245
    },
    {
    "abbreviation": "IE",
    "capital": "Dublin",
    "currency": "EUR",
    "name": "Ireland",
    "phone": "353",
    "population": 4773095,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1280px-Flag_of_Ireland.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Coat_of_arms_of_Ireland.svg/1280px-Coat_of_arms_of_Ireland.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/EU-Ireland_%28orthographic_projection%29.svg/1920px-EU-Ireland_%28orthographic_projection%29.svg.png"
    },
    "id": 246
    },
    {
    "abbreviation": "ID",
    "capital": "Jakarta",
    "currency": "IDR",
    "name": "Indonesia",
    "phone": "62",
    "population": 261115456,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/National_emblem_of_Indonesia_Garuda_Pancasila.svg/1280px-National_emblem_of_Indonesia_Garuda_Pancasila.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Indonesia_%28orthographic_projection%29.svg/1280px-Indonesia_(orthographic_projection).svg.png"
    },
    "id": 247
    },
    {
    "abbreviation": "UA",
    "capital": "Kiev",
    "currency": "UAH",
    "name": "Ukraine",
    "phone": "380",
    "population": 45004645,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Lesser_Coat_of_Arms_of_Ukraine.svg/1280px-Lesser_Coat_of_Arms_of_Ukraine.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Ukraine_%28orthographic_projection%29_with_Disputed_Land.png"
    },
    "id": 248
    },
    {
    "abbreviation": "QA",
    "capital": "Doha",
    "currency": "QAR",
    "name": "Qatar",
    "phone": "974",
    "population": 2569804,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1280px-Flag_of_Qatar.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/1280px-Emblem_of_Qatar.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/QAT_orthographic.svg/251280px-QAT_orthographic.svg.png"
    },
    "id": 249
    },
    {
    "abbreviation": "MZ",
    "capital": "Maputo",
    "currency": "MZN",
    "name": "Mozambique",
    "phone": "258",
    "population": 28829476,
    "media": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1280px-Flag_of_Mozambique.svg.png",
    "emblem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Emblem_of_Mozambique.svg/1280px-Emblem_of_Mozambique.svg.png",
    "orthographic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mozambique_%28orthographic_projection%29.svg/1920px-Mozambique_%28orthographic_projection%29.svg.png"
    },
    "id": 250
    }
    ]

export default countries