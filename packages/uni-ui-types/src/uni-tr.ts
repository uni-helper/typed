import type { Component } from "@uni-helper/uni-app-types";

type _UniTrProps = Partial<{
  /**
   * 是否禁用选择
   *
   * 默认为 false
   */
  disabled: boolean;
  keyValue: string | number;
}>;

type _UniTr = Component<_UniTrProps>;

interface _UniTrInstance extends InstanceType<_UniTr>{};;

export type {
  _UniTrProps as UniTrProps,
  _UniTr as UniTr,
  _UniTrInstance as UniTrInstance,
};

declare global {
  namespace UniHelper {
    export type UniTrProps = _UniTrProps;
    export type UniTr = _UniTr;
    export type UniTrInstance = _UniTrInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UniTr: _UniTr;
  }
}
