function Student(name, lastName, yearBirsday) {
    this.name = name;
    this.lastName = lastName;
    this.yearBirsday = yearBirsday;
    this.attendancegrades = [];
    this.attendance = new Array(25).fill(" ");

    this.getYears = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearBirsday;
    };

    this.averageGrades = function() { 
        if (this.attendancegrades.length === 0) return 0;
        const total = this.attendancegrades.reduce((sum, grade) => sum + grade, 0);
        return total / this.attendancegrades.length;
    };

    this.present = () => {
        this.addAttendance(true); 
    }

    this.absent = () => {
        this.addAttendance(false); 
    }

    this.addAttendance = function(status) { 
        const emptyIndex = this.attendance.indexOf(" ");
        if (emptyIndex !== -1) {
            this.attendance[emptyIndex] = status;
        } else return;

    }

    this.summary = () => {
        const resAveraged = this.averageGrades()
        const totalPresent = this.attendance.filter(day => day === true).length;
        const totalAbsent = this.attendance.filter(day => day === false).length;
        const resAttendancegrades = (totalPresent + totalAbsent) / this.attendance.length

        if (resAveraged > 90 && resAttendancegrades > 0.9){
            return "Молодець!";
        } else if (resAveraged > 90 || resAttendancegrades > 0.9){
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}
 
function renderStudent(student) {
    console.log(`
    Ім'я студента: ${student.name};
    Прізвище студента: ${student.lastName};
    Вік студента: ${student.getYears()};
    Середня оцінка: ${student.averageGrades().toFixed(2)};
    Відвідувальність: ${student.attendance.map(day => day === true ? 'Присутній' : day === false ? 'Відсутній' : 'Не відмічено').join(', ')};
    Результат: ${student.summary()};
    `);
}

const student1 = new Student('John', 'Doe', 2000);
student1.attendancegrades.push(99,100,99,98,99,98,99,99,99,89,100,56,67,98,99,45);

student1.present();
student1.present();
student1.absent();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present(); 

renderStudent(student1)

const student2 = new Student('Olga', 'Brinch', 1992); 
student2.attendancegrades.push(99,2,14,66,104,56,8,67,98,99,45); 

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present(); 

renderStudent(student2)

const student3 = new Student('Alica', 'Blanko', 1996);
student3.attendancegrades.push(99,2,14,66,14,56,8,67,18,99,45); 

renderStudent(student3)
 
