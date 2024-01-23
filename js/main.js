const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

for ( let member of team) {
    console.log(`Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`);
}

const teamContainer = document.getElementById('teamContainer');
for (let member of team) {
  const infoString = `Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`;
  const infoElement = document.createElement('p');
  infoElement.innerHTML = infoString;
  teamContainer.appendChild(infoElement);
}

