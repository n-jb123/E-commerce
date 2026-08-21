import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export type profileImagePage = {
  user: any;
  handleOpenDialogImage: () => void;
  handleCloseDialogImage: () => void;
  openDialogImage: boolean;
  handleOnSubmitImage: (
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  image: UseFormReturn<
    {
      image?: string | undefined;
    },
    any,
    {
      image?: string | undefined;
    }
  >;
};
export type ProfileInformationType = {
  userName: UseFormReturn<
    {
      firstName: string;
      lastName: string;
    },
    any,
    {
      firstName: string;
      lastName: string;
    }
  >;
  handleOnSubmitUserName: (
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  openDialogUserName: boolean;
  handleOpenDialogUserName: () => void;
  handleCloseDialogUserName: () => void;
  user: any;
  phoneNumber: UseFormReturn<
    {
      phoneNumber?: string | undefined | null;
    },
    any,
    {
      phoneNumber?: string | undefined | null;
    }
  >;
  handleOnSubmitPhoneNumber: (
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  openDialogPhoneNumber: boolean;
  handleOpenDialogPhoneNumber: () => void;
  handleCloseDialogPhoneNumber: () => void;
  CreateAt: string;
  router: AppRouterInstance;
  logout: () => void;
  isLoading:boolean
  errorMessage:string|undefined
};
export type ProfileUserNamePage = {
  user: any;
  userName: UseFormReturn<
    {
      firstName: string;
      lastName: string;
    },
    any,
    {
      firstName: string;
      lastName: string;
    }
  >;
  handleOnSubmitUserName: (
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  handleOpenDialogUserName: () => void;
  handleCloseDialogUserName: () => void;
  openDialogUserName: boolean;
};
export type UpdatePhoneNumberPage = {
  openDialogPhoneNumber: boolean;
  handleOpenDialogPhoneNumber: () => void;
  handleCloseDialogPhoneNumber: () => void;
  handleOnSubmitPhoneNumber: (
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  phoneNumber: UseFormReturn<
    {
      phoneNumber?: string | undefined | null;
    },
    any,
    {
      phoneNumber?: string | undefined | null;
    }
  >;
};
export type updateImagePage = {
  handleCloseDialogImage: () => void;
  openDialogImage: boolean;
  image: UseFormReturn<
    {
      image?: string | undefined;
    },
    any,
    {
      image?: string | undefined;
    }
  >;
  handleOnSubmitImage: (
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
};
export type UpdateUserNamePage = {
  openDialogUserName: boolean;
  handleOpenDialogUserName: () => void;
  handleCloseDialogUserName: () => void;
  userName: UseFormReturn<
    {
      firstName: string;
      lastName: string;
    },
    any,
    {
      firstName: string;
      lastName: string;
    }
  >;
  handleOnSubmitUserName: (
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
};
