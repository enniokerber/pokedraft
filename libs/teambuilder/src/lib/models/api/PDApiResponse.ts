
export interface PDApiResponse<T> {
  success: boolean; // was the request successful?
  status: number; // the http status code of the request (200 if OK)
  message: string; // message of the server
  data?: T; // the fetched data
}
