export type TargetValue = {
  id?: string;
  iql?: IQL;
  selectors?: Selectors;
  targetName?: string;
  value?: GroupValue[];
};

export type ColumnsValue = {
  cellType?: string;
  data?: any;
  dataIndex?: string;
  key?: string;
  objectId?: string;
  property: any;
  title: string;
  validation: any;
};

export type OrderByProps = {
  key: string;
  type: string;
  children: string;
};

export type GroupValue = {
  key?: string;
  fieldType?: string;
  name?: string;
  compute?: string;
  dates?: string[];
  iql?: string;
  variable?: string;
};

export type IQL = string;

type FieldId = string;

export interface SelectCase {
  component: string;
  expression: string;
  fieldId: FieldId;
  fieldName: string;
  key: string;
  value: string | number | any[];
}

export type Selectors = Record<FieldId, SelectCase>;

export type QueryType = 'expression' | 'selector' | 'search';

export type OptionValue = {
  type: string;
  group: GroupValue[];
  value?: GroupValue[];
  cluster: GroupValue[];
  iql?: IQL;
  w?: number;
  selectors?: Selectors;
  queryType?: QueryType;
  // count使用
  target?: TargetValue[];
  formula?: string;
  unit?: string;
  unitName?: string;
  precision?: number;
  // item-list使用
  dataNumber?: number;
  selectedColumns?: ColumnsValue[];
  pageSize?: number;
  orderBy?: OrderByProps;
};
