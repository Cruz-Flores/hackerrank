const grades: number[] = [73, 67, 38, 33];

function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade + 1 >= 40 || grade + 2 >= 40) {
      if ((grade + 1) % 5 === 0) {
        return grade + 1;
      } else if ((grade + 2) % 5 === 0) {
        return grade + 2;
      } else {
        return grade;
      }
    }
    return grade;
  });
}

console.log(gradingStudents(grades));

export {};
