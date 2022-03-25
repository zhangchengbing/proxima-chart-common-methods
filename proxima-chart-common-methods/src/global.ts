export const BASIC_PIE_CHART = 'basic-pie-chart';
export const BASIC_BAR_CHART = 'basic-bar-chart';
export const BASIC_LINE_CHART = 'basic-line-chart';
export const BASIC_TABLE_CHART = 'basic-table-chart';
export const BASIC_COUNT_CHART = 'basic-count-chart';
export const BASIC_ITEM_LIST_CHART = 'basic-item-list-chart';
export const BASIC_ITEM_STATISTICS_CHART = 'basic-item-statistics-chart';
export const BASIC_ITEM_COUNT_CHART = 'basic-item-count-chart';
export const BASIC_DEMAND_SPEED_CHART = 'basic-demand-speed-chart';
export const HS_HEAP_BAR_CHART = 'hs-heap-bar-chart';
export const BASIC_WORKLOAD_INPUT = 'basic-workload-input';

export const IQL_CONDITION = {
  NOT_EQUAL: '!=',
  EQUAL: '=',
  GREATER_THAN: '>',
  LESS_THAN: '<',
  GREATER_THAN_EQUAL: '>=',
  LESS_THAN_EQUAL: '<=',
  NOT_CONTAIN: 'not in',
  CONTAIN: 'in',
  TEXT_CONTAIN: '~',
  TEXT_NOT_CONTAIN: '!~',
  ORDER_BY: 'order by',
  // is后面只能跟null或者empty
  IS: 'is',
  IS_NOT: 'is not',
  DESC: 'desc',
  ASC: 'asc',
  AND: 'and',
  _AND_: ' and ',
};

export const DATE_FORMAT = {
  DATETIME: 'YYYY-MM-DD HH:mm:ss',
  DATE: 'YYYY-MM-DD',
  WEEK: 'YYYY 第W周',
  MONTH: 'YYYY-MM',
  YEAR: 'YYYY',
};