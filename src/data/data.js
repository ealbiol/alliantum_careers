

export const allEmployees = [
    { firstName: "Stephan", surname: "Diehl", departmentName: "Management", description: "The challenge of the future will be to attract, engage and develop talents. Let’s build the best possible environment for that all together.", photo: "StephanDiehl.jpg" },
    { firstName: "Carlos", surname: "Mayo", departmentName: "Management", description: "Life is too short to live it too little, so I like to do my best in all aspects. I like order and organisation. And...sharing a good meal and a good bottle of wine.", photo: "CarlosMayo.jpg" },
    { firstName: "Pilar", surname: "Dominguez", departmentName: "HR", description: "Travel lover, my philosophy is to travel and see the world, getting to know myself. If it is accompanied by a cup of green tea I am more than happy. Life begins where your comfort zone ends.", photo: "PilarDominguez.jpg" },
    { firstName: "Sandra", surname: "Alonso", departmentName: "HR", description: "Enjoying with everything that the life come up with. Looking for new experiences to keep developing myself, travel and good people is always a good option for that. If you are coming to see me, please bring chocolate and a smile.", photo: "SandraAlonso.jpg" },
    { firstName: "Juan", surname: "Bravo", departmentName: "Business System", description: "Enjoying with everything that the life come up with. Looking for new experiences to keep developing myself, travel and good people is always a good option for that. If you are coming to see me, please bring chocolate and a smile.", photo: "JuanBravo.jpg" },
    { firstName: "David", surname: "Moreno", departmentName: "Business System", description: "Adopted by the Python crew, and armed with the Odoo strengths. It's never a bad moment to write a beautiful code verse. I love building things, to shape them and see how they work and may help others.", photo: "DavidMoreno.jpg" },
    { firstName: "Jose", surname: "Robles", departmentName: "Business System", description: "With a kernel of maker_4.0, I am always trying to be at the edge of the brand new technologies like blockchain, IA, genetic engineering, etc… and of course in love with ERP systems like Odoo! ", photo: "JoseRobles.jpg" },
    { firstName: "Mariela", surname: "Gadeta", departmentName: "Digital Marketing", description: "E-commerce lover and brand developer. Trying to stick to the Gantt but sometimes secondary roads take you to better places. Also, the official birthday cards designer and the one who always says yes to an after office.", photo: "MarielaGadeta.jpg" },
    { firstName: "Eder", surname: "Iraizoz", departmentName: "Digital Marketing", description: "Always trying to learn and get to the best version of myself. I love solving problems, impossible missions, mountain hiking and climbing. Understanding people is my passion and I'm happily able to do it through my job: to make complex systems easy for humans.", photo: "EderIraizoz.jpg" },
    { firstName: "Rafa", surname: "Camón", departmentName: "Digital Marketing", description: "All terrain developer, now focused on backend side. Coding is my business. Love it since I was a child, and helping people to understand what's behind the magic. A young mind in a mature body.", photo: "RafaelCamon.jpg" },
    { firstName: "Eduard", surname: "Romero", departmentName: "Digital Marketing", description: "Developing is an endless open source to creativity an ingenuity. A powerful tool to build whichever structure your mind comes across with. My motto is: “Build it smarter, stronger, safer, cleaner and prettier”", photo: "EduardAlbiol.jpg" },
    { firstName: "Noelia", surname: "Fernández", departmentName: "Digital Marketing", description: "Like the cookie monster, cookies are my thing. Eating the real ones is my hobby. Tracking the virtual, my business. Whenever you go, whatever you do, you can be sure I’ll be there, too.", photo: "NoeliaFdez.jpg" },
    { firstName: "Chiara", surname: "Ranco", departmentName: "Digital Marketing", description: "Marketing and Communications lover; it's never one without the other. I like everything challenging, creative and aesthetic. Also known as the official paparazzi at the office, so watch out for me... ", photo: "ChiaraRanco.jpg" },
    { firstName: "Hector", surname: "de Castro", departmentName: "Digital Marketing", description: "Passionate and seasoned in digital marketing.  I am a methodical and analytic business guy who always find the time for the family and to enjoy a good Ribera del Duero red wine. Happy dad, eco tourism lover and researcher.", photo: "HectorDeCastro.jpg" },
    { firstName: "Pablo", surname: "de Csanady", departmentName: "Digital Marketing", description: "Yup, I’m just another Digital Marketing Specialist, Energized guy based in Spain world traveller ready for challenges. Constantly levelling up. I believe in making the impossible possible because there’s no fun in giving up =).", photo: "PablodeCsanady.jpg" },
    { firstName: "Camélia", surname: "Lemseffer", departmentName: "Digital Marketing", description: "Passionate about PPC strategies, Im Inbound Marketing lover and big fan of Google, I feel lucky to have participated and witnessed the evolution of Google Ads from its start. I love working with goals. Learning more everyday. I love horses and new cultures.", photo: "CameliaLemseffer.jpg" },
    { firstName: "Iago", surname: "Alonso", departmentName: "IT", description: "Snake admirer, Crab junkie, Open Source devotee and Linux enthusiast. Computer nerd turned developer, finally dropping the anchor as a SysAdmin. The living proof that you can turn your passion into your job.", photo: "IagoAlonso.jpg" },
    { firstName: "Jose", surname: "Ruiz", departmentName: "IT", description: "The grumpy guy that keeps everything working. The “strange question” wrangler, trying to bring order and logic to your chaos. A sysadmin, because even developers need action heroes.s", photo: "JoseRuiz.jpg" },
];

export async function getAllEmployees() {
    return allEmployees
}

export const allHeaderSections = [
    { sectionName: "Your benefits" },
    { sectionName: "The offices" },
    { sectionName: "The team" },
    { sectionName: "Our values" },
    { sectionName: "The jobs" }
]

export async function getAllHeaderSections() {
    return allHeaderSections
}