export interface IList {
  listCourses?: IListCourses[];
}

export interface IListCourses {
  id: number;
  title: string;
  description: string;
  miniLogo: string;
}
