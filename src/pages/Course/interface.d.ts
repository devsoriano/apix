export interface IList {
  listDetailCourses?: IListDetailCourse[];
}

export interface IListDetailCourse {
  id: number;
  detail: {
    coach: {
      coach: string;
      profil: string;
      workplace: string;
      workposition: string;
      photo: string;
      description: string;
    };
    course: {
      nameCourse: string;
      startDate: string;
      endDate: string;
      weekday: string;
      hoursPerDay: number;
      startTime: string;
      endTime: string;
      totalHours: number;
      litleDescription: string;
      imgDescription: string;
      description: string;
      practices: number;
      projects: number;
      youllLearn: string;
      requirements: string;
      requirementsComputer: string;
      price: string;
      temary: string;
    };
  };
}
