import { BASIC_COUNT_CHART, BASIC_ITEM_LIST_CHART, BASIC_ITEM_COUNT_CHART, BASIC_WORKLOAD_INPUT, BASIC_DEMAND_SPEED_CHART } from "../global";
import { OptionValue } from "../types";


export const isEnableToSave = (option: OptionValue): boolean => {
  switch (option?.type) {
    case BASIC_COUNT_CHART:
      return !!option?.target?.length;
    case BASIC_ITEM_LIST_CHART:
      return !!option?.pageSize;
    // 跳转的count
    case BASIC_ITEM_COUNT_CHART:
      return !!option?.iql;
    case BASIC_DEMAND_SPEED_CHART:
      return true;
    case BASIC_WORKLOAD_INPUT:
      return true;
    default:
      return !!(option?.group?.length && option?.value?.length);
  }
};