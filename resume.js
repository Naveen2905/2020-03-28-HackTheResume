resumeData =
{
    "basics": {
        "name": "John Doe",
        "label": "Programmer",
        "picture": "",
        "email": "john@gmail.com",
        "phone": "(912) 555-4321",
        "website": "http://johndoe.com",
        "summary": "A summary of John Doe...",
        "location": {
            "address": "2712 Broadway St",
            "postalCode": "CA 94115",
            "city": "San Francisco",
            "countryCode": "US",
            "region": "California"
        },
        "profiles": [
            {
                "network": "Twitter",
                "username": "john",
                "url": "http://twitter.com/john"
            }
        ]
    },
    "work": [
        {
            "company": "Company",
            "position": "President",
            "website": "http://company.com",
            "startDate": "2013-01-01",
            "endDate": "2014-01-01",
            "summary": "Description...",
            "highlights": [
                "Started the company"
            ]
        }
    ],
    "volunteer": [
        {
            "organization": "Organization",
            "position": "Volunteer",
            "website": "http://organization.com/",
            "startDate": "2012-01-01",
            "endDate": "2013-01-01",
            "summary": "Description...",
            "highlights": [
                "Awarded 'Volunteer of the Month'"
            ]
        }
    ],
    "education": [
        {
            "institution": "University",
            "area": "Software Development",
            "studyType": "Bachelor",
            "startDate": "2011-01-01",
            "endDate": "2013-01-01",
            "gpa": "4.0",
            "courses": [
                "DB1101 - Basic SQL"
            ]
        }
    ],
    "awards": [
        {
            "title": "Award",
            "date": "2014-11-01",
            "awarder": "Company",
            "summary": "There is no spoon."
        }
    ],
    "publications": [
        {
            "name": "Publication",
            "publisher": "Company",
            "releaseDate": "2014-10-01",
            "website": "http://publication.com",
            "summary": "Description..."
        }
    ],
    "skills": [
        {
            "name": "Web Development",
            "level": "Master",
            "keywords": [
                "HTML",
                "CSS",
                "Javascript"
            ]
        }
    ],
    "languages": [
        {
            "language": "English",
            "fluency": "Native speaker"
        }
    ],
    "interests": [
        {
            "name": "Wildlife",
            "keywords": [
                "Ferrets",
                "Unicorns"
            ]
        }
    ],
    "references": [
        {
            "name": "Jane Doe",
            "reference": "Reference..."
        }
    ]
}

$(function () {
    console.log(resumeData);

    const candidateName = resumeData.basics.name;
    const label = resumeData.basics.label;
    const address = Object.values(resumeData.basics.location)
    const contactEmail = resumeData.basics.email;
    const contactPhone = resumeData.basics.phone;
    const website = resumeData.basics.website;
    const twitterProfile = Object.values(resumeData.basics.profiles[0])

    // Candidate Name & title
    $('.name').html(candidateName)
    $('.title').html(label)

    $('.location').html(`${address[0]}, ${address[1]}, ${address[2]}, ${address[3]}, ${address[4]}`)

    // contact details 
    $('.emailPhone').html(`Email : ${contactEmail} | ${contactPhone}`)

    $('.portfolioSite').html(`Portfolio : <a class="site" href="${website}">${website}</a> | <a class="site" href="${twitterProfile[2]}"><i class="fab fa-twitter"></i></a>, twitterUrl : <a class="site" href="${twitterProfile[2]}">@${twitterProfile[1]}</a> `)

    // Main Section Content Starts 
    const candidateSummary = resumeData.basics.summary;
    $('.profileSummary').html(`<p>${candidateSummary}</p>`)

    // Iterating Education array containing object 
    const edu = resumeData.education.map((eduData) => {
        console.log(eduData);
        return eduData
    })    

});