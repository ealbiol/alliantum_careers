import * as React from "react"

//-----------------------------------------------------//

export const allEmployees = [
    { firstName: "Stephan", surname: "Diehl", departmentName: "Management", description: "The challenge of the future will be to attract, engage and develop talents. Let’s build the best possible environment for that all together.", photo: "StephanDiehl.jpg" },
    { firstName: "Carlos", surname: "Mayo", departmentName: "Management", description: "Life is too short to live it too little, so I like to do my best in all aspects. I like order and organisation. And...sharing a good meal and a good bottle of wine.", photo: "CarlosMayo.jpg" },
    { firstName: "Pilar", surname: "Dominguez", departmentName: "HR", description: "Travel lover, my philosophy is to travel and see the world, getting to know myself. If it is accompanied by a cup of green tea I am more than happy. Life begins where your comfort zone ends.", photo: "PilarDominguez.jpg" },
    { firstName: "Sandra", surname: "Alonso", departmentName: "HR", description: "Enjoying with everything that the life come up with. Looking for new experiences to keep developing myself, travel and good people is always a good option for that. If you are coming to see me, please bring chocolate and a smile.", photo: "SandraAlonso.jpg" },
    // { firstName: "Juan", surname: "Bravo", departmentName: "Business Systems", description: "Enjoying with everything that the life come up with. Looking for new experiences to keep developing myself, travel and good people is always a good option for that. If you are coming to see me, please bring chocolate and a smile.", photo: "JuanBravo.jpg" },
    { firstName: "David", surname: "Moreno", departmentName: "Business Systems", description: "Adopted by the Python crew, and armed with the Odoo strengths. It's never a bad moment to write a beautiful code verse. I love building things, to shape them and see how they work and may help others.", photo: "DavidMoreno.jpg" },
    { firstName: "Jose", surname: "Robles", departmentName: "Business Systems", description: "With a kernel of maker_4.0, I am always trying to be at the edge of the brand new technologies like blockchain, IA, genetic engineering, etc… and of course in love with ERP systems like Odoo! ", photo: "JoseRobles.jpg" },
    { firstName: "Aitor", surname: "Rosell", departmentName: "Business Systems", description: "You can call me Code Wizard, Pythonic Sorcerer, Bug Summoner, JavaScript Ninja or more accurately “that guy that keeps writing code so that things work”, either way still a wizard and a problem solving junkie.", photo: "AitorRosell.jpg" },
    { firstName: "Antonio", surname: "Garcia", departmentName: "Business Systems", description: "Lorem Ipsum", photo: "AntonioGarcia.jpg" },
    { firstName: "Juan Pablo", surname: "Vienés", departmentName: "Business Systems", description: "Lorem Ipsum", photo: "JuanPabloVienes.jpg" },
    { firstName: "Almudena", surname: "Martínez", departmentName: "Digital Marketing", description: "Lorem Ipsum", photo: "AlmudenaMartinez.jpg" },
    { firstName: "Mariela", surname: "Gadea", departmentName: "Digital Marketing", description: "E-commerce lover and brand developer. Trying to stick to the Gantt but sometimes secondary roads take you to better places. Also, the official birthday cards designer and the one who always says yes to an after office.", photo: "MarielaGadeta.jpg" },
    { firstName: "Eder", surname: "Iraizoz", departmentName: "Digital Marketing", description: "Always trying to learn and get to the best version of myself. I love solving problems, impossible missions, mountain hiking and climbing. Understanding people is my passion and I'm happily able to do it through my job: to make complex systems easy for humans.", photo: "EderIraizoz.jpg" },
    { firstName: "Rafa", surname: "Camón", departmentName: "Digital Marketing", description: "All terrain developer, now focused on backend side. Coding is my business. Love it since I was a child, and helping people to understand what's behind the magic. A young mind in a mature body.", photo: "RafaelCamon.jpg" },
    { firstName: "Eduard", surname: "Romero", departmentName: "Digital Marketing", description: "Developing is an endless open source to creativity an ingenuity. A powerful tool to build whichever structure your mind comes across with. My motto is: “Build it smarter, stronger, safer, cleaner and prettier”", photo: "EduardAlbiol.jpg" },
    { firstName: "Noelia", surname: "Fernández", departmentName: "Digital Marketing", description: "Like the cookie monster, cookies are my thing. Eating the real ones is my hobby. Tracking the virtual, my business. Whenever you go, whatever you do, you can be sure I’ll be there, too.", photo: "NoeliaFdez.jpg" },
    { firstName: "Chiara", surname: "Ranco", departmentName: "Digital Marketing", description: "Marketing and Communications lover; it's never one without the other. I like everything challenging, creative and aesthetic. Also known as the official paparazzi at the office, so watch out for me... ", photo: "ChiaraRanco.jpg" },
    { firstName: "Pablo", surname: "de Csanady", departmentName: "Digital Marketing", description: "Yup, I’m just another Digital Marketing Specialist, Energized guy based in Spain world traveller ready for challenges. Constantly levelling up. I believe in making the impossible possible because there’s no fun in giving up =).", photo: "PablodeCsanady.jpg" },
    // { firstName: "Camélia", surname: "Lemseffer", departmentName: "Digital Marketing", description: "Passionate about PPC strategies, Im Inbound Marketing lover and big fan of Google, I feel lucky to have participated and witnessed the evolution of Google Ads from its start. I love working with goals. Learning more everyday. I love horses and new cultures.", photo: "CameliaLemseffer.jpg" },
    { firstName: "Iago", surname: "Alonso", departmentName: "IT", description: "Snake admirer, Crab junkie, Open Source devotee and Linux enthusiast. Computer nerd turned developer, finally dropping the anchor as a SysAdmin. The living proof that you can turn your passion into your job.", photo: "IagoAlonso.jpg" },
    { firstName: "Jose", surname: "Ruiz", departmentName: "IT", description: "The grumpy guy that keeps everything working. The “strange question” wrangler, trying to bring order and logic to your chaos. A sysadmin, because even developers need action heroes.s", photo: "JoseRuiz.jpg" },

];

