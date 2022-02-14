// import utils from "./utils";
import {getEvents} from '../obComponents/obGetEvents';
import {obHideEvent} from '../obComponents/obHideEvent';

// type ResponseType<T = unknown> = {
//   succeed: boolean;
//   message: string;
//   data: T;
// };

// type RequestConfig = {
//   method: string;
//   url: string;
//   data?: any;
//   dataType?: "json" | "file";
// };

// async function request<T>(config: RequestConfig): Promise<ResponseType<T>> {
//   const { method, url, data, dataType } = config;
//   const requestConfig: RequestInit = {
//     method,
//   };

//   if (data !== undefined) {
//     if (dataType === "file") {
//       requestConfig.body = data;
//     } else {
//       requestConfig.headers = {
//         "Content-Type": "application/json",
//       };
//       requestConfig.body = JSON.stringify(data);
//     }
//   }

//   const response = await fetch(url, requestConfig);
//   const responseData = (await response.json()) as ResponseType<T>;

//   if (!responseData.succeed) {
//     throw responseData;
//   }

//   return responseData;
// }

namespace api {
  export function getUserInfo() {
    // return request<Model.User>({
    //   method: "GET",
    //   url: "/api/user/me",
    // });
  }

  // export function signin(username: string, password: string) {
  //   return request({
  //     method: "POST",
  //     url: "/api/auth/signin",
  //     data: { username, password },
  //   });
  // }

  // export function signup(username: string, password: string) {
  //   return request({
  //     method: "POST",
  //     url: "/api/auth/signup",
  //     data: { username, password },
  //   });
  // }

  // export function signout() {
  //   return request({
  //     method: "POST",
  //     url: "/api/auth/signout",
  //   });
  // }

  //eslint-disable-next-line
  export function checkUsernameUsable(username: string) {
    // return request<boolean>({
    //   method: "POST",
    //   url: "/api/user/checkusername",
    //   data: { username },
    // });
  }

  //eslint-disable-next-line
  export function checkPasswordValid(password: string) {
    // return request<boolean>({
    //   method: "POST",
    //   url: "/api/user/validpassword",
    //   data: { password },
    // });
  }

  //eslint-disable-next-line
  export function updateUserinfo(userinfo: Partial<{username: string; password: string; githubName: string}>) {
    // return request({
    //   method: "PATCH",
    //   url: "/api/user/me",
    //   data: userinfo,
    // });
  }

  export async function getMyEvents() {
    return await getEvents();

    // return request<Model.Event[]>({
    //   method: "GET",
    //   url: "/api/event/all",
    // });
  }

//   export function getMyDeletedEvents() {
//     return getDeletedEvents();
//     // return request<Model.Event[]>({
//     //   method: "GET",
//     //   url: "/api/event/all?deleted=true",
//     // });
//   }

  // export function createEvent(content: string) {
  //   return createEvents(content);
  //   // return request<Model.Event>({
  //   //   method: "PUT",
  //   //   url: "/api/event/",
  //   //   data: { content },
  //   // });
  // }

  //eslint-disable-next-line
  // export function updateEvent(eventId: string, content: string) {
  //   // return request<Model.Event>({
  //   //   method: "PATCH",
  //   //   url: `/api/event/${eventId}`,
  //   //   data: { content },
  //   // });
  // }

  //eslint-disable-next-line
  export function hideEvent(eventId: string) {
    return obHideEvent(eventId);
    // return request({
    //   method: "PATCH",
    //   url: `/api/event/${eventId}`,
    //   data: {
    //     deletedAt: utils.getDateTimeString(Date.now()),
    //   },
    // });
  }

  //eslint-disable-next-line
//   export function restoreEvent(eventId: string) {
//     return restoreDeletedEvent(eventId);
//     // return request({
//     //   method: "PATCH",
//     //   url: `/api/event/${eventId}`,
//     //   data: {
//     //     deletedAt: "",
//     //   },
//     // });
//   }

//   eslint-disable-next-line
//   export function deleteEvent(eventId: string) {
//     return deleteForever(eventId);
//     return request({
//       method: "DELETE",
//       url: `/api/event/${eventId}`,
//     });
//   }

//   export function getMyQueries() {
//     return findQuery();
//     return request<Model.Query[]>({
//       method: "GET",
//       url: "/api/query/all",
//     });
//   }

  //eslint-disable-next-line
//   export function createQuery(title: string, querystring: string) {
//     return createObsidianQuery(title, querystring);
//     return request<Model.Query>({
//       method: "PUT",
//       url: "/api/query/",
//       data: { title, querystring },
//     });
//   }

  //eslint-disable-next-line
//   export function updateQuery(queryId: string, title: string, querystring: string) {
//     return updateObsidianQuery(queryId, title, querystring);
//     return request<Model.Query>({
//       method: "PATCH",
//       url: `/api/query/${queryId}`,
//       data: { title, querystring },
//     });
//   }

  //eslint-disable-next-line
//   export function deleteQueryById(queryId: string) {
//     return deleteQueryForever(queryId);
//     // return request({
//     //   method: "DELETE",
//     //   url: `/api/query/${queryId}`,
//     // });
//   }

  //eslint-disable-next-line
//   export function pinQuery(queryId: string) {
//     return pinQueryInFile(queryId);
//     // return request({
//     //   method: "PATCH",
//     //   url: `/api/query/${queryId}`,
//     //   data: { pinnedAt: utils.getDateTimeString(Date.now()) },
//     // });
//   }

  //eslint-disable-next-line
//   export function unpinQuery(queryId: string) {
//     return unpinQueryInFile(queryId);
//     // return request({
//     //   method: "PATCH",
//     //   url: `/api/query/${queryId}`,
//     //   data: { pinnedAt: "" },
//     // });
//   }

  //eslint-disable-next-line
  // export function uploadFile(formData: FormData) {
  //   // return request<Model.Resource>({
  //   //   method: "PUT",
  //   //   url: "/api/resource/",
  //   //   data: formData,
  //   //   dataType: "file",
  //   // });
  // }
}

export default api;
