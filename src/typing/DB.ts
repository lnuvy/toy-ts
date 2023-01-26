export interface ProjectType {
  projectId: number;
  projectName: string;
  projectDetail: string;
  projectLeader: number;
  memberList: any[];
}

export interface SprintType {
  sprintId: number;
  sprintName: string;
  sprintDetail: string;
  localDateTime: string; // TODOS: type 다를 수 있음, response 모양 보고 변경하기
  type: number;
}

export interface MemberType {
  email: string;
  name: string;
  userId: number;
}

export interface JobListType {
  jobId: number;
  toDo: string;
  detail: string;
  start: string;
  end: string;
  jobWorkers: any;
}

export interface JobWorkers {
  userId: string;
  name: string;
  email: string;
}
