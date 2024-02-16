export interface EmployeeObject {
  [key: string]: string | number;
}

export interface Employee {
  id: string;
  name: string;
  description: string;
  role: string;
  photo: string;
}

export interface EmployeeState {
  employees: Employee[];
}
