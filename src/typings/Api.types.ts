type UUID = string;

export type Address = {
  id: UUID;
  personalInfoId: UUID;
  address1: string;
  address2?: string | null;
  address3?: string | null;
  city: string;
  country: string;
  postalCode: string;
  state: string;
};

export type Credential = {
  id: UUID;
  userId: UUID;
  login: string;
  role: string;
};

export type PersonalInfo = {
  id: UUID;
  userId: UUID;
  dateOfBirth: string;
  email: string;
  firstname: string;
  lastname: string;
  middlename?: string | null;
  address: Address[];
};

export type Attendance = {
  id: UUID;
  date: string;
  type: string;
  studentId: UUID;
  teacherId: UUID;
  hourId: UUID;
};

export type Lesson = {
  id: UUID;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  hourId: UUID;
  roomId: UUID;
  teacherId: UUID;
  scheduleId: UUID;
};

export type Schedule = {
  id: string;
  groupId: UUID;
  lesson: Lesson[];
};

export type Student = {
  id: UUID;
  userId: UUID;
  group?: Group[];
  homework?: Homework[];
  mark?: Mark[];
  attendance?: Attendance[];
};

export type Teacher = {
  id: UUID;
  userId: UUID;
  homework?: Homework[];
  mark?: Mark[];
  attendance?: Attendance[];
  lesson?: Lesson[];
};

export type User = {
  id: UUID;
  credential: Credential;
  personalInfo: PersonalInfo;
  teacher?: Teacher;
  student?: Student;
};

export type Group = {
  id: UUID;
  symbol: string;

  student?: Student[];
  schedule?: Schedule[];
};

export type Subject = {
  id: UUID;
  name: string;
};

export type Mark = {
  id: UUID;
  createdAt: string;
  description: string;
  mark: string;
  weight: number;
  studentId: UUID;
  teacherId: UUID;
  subjectId: UUID;
};

export type Homework = {
  id: UUID;
  createdAt: string;
  description: string;
  deadline: string;
  teacherId: UUID;
  studentId: UUID;
};

export type Room = {
  id: UUID;
  number: string;
  type: string;
};

export type Hour = {
  id: UUID;
  from: string;
  to: string;
  no: number;
};
