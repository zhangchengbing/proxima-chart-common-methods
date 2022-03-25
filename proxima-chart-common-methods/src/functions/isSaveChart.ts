
import { message } from 'antd';
import { isEmpty } from 'lodash';
import { BASIC_ITEM_COUNT_CHART, BASIC_ITEM_LIST_CHART, BASIC_COUNT_CHART } from '../global';
import { OptionValue } from '../types';

export const isSaveChart = (
  enableSave: boolean,
  option: OptionValue
): boolean => {
  if (!enableSave) {
    switch (option?.type) {
      case BASIC_ITEM_COUNT_CHART: {
        if (!option?.iql && isEmpty(option?.selectors)) {
          message.error('请添加筛选条件点击查询之后进行保存！');
          return false;
        } else {
          message.error('请查询到数据之后进行保存！');
          return false;
        }
      }
      case BASIC_ITEM_LIST_CHART: {
        return true;
      }
      case BASIC_COUNT_CHART: {
        message.error('请配置正确的指标及四则运算公式！');
        return false;
      }
      default: {
        message.error('未查询到数据，请修改图表配置后进行保存！');
        return false;
      }
    }
  } else {
    return true;
  }
};
