export type useSnackBarType = {
  isSnackBarOpen: boolean;
  valueSnackBar: string;
  colorSnackBar: string;
  OpenSnackBar: (value:string,color:string) => void;
  closeSnackBar: () => void;
};