export async function getAllEmployees() {
    return allEmployees
}


//-----------------------------------------------------//

export const allHeaderAndFooterSections = [
    { sectionName: "The jobs", anchor: "/#jobs-table" },
    { sectionName: "Your benefits", anchor: "/#your-benefits" },
    { sectionName: "The offices", anchor: "/#the-offices" },
    //{ sectionName: "The team", anchor: "/#the-team" },
    { sectionName: "Our values", anchor: "/#our-values" },
]

export async function getAllHeaderAndFooterSections() {
    return allHeaderAndFooterSections
}


//-----------------------------------------------------//

export const allApplyFormFields = [
    { type: "text", name: "name", placeholder: "Your name" },
    { type: "text", name: "last name", placeholder: "Your last name" },
    { type: "text", name: "talents", placeholder: "Tell us about your talents" },
    { type: "email", name: "email", placeholder: "Your email" },
    { type: "file", name: "cv", placeholder: "Your CV" },

]

export async function getAllApplyFormFields() {
    return allApplyFormFields
}


//-----------------------------------------------------//

export function GetAllDepartments() {

    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        getAllEmployees().then((result) => {
            setEmployees(result)

        })
    }, [])


    const departmentsPerEmployee = employees.map(employee => employee.departmentName)

    const departmentsUnique = new Set(departmentsPerEmployee);

    const departmentsUniqueArray = Array.from(departmentsUnique);


    return departmentsUniqueArray

}

//-----------------------------------------------------//

export const allBenefits = [
    { id: 1, title: "Flexible Hours", content: "Flexible entry and exit times. There is life beyond work, and we know it" },
    { id: 2, title: "Training Fridays", content: "Fridays dedicated to training in subjects of interest to our work place" },
    { id: 3, title: "Team Activities", content: "We organise team activities and it is easy to see us many days eating hamburgers somewhere near the office" },
    { id: 4, title: "Work-Life Balance", content: "Enjoy your life, your time, your family... You only live once! We need you to be happy" },
    { id: 5, title: "Great Location", content: "Our office is located in the centre of Malaga, close to the shopping and entertainment area" },
    { id: 6, title: "Coffee, Tea and Fruits", content: "Coffee, Tea and Fruits for everyone. Staying healthy boosts productivity and happiness" },
]

