/* ott 리스트 response */
export interface IOttResponse {
  id: number; // key
  title: string; // ott 이름
  imageUrl: string; // 이미지 경로
  originPrice: number; // 실제가
  salePrice: number; // 할인가
  partyHallFee: number; // 파티장 수수료
  partyMemberFee: number; // 파티원 수수료
}
