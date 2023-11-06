// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** createRecord GET /api/xfModel/create */
export async function createRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/xfModel/create', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getlist GET /api/xfModel/list */
export async function getlistUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListBigModelListVO_>('/api/xfModel/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getlocalmessage GET /api/xfModel/localmessage */
export async function getlocalmessageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getlocalmessageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListModelMessageVO_>('/api/xfModel/localmessage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** test GET /api/xfModel/test */
export async function testUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.testUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/xfModel/test', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
