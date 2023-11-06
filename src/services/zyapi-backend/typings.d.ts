declare namespace API {
  type allowCallUsingGETParams = {
    /** id */
    id?: number;
  };

  type banCallUsingGETParams = {
    /** id */
    id?: number;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInterfaceInfo_ = {
    code?: number;
    data?: InterfaceInfo;
    message?: string;
  };

  type BaseResponseListBigModelListVO_ = {
    code?: number;
    data?: BigModelListVO[];
    message?: string;
  };

  type BaseResponseListModelMessageVO_ = {
    code?: number;
    data?: ModelMessageVO[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo_ = {
    code?: number;
    data?: PageInterfaceInfo_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserInterfaceInfoVo_ = {
    code?: number;
    data?: PageUserInterfaceInfoVo_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserInterfaceInfo_ = {
    code?: number;
    data?: UserInterfaceInfo;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BaseResponseVoid_ = {
    code?: number;
    message?: string;
  };

  type BigModelListVO = {
    id: number;
    name: string;
  };

  type createRecordUsingGETParams = {
    /** name */
    name?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getByIdUsingGET1Params = {
    /** id */
    id?: number;
  };

  type getByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getlocalmessageUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InterfaceAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    requestBody?: string;
    requestHeader?: string;
    responseBody?: string;
    responseHeader?: string;
    status?: number;
    url?: string;
  };

  type InterfaceInfo = {
    /** 创建人 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 描述 */
    description?: string;
    /** 主键 */
    id?: number;
    /** 是否删除(0-未删, 1-已删) */
    isDelete?: string;
    /** 请求类型 */
    method?: string;
    /** 名称 */
    name?: string;
    /** 请求参数 */
    requestBody?: string;
    /** 请求头 */
    requestHeader?: string;
    /** 请求参数 */
    responseBody?: string;
    /** 响应头 */
    responseHeader?: string;
    /** 接口状态（0-关闭，1-开启） */
    status?: number;
    /** 更新人 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 接口地址 */
    url?: string;
  };

  type InterfaceInvokeRequest = {
    id?: number;
    requestBody?: string;
  };

  type InterfaceQueryRequest = {
    createBy?: number;
    createTime?: string;
    current?: number;
    description?: string;
    method?: string;
    name?: string;
    pageSize?: number;
    requestHeader?: string;
    responseHeader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
  };

  type InterfaceUpdateRequest = {
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestBody?: string;
    requestHeader?: string;
    responseBody?: string;
    responseHeader?: string;
    status?: number;
    url?: string;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type ModelMessageVO = {
    content?: string;
    role?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageInterfaceInfo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: InterfaceInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserInterfaceInfoVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserInterfaceInfoVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type testUsingGETParams = {
    /** id */
    id?: number;
    /** text */
    text?: string;
  };

  type User = {
    accesskey?: string;
    /** 创建时间 */
    createTime?: string;
    /** id */
    id?: number;
    /** 是否删除 */
    isDelete?: number;
    /** 公众号openId */
    mpOpenid?: string;
    secretkey?: string;
    /** 微信开放平台id */
    unionId?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 账号 */
    userAccount?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户昵称 */
    userName?: string;
    /** 密码 */
    userPassword?: string;
    /** 用户简介 */
    userProfile?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserInterfaceInfo = {
    /** 创建时间 */
    createTime?: string;
    /** 主键 */
    id?: number;
    /** 接口 id */
    interfaceinfoId?: number;
    /** 是否删除(0-未删, 1-已删) */
    isDelete?: string;
    /** 剩余调用次数 */
    leftNum?: number;
    /** 0-正常，1-禁用 */
    status?: number;
    /** 总调用次数 */
    totalNum?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 调用用户 id */
    userId?: number;
  };

  type UserInterfaceInfoQueryRequest = {
    current?: number;
    interfaceinfoId?: number;
    leftNum?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type UserInterfaceInfoUpdateRequest = {
    id?: number;
    interfaceinfoId?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type UserInterfaceInfoVo = {
    id?: number;
    interfaceName?: string;
    interfaceinfoId?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
    url?: string;
    userId?: number;
    userName?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
