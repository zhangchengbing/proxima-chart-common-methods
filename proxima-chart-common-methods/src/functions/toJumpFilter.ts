import { inIframe } from "./inIframe";

export const toJumpFilter = (): string => {
  /**
   * 判断是否是iframe，如果是的话链接查找globalThis.env.GITEE_ONE_GATEWAY，获取osc字段
   */
   if(inIframe()) {
    const path = window.location.pathname.split('/')[2];
    // @ts-ignore
    return `${globalThis.env.GITEE_ONE_GATEWAY}/${path}/_proxima/filter?iql=`;
  } else {
    // 不是iframe，链接使用当前地址，获取osc字段
    const path = window.location.pathname.split('/')[1];
    return `/${path}/filters?iql=`;
  }
}
