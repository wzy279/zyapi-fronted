// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addInterfaceInfo POST /api/user_interface_info/add */
export async function addInterfaceInfoUsingPOST1(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseVoid_>('/api/user_interface_info/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** allowCall GET /api/user_interface_info/allowCall */
export async function allowCallUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.allowCallUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_interface_info/allowCall', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** banCall GET /api/user_interface_info/banCall */
export async function banCallUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.banCallUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_interface_info/banCall', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteInterface POST /api/user_interface_info/delete */
export async function deleteInterfaceUsingPOST1(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_interface_info/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getById GET /api/user_interface_info/getById */
export async function getByIdUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserInterfaceInfo_>('/api/user_interface_info/getById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getInterfacelist POST /api/user_interface_info/getlist */
export async function getInterfacelistUsingPOST1(
  body: API.UserInterfaceInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserInterfaceInfoVo_>('/api/user_interface_info/getlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateInterface POST /api/user_interface_info/update */
export async function updateInterfaceUsingPOST1(
  body: API.UserInterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_interface_info/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
