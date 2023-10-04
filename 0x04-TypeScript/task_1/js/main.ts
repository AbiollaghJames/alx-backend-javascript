class Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private readonly location: string;
  [ key: string ]: any;

  constructor (
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.yearsOfExperience = yearsOfExperience;
      this.location = location;
    }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const first = firstName.charAt(0);
  return `${first}. ${lastName}`;
};

class StudentClass {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework = () : string => 'Currently working';

  displayName = () : string => this.firstName;

  interface StudentConstructor {
    (firstName: string, lastName: string): classInterface;
  }
}



