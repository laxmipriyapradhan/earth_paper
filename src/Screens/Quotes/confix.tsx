export type DateRangeProps = {
    value: string;
    label: string;
    isDateVisible: boolean;
    datePickFun: (e: boolean) => void;
    selectedDateFun: (e: string) => void;
  };
  