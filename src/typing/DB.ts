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
  jobId: string;
  toDo: string;
  detail: string;
  start: Date;
  end: Date;
  jobWorkers: object;
}
