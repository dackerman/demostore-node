// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Funtools extends APIResource {
  /**
   * Set Darkmode Value
   */
  setDarkmode(
    body: FuntoolSetDarkmodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FuntoolSetDarkmodeResponse> {
    return this._client.put('/funtools/set_darkmode_value', { body, ...options });
  }
}

export interface FuntoolSetDarkmodeResponse {
  success: boolean;
}

export interface FuntoolSetDarkmodeParams {
  darkmode: boolean;
}

export declare namespace Funtools {
  export {
    type FuntoolSetDarkmodeResponse as FuntoolSetDarkmodeResponse,
    type FuntoolSetDarkmodeParams as FuntoolSetDarkmodeParams,
  };
}
