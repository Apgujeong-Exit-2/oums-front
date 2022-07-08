// 카카오톡 auth 토큰 성공 DTO
export interface kakaoSuccessDto {
  token_type: string;
  access_token: string;
  id_token: number;
  expires_in: string;
  refresh_token: string;
  refresh_token_expires_in: number;
}