export async function getAllBenefits() {
    return allBenefits
}

//-----------------------------------------------------//

export const allBenefitsWhite = [
    {
        id: 7, title: "Flexible Hours", content: "Flexible entry and exit times. There is life beyond work, and we know it",
        blur1: "40", color1: "#F9B457", top1: "50%", left1: "8%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#8EE8F9", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#8838F8", top3: "32%", left3: "30%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 8, title: "Training Fridays", content: "Fridays dedicated to training in subjects of interest to our work place",
        blur1: "40", color1: "#D76166", top1: "28%", left1: "0%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#68B583", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#529DFC", top3: "48%", left3: "18%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 9, title: "Team Activities", content: "We organise team activities and it is easy to see us many days eating hamburgers somewhere near the office",
        blur1: "40", color1: "#529DFC", top1: "32%", left1: "36%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        90%   {  transform: scale(0.77) }
        20%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#966CE0", top2: "30%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#F9B457", top3: "0%", left3: "25%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 10, title: "Work-Life Balance", content: "Enjoy your life, your time, your family... You only live once! We need you to be happy",
        blur1: "40", color1: "#91E7C8", top1: "30%", left1: "0%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#E568B2", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#529DFC", top3: "40%", left3: "20%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 11, title: "Great Location", content: "Our office is located in the centre of Malaga, close to the shopping and entertainment area",
        blur1: "40", color1: "#8EE8F9", top1: "20%", left1: "8%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#91E7C8", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#FCE569", top3: "32%", left3: "30%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 12, title: "Coffee, Tea and Fruits", content: "Coffee, Tea and Fruits for everyone. Staying healthy boosts productivity and happiness",
        blur1: "40", color1: "#D76166", top1: "20%", left1: "8%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#529DFC", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#68B583", top3: "32%", left3: "30%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
]

export async function getAllBenefitsWhite() {
    return allBenefitsWhite
}

//-----------------------------------------------------//

export const allBenefitsBlack = [
    {
        id: 13, title: "Flexible Hours", content: "Flexible entry and exit times. There is life beyond work, and we know it",
        blur1: "40", color1: "#F9B457", top1: "50%", left1: "8%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#8EE8F9", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#8838F8", top3: "32%", left3: "30%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 14, title: "Training Fridays", content: "Fridays dedicated to training in subjects of interest to our work place",
        blur1: "40", color1: "#D76166", top1: "28%", left1: "0%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#68B583", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#529DFC", top3: "48%", left3: "18%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 15, title: "Team Activities", content: "We organise team activities and it is easy to see us many days eating hamburgers somewhere near the office",
        blur1: "40", color1: "#529DFC", top1: "32%", left1: "36%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        90%   {  transform: scale(0.77) }
        20%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#966CE0", top2: "30%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#F9B457", top3: "0%", left3: "25%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 16, title: "Work-Life Balance", content: "Enjoy your life, your time, your family... You only live once! We need you to be happy",
        blur1: "40", color1: "#91E7C8", top1: "30%", left1: "0%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#E568B2", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#529DFC", top3: "40%", left3: "20%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 17, title: "Great Location", content: "Our office is located in the centre of Malaga, close to the shopping and entertainment area",
        blur1: "40", color1: "#8EE8F9", top1: "20%", left1: "8%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#91E7C8", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#FCE569", top3: "32%", left3: "30%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
    {
        id: 18, title: "Coffee, Tea and Fruits", content: "Coffee, Tea and Fruits for everyone. Staying healthy boosts productivity and happiness",
        blur1: "40", color1: "#D76166", top1: "20%", left1: "8%", size1: "70",
        keyFrame1:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur2: "40", color2: "#529DFC", top2: "8%", left2: "16%", size2: "70",
        keyFrame2:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `,

        blur3: "40", color3: "#68B583", top3: "32%", left3: "30%", size3: "70",
        keyFrame3:
            `    
        0%    {  transform: translate(0, 0) }
        33%   {  transform: scale(0.77) }
        66%   {  transform: translate(0px, 30px) }
        100%  {  transform: translate(26px, 40px) }
        `
    },
]

export async function getAllBenefitsBlack() {
    return allBenefitsBlack
}

//-----------------------------------------------------//

export const allAddresses = [
    { city: "Málaga", country: "Spain", address: "C. Ordóñez, 2, 2º, 29005 Málaga", lat: 36.71782288308034, lng: -4.424975802343778, phone: "+34 952 185 598" },
    { city: "Oststeinbek", country: "Germany", address: "Im Hegen 13 22113 Oststeinbek", lat: 53.55106201339093, lng: 10.155707354649618 }
]

export async function getAllAdresses() {
    return allAddresses
}

//-------------------------------------------------------//

export const allOfficePhotos = [
    { photo: "photo1.jpg" },
    { photo: "photo2.jpg" },
    { photo: "photo3.jpg" },
    { photo: "photo4.jpg" },
    { photo: "photo5.jpg" },
    { photo: "photo6.jpg" },
    { photo: "photo7.jpg" },
    { photo: "photo8.jpg" },
    { photo: "photo9.jpg" },
    { photo: "photo10.jpg" },

]
export async function getAllOfficePhotos() {
    return allOfficePhotos
}

//-------------------------------------------------------//

export const allAstronautPhotos = [
    { photo: "astronaut.png" },
    { photo: "planet.png" },
]
export async function getAllAstronautPhotos() {
    return allAstronautPhotos
}

//-------------------------------------------------------//

export const allOurValues = [
    { id: 1, title: "Pioneering Spirit", photo: "pioneering.jpg", content: "We are technological and therefore like to be at the cutting edge. We have an entrepreneurial spirit that drives us to develop innovative solutions and products that make it easier for our customers to differentiate themselves. Always from the perspective of profitability and growth. This principle is closely linked to learning and, more specifically, to the concept of lifelong learning. Inexhaustible capacity for learning." },
    { id: 2, title: "Decisive", photo: "decisive.jpg", content: "We are resolute and strive to develop our projects on time. We like to provide solutions that add value and are tailored to the real needs of our customers and our company." },
    { id: 3, title: "Truly International", photo: "international.jpg", content: "We are an international company. Our German origin and our Spanish headquarters mean that our frontier is the world. We like international projects, and we do not limit ourselves to any geographical area." },
    { id: 4, title: "Fairness", photo: "fairness.jpg", content: "All decisions must be reasoned and seek the common good and be fair to the rest of the team. We also promote open speech as the possibility of being able to express an opinion or propose a particular action without fear of being reprimanded for it." },
    { id: 5, title: "Flexible", photo: "flexible.jpg", content: "We know how to adapt to situations and the different needs of the moment. We promote flexible environments for work, learning, and growth." },
    { id: 6, title: "Close Partner", photo: "close-partner.jpg", content: "We grow if we help our customers to grow, and for this reason, their success, results, commercial presence, and satisfaction are our objectives. We like to have a direct and close relationship with our partners, favoring fluid and direct communication that allows us to work perfectly." },
    { id: 7, title: "Team Spirit", photo: "teamspirit.jpg", content: "Our team, together with our customers, is the most important thing to us. We like to have a fun and open working space. We share moments outside the office, and there is always some recreational activity planned where we can showcase each other's skills." },


]

export async function getAllOurValues() {
    return allOurValues
}

//-----------------------------------------------------//

export const allPositionsReactSelect = [
    { id: 10, value: "All Positions", label: "All Positions" },
    { id: 11, value: "Brand Development", label: "Brand Development" },
    { id: 7, value: "Digital Marketing", label: "Digital Marketing" },
    { id: 13, value: "HR", label: "HR" },
    { id: 14, value: "Odoo Consultant", label: "Odoo Consultant" },
    { id: 15, value: "Odoo Developer", label: "Odoo Developer" },
    { id: 16, value: "Project Manager Odoo", label: "Project Manager Odoo" },
    { id: 17, value: "Sys Admin", label: "Sys Admin" },
    { id: 18, value: "UX/UI Designer", label: "UX/UI Designer" },
    { id: 19, value: "Web Developer", label: "Web Developer" },
]

export async function getAllPositionsReactSelect() {
    return allPositionsReactSelect
}

//-----------------------------------------------------//
