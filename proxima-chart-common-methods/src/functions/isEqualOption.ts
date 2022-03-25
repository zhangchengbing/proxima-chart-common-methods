import { isEqual } from "lodash";
import { OptionValue } from "../types";

/**
 * 此处需要根据selectors进行判断
 * 点击图表后，即使oldOption没有selectors，FilterPanel也会设置selectors，option内多了selectors属性
 * 从而导致isEqual(oldOption, option)恒为false，此处单独比较option中的各属性
 */
 export const isEqualOption = (oldOption: OptionValue, option: OptionValue): boolean => {
  const { selectors, queryType, ...otherOption } = option;
  const { selectors: oldSelectors, queryType: oldQueryType, ...otherOleOption } = oldOption;
  const isEqualSelectors = !selectors?.length && !oldSelectors?.length ? true : isEqual(selectors, oldSelectors);
  const isEqualQueryType = queryType === oldQueryType;
  const isEqualOtherOption = isEqual(otherOption, otherOleOption);
  return isEqualSelectors && isEqualQueryType && isEqualOtherOption;
};