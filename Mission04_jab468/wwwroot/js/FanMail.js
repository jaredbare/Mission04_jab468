$("#submit").click(function () {
/*    Declare variables*/
    let assignments = $('[name="assignments"]').val();
    let groupProject = $('[name="groupProject"]').val();
    let quizzes = $('[name="quizzes"]').val();
    let midtermExam = $('[name="midtermExam"]').val();
    let finalExam = $('[name="finalExam"]').val();
    let intex = $('[name="intex"]').val();
/*    Calculate Grade*/
    let grade = (assignments * 0.5) + (groupProject * 0.1) + (quizzes * 0.1) + (midtermExam * 0.1) + (finalExam * 0.1) + (intex * 0.1);
    let round = grade.toFixed(2);
/*    Convert to letter*/
    let letterGrade = ''
    if (grade >= 90) {
        letterGrade = 'A';
    } else if (grade >= 80) {
        letterGrade = 'B';
    } else if (grade >= 70) {
        letterGrade = 'C';
    } else if (grade >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
/*    Print it out*/
    $('#grade').html(`Your final grade is: ${letterGrade} (${round}%)`);
})