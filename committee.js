const members = [
    {
        name: "Rakesh Kumar Mohapatra",
        designation: "President",
        photo: "assets/images/members/president.jpg"
    },
    {
        name: "Bidur Prava Mohapatra",
        designation: "Vice President",
        photo: "assets/images/members/vice-president.jpg"
    },
    {
        name: "Mrutyunjaya Muduli",
        designation: "Secretary",
        photo: "assets/images/members/secretary.jpg"
    },
    {
        name: "Rakesh Kumar Swain",
        designation: "Treasurer",
        photo: "assets/images/members/treasurer.jpg"
    },
    {
        name: "Biren Mohapatra",
        designation: "Board Member",
        photo: "assets/images/members/member1.jpg"
    },
    {
        name: "Rahul Nayak",
        designation: "Board Member",
        photo: "assets/images/members/member2.jpg"
    },
    {
        name: "Gyana Ranjan Biswal",
        designation: "Board Member",
        photo: "assets/images/members/member3.jpg"
    },
    {
        name: "Sourav Muduli",
        designation: "Board Member",
        photo: "assets/images/members/member4.jpg"
    },
    {
        name: "Soumya Ranjan Das",
        designation: "Board Member",
        photo: "assets/images/members/member5.jpg"
    },
    {
        name: "Subash Mohapatra",
        designation: "Board Member",
        photo: "assets/images/members/member6.jpg"
    }
];

const container = document.getElementById("committee-container");

if (!container) {
    console.error("Committee container not found!");
} else {

    members.forEach(member => {

        const card = document.createElement("div");
        card.className = "member-card";

        card.innerHTML = `
    <img src="${member.photo}" alt="${member.name}">
    <h3>${member.name}</h3>
    <p class="designation">${member.designation}</p>
`;

        container.appendChild(card);
    });
}