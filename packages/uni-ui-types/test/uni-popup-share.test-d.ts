import type {
  UniPopupShare,
  UniPopupShareInstance,
  UniPopupShareOnSelect,
  UniPopupShareOnSelectEvent,
  UniPopupShareProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniPopupShare", () => {
  expectTypeOf<UniPopupShareOnSelectEvent>().toBeObject();
  expectTypeOf<UniPopupShareOnSelectEvent>().toEqualTypeOf<UniHelper.UniPopupShareOnSelectEvent>();

  expectTypeOf<UniPopupShareOnSelect>().toBeFunction();
  expectTypeOf<UniPopupShareOnSelect>().toEqualTypeOf<UniHelper.UniPopupShareOnSelect>();

  expectTypeOf<UniPopupShareProps>().toBeObject();
  expectTypeOf<UniPopupShareProps>().toEqualTypeOf<UniHelper.UniPopupShareProps>();

  expectTypeOf<UniPopupShare>().not.toBeAny();
  expectTypeOf<UniPopupShare>().toEqualTypeOf<UniHelper.UniPopupShare>();

  expectTypeOf<UniPopupShareInstance>().not.toBeAny();
  expectTypeOf<UniPopupShareInstance>().toBeObject();
  expectTypeOf<UniPopupShareInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniPopupShareInstance>().toEqualTypeOf<UniHelper.UniPopupShareInstance>();
});
