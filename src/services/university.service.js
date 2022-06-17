const university_url = 'http://universities.hipolabs.com/search?name='


const universities = [
  {
    "domains": [
      "marywood.edu"
    ],
    "web_pages": [
      "http://www.marywood.edu"
    ],
    "state-province": null,
    "name": "Marywood University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "upes.ac.in"
    ],
    "web_pages": [
      "https://www.upes.ac.in/"
    ],
    "state-province": "Dehradun",
    "name": "University of Petroleum and Energy Studies",
    "country": "India",
    "alpha_two_code": "IN"
  },
  {
    "domains": [
      "cstj.qc.ca"
    ],
    "web_pages": [
      "https://www.cstj.qc.ca",
      "https://ccmt.cstj.qc.ca",
      "https://ccml.cstj.qc.ca"
    ],
    "state-province": null,
    "name": "C\u00e9gep de Saint-J\u00e9r\u00f4me",
    "country": "Canada",
    "alpha_two_code": "CA"
  },
  {
    "domains": [
      "lindenwood.edu"
    ],
    "web_pages": [
      "http://www.lindenwood.edu/"
    ],
    "state-province": null,
    "name": "Lindenwood University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "davietjal.org"
    ],
    "web_pages": [
      "http://www.davietjal.org/"
    ],
    "state-province": "Punjab",
    "name": "DAV Institute of Engineering & Technology",
    "country": "India",
    "alpha_two_code": "IN"
  },
  {
    "domains": [
      "lpu.in"
    ],
    "web_pages": [
      "http://www.lpu.in/"
    ],
    "state-province": "Punjab",
    "name": "Lovely Professional University",
    "country": "India",
    "alpha_two_code": "IN"
  },
  {
    "domains": [
      "sullivan.edu"
    ],
    "web_pages": [
      "https://sullivan.edu/"
    ],
    "state-province": null,
    "name": "Sullivan University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "fscj.edu"
    ],
    "web_pages": [
      "https://www.fscj.edu/"
    ],
    "state-province": null,
    "name": "Florida State College at Jacksonville",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "xavier.edu"
    ],
    "web_pages": [
      "https://www.xavier.edu/"
    ],
    "state-province": null,
    "name": "Xavier University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "tusculum.edu"
    ],
    "web_pages": [
      "https://home.tusculum.edu/"
    ],
    "state-province": null,
    "name": "Tusculum College",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "cst.edu"
    ],
    "web_pages": [
      "https://cst.edu/"
    ],
    "state-province": null,
    "name": "Claremont School of Theology",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "somaiya.edu"
    ],
    "web_pages": [
      "https://somaiya.edu/"
    ],
    "state-province": null,
    "name": "Somaiya Vidyavihar",
    "country": "India",
    "alpha_two_code": "IN"
  },
  {
    "domains": [
      "columbiasc.edu"
    ],
    "web_pages": [
      "https://www.columbiasc.edu/"
    ],
    "state-province": null,
    "name": "Columbia College (SC)",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "clpccd.edu"
    ],
    "web_pages": [
      "http://www.clpccd.edu/"
    ],
    "state-province": null,
    "name": "Chabot-Las Positas Community College District",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "keller.edu"
    ],
    "web_pages": [
      "https://www.keller.edu/"
    ],
    "state-province": null,
    "name": "Keller Graduate School of Management",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "monroecollege.edu"
    ],
    "web_pages": [
      "https://monroecollege.edu/"
    ],
    "state-province": null,
    "name": "Monroe College",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "smccd.edu"
    ],
    "web_pages": [
      "https://smccd.edu/"
    ],
    "state-province": null,
    "name": "San Mateo County Community College District",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "losrios.edu"
    ],
    "web_pages": [
      "http://losrios.edu/"
    ],
    "state-province": null,
    "name": "Los Rios Community College District",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "digipen.edu"
    ],
    "web_pages": [
      "https://www.digipen.edu/"
    ],
    "state-province": null,
    "name": "DigiPen Institute of Technology",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "upmc.edu",
      "upmc.com"
    ],
    "web_pages": [
      "https://www.upmc.com/"
    ],
    "state-province": "Pennsylvania",
    "name": "University of Pittsburgh Medical Center",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "cgu.edu"
    ],
    "web_pages": [
      "https://www.cgu.edu/"
    ],
    "state-province": null,
    "name": "Claremont Graduate University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "utrgv.edu"
    ],
    "web_pages": [
      "http://www.utrgv.edu/"
    ],
    "state-province": null,
    "name": "University of Texas Rio Grande Valley",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "mountsaintvincent.edu"
    ],
    "web_pages": [
      "https://mountsaintvincent.edu/"
    ],
    "state-province": null,
    "name": "College of Mount Saint Vincent",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "uasys.edu"
    ],
    "web_pages": [
      "https://www.uasys.edu/"
    ],
    "state-province": null,
    "name": "University of Arkansas System eVersity",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "ecpi.edu"
    ],
    "web_pages": [
      "https://www.ecpi.edu/"
    ],
    "state-province": null,
    "name": "ECPI University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "umw.edu"
    ],
    "web_pages": [
      "https://www.umw.edu/"
    ],
    "state-province": null,
    "name": "University of Mary Washington",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "bw.edu"
    ],
    "web_pages": [
      "https://www.bw.edu/"
    ],
    "state-province": null,
    "name": "Baldwin Wallace University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "csuci.edu"
    ],
    "web_pages": [
      "https://www.csuci.edu/"
    ],
    "state-province": null,
    "name": "California State University Channel Islands",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "brandman.edu"
    ],
    "web_pages": [
      "https://www.brandman.edu/"
    ],
    "state-province": null,
    "name": "Brandman University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "uscga.edu"
    ],
    "web_pages": [
      "http://www.uscga.edu/"
    ],
    "state-province": null,
    "name": "United States Coast Guard Academy",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "athens.edu"
    ],
    "web_pages": [
      "http://www.athens.edu/"
    ],
    "state-province": null,
    "name": "Athens State University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "scripps.edu"
    ],
    "web_pages": [
      "https://scripps.edu/"
    ],
    "state-province": null,
    "name": "The Scripps Research Institute",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "easternflorida.edu"
    ],
    "web_pages": [
      "http://www.easternflorida.edu/"
    ],
    "state-province": null,
    "name": "Eastern Florida State College",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "wne.edu"
    ],
    "web_pages": [
      "http://www1.wne.edu/"
    ],
    "state-province": null,
    "name": "Western New England University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "king.edu"
    ],
    "web_pages": [
      "https://king.edu/"
    ],
    "state-province": null,
    "name": "King University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "ggc.edu"
    ],
    "web_pages": [
      "https://ggc.edu/"
    ],
    "state-province": null,
    "name": "Georgia Gwinnett College",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "trident.edu"
    ],
    "web_pages": [
      "https://www.trident.edu/"
    ],
    "state-province": null,
    "name": "Trident University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "alliant.edu"
    ],
    "web_pages": [
      "https://www.alliant.edu/"
    ],
    "state-province": null,
    "name": "Alliant International University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "mvsu.edu"
    ],
    "web_pages": [
      "https://mvsu.edu/"
    ],
    "state-province": null,
    "name": "Mississippi Valley State University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "roosevelt.edu"
    ],
    "web_pages": [
      "https://www.roosevelt.edu/"
    ],
    "state-province": null,
    "name": "Roosevelt University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "itt-tech.info",
      "itt-tech.edu"
    ],
    "web_pages": [
      "http://itt-tech.info/"
    ],
    "state-province": null,
    "name": "ITT Technical Institute",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "iecc.edu"
    ],
    "web_pages": [
      "https://iecc.edu/"
    ],
    "state-province": null,
    "name": "Illinois Eastern Community Colleges",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "park.edu"
    ],
    "web_pages": [
      "https://park.edu/"
    ],
    "state-province": null,
    "name": "Park University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "mssm.edu"
    ],
    "web_pages": [
      "http://icahn.mssm.edu/"
    ],
    "state-province": null,
    "name": "Icahn School of Medicine at Mount Sinai",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "uvu.edu"
    ],
    "web_pages": [
      "https://uvu.edu/"
    ],
    "state-province": null,
    "name": "Utah Valley Uniersity",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "wlc.edu"
    ],
    "web_pages": [
      "http://www.wlc.edu/"
    ],
    "state-province": null,
    "name": "Wisconsin Lutheran College",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "rccd.edu"
    ],
    "web_pages": [
      "http://www.rccd.edu/"
    ],
    "state-province": null,
    "name": "Riverside Community College District",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "wakehealth.edu"
    ],
    "web_pages": [
      "http://www.wakehealth.edu/"
    ],
    "state-province": null,
    "name": "Wake Forest Baptist Health",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "umb.edu"
    ],
    "web_pages": [
      "https://www.umb.edu/"
    ],
    "state-province": null,
    "name": "University of Massachusetts Boston",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "floridapoly.edu"
    ],
    "web_pages": [
      "https://floridapoly.edu/"
    ],
    "state-province": null,
    "name": "Florida Polytechnic University",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "wagner.edu"
    ],
    "web_pages": [
      "https://wagner.edu/"
    ],
    "state-province": null,
    "name": "Wagner College",
    "country": "United States",
    "alpha_two_code": "US"
  },
  {
    "domains": [
      "wilmu.edu"
    ],
    "web_pages": [
      "https://www.wilmu.edu/"
    ],
    "state-province": null,
    "name": "Wilmington University",
    "country": "United States",
    "alpha_two_code": "US"
  }
];

export { universities, university_url };
