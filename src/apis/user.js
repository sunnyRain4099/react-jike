import { request } from "@/utils/request";
export function loginApi(formData) {
  return request({
    url: "/authorizations",
    method: "POST",
    data: formData,
  });
}

export function getUserInfoApi() {
  return request({
    url: "/user/profile",
    method: "GET",
  });
}
