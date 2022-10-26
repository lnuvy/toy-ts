export interface ProjectType {
  projectId: number;
  projectName: string;
  projectDetail: string;
  projectLeader: number;
  memberList: string[];
}

export interface SprintType {
  sprintId: number;
  sprintName: string;
  sprintDetail: string;
  localDateTime: Date; // TODOS: type 다를 수 있음, response 모양 보고 변경하기
}
