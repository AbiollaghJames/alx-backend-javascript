namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class JavaClass extends Subject {
    getRequirements = () =>
      'Here is the list of requirements for Java';

    getAvailableTeacher = () => {
      if (!this.teacher?.experienceTeachingJava)
        return 'No available teacher';
  
      return `Available Teacher: ${this.teacher}`;
    }
  }
}
