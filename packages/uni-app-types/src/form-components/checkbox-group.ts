import type { Component } from "../component";
import type { CustomEvent } from "../events";
import type { CheckboxValue } from "./checkbox";

interface _CheckboxGroupOnChangeDetail {
  value: CheckboxValue[];
}

type _CheckboxGroupOnChangeEvent = CustomEvent<_CheckboxGroupOnChangeDetail>;

/** 选中项发生改变时触发 */
type _CheckboxGroupOnChange = (event: _CheckboxGroupOnChangeEvent) => void;

/** 多项选择器属性 */
type _CheckboxGroupProps = Partial<{
  /** 选中项发生改变时触发 */
  onChange: _CheckboxGroupOnChange;
}>;

/** 多项选择器，内部由多个 checkbox 组成 */
type _CheckboxGroup = Component<_CheckboxGroupProps>;

/** 多项选择器实例 */
interface _CheckboxGroupInstance extends InstanceType<_CheckboxGroup>{};

export type {
  _CheckboxGroupOnChangeDetail as CheckboxGroupOnChangeDetail,
  _CheckboxGroupOnChangeEvent as CheckboxGroupOnChangeEvent,
  _CheckboxGroupOnChange as CheckboxGroupOnChange,
  _CheckboxGroupProps as CheckboxGroupProps,
  _CheckboxGroup as CheckboxGroup,
  _CheckboxGroupInstance as CheckboxGroupInstance,
};

declare global {
  namespace UniHelper {
    export interface CheckboxGroupOnChangeDetail
      extends _CheckboxGroupOnChangeDetail {}
    export type CheckboxGroupOnChangeEvent = _CheckboxGroupOnChangeEvent;
    /** 选中项发生改变时触发 */
    export interface CheckboxGroupOnChange extends _CheckboxGroupOnChange {}
    /** 多项选择器属性 */
    export type CheckboxGroupProps = _CheckboxGroupProps;
    /** 多项选择器，内部由多个 checkbox 组成 */
    export type CheckboxGroup = _CheckboxGroup;
    /** 多项选择器实例 */
    export type CheckboxGroupInstance = _CheckboxGroupInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 多项选择器，内部由多个 checkbox 组成 */
    CheckboxGroup: _CheckboxGroup;
  }
}
