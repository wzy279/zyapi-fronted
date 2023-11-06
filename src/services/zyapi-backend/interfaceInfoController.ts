// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addInterfaceInfo POST /api/interfaceinfo/add */
export async function addInterfaceInfoUsingPOST(
  body: API.InterfaceAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/interfaceinfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteInterface POST /api/interfaceinfo/delete */
export async function deleteInterfaceUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interfaceinfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getById GET /api/interfaceinfo/getById */
export async function getByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseInterfaceInfo_>('/api/interfaceinfo/getById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getInterfacelist POST /api/interfaceinfo/getlist */
export async function getInterfacelistUsingPOST(
  body: API.InterfaceQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageInterfaceInfo_>('/api/interfaceinfo/getlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** invokeInterface POST /api/interfaceinfo/invoke */
export async function invokeInterfaceUsingPOST(
  body: API.InterfaceInvokeRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseObject_>('/api/interfaceinfo/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** offlineInterface POST /api/interfaceinfo/offline */
export async function offlineInterfaceUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interfaceinfo/offline', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** onlineInterface POST /api/interfaceinfo/online */
export async function onlineInterfaceUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interfaceinfo/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateInterface POST /api/interfaceinfo/update */
export async function updateInterfaceUsingPOST(
  body: API.InterfaceUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interfaceinfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
