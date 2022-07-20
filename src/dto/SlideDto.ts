/* 파티장, 파티원 */
export enum ERole {
  master,
  member,
}

/* 파티 만들기 부분 Slide 리스트 Response */
export interface ISlideResponse {
  id: number;
  imgUrl: string;
  detailText: string;
  roleType: ERole;
}
