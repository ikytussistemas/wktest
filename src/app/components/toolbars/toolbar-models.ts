import { IkButton } from '../buttons/ButtonIcons';

type listValue = {
  label: string;
  value: any;
}

type SearchFile = {
  id: string;
  filterField: string;
  placeholder: string;
  mask?: string;
  listValues?:listValue[];
}

export class ToolbarOptions {
  count?: number;
  counts?: number[];
  searchFields?: SearchFile[];
  buttons?: IkButton[];
  isStatus?: boolean;
}
