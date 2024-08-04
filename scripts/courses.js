//Below is for selecting the menu buttons
// const homeButton = document.querySelector('#home-button');
// const chamberButton = document.querySelector('github-button');
// const githubButton = document.querySelector('linkedin-button');


//Below is for the hamburgerButton
const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
	nav.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
];

function loadCourses() {
    const courseList = document.getElementById('course-list');
    let totalCredits = 0;
    courses.forEach((course) => {
        const courseItem = document.createElement('li');
        courseItem.classList.add('course-card');
        const courseLink = document.createElement('a');
        courseLink.href = '#';
        const courseTitle = document.createElement('strong');
        courseTitle.textContent = `${course.subject} ${course.number}: ${course.title} (${course.credits} credits)`;
        const courseDescription = document.createElement('p');
        courseDescription.textContent = course.description;
        courseLink.appendChild(courseTitle);
        courseLink.appendChild(courseDescription);
        courseItem.appendChild(courseLink);
        courseList.appendChild(courseItem);
        totalCredits += course.credits;
    });
    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

loadCourses();

const courseButtons = document.querySelectorAll('.course-box button');
courseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        filterCourses(event.target.id);
    });
});

function filterCourses(category) {
    const courseElements = document.querySelectorAll('.course-con .course');
    courseElements.forEach(course => {
        if (category === 'all' || course.classList.contains(category)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}