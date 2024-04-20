document.getElementById('eligibilityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the user input
    const diploma = document.getElementById('diploma').value.toUpperCase(); 
    const experience = parseInt(document.getElementById('experience').value);
    const graduationDate = new Date(document.getElementById('graduationDate').value);
    const importantSkill = document.getElementById('importantSkill').value.toUpperCase(); 

    // Define eligibility criteria
    const requiredDiploma = ['CS', 'CP'];
    const requiredExperience = 3;
    const requiredGraduationDate = new Date('2018-07-07');
    const requiredSkill = ['HTML']; // List of required skills

    // Check if the diploma and skill match the criteria
    const diplomaMatch = requiredDiploma.includes(diploma);
    const experienceMatch = experience >= requiredExperience;
    const graduationDateMatch = graduationDate >= requiredGraduationDate;
    const skillMatch = requiredSkill.includes(importantSkill);

    // Check the eligibility criteria
    if (diplomaMatch && experienceMatch && graduationDateMatch && skillMatch) {
        // Display eligibility result if all criteria are met by the user
        document.getElementById('eligibilityResult').textContent = "Congratulations! You are eligible for the job.";
    } else {
        // Display the eligibility result indicating the user is not eligible 
        document.getElementById('eligibilityResult').textContent = "We are sorry, we moved on with other candidates.";
    }
});
