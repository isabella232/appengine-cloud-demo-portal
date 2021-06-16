/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Dispatch, SetStateAction, useState } from "react";

export type ErrorMessage = string | null;
export type SetErrorMessage = Dispatch<SetStateAction<ErrorMessage>>;
export type OnCloseError = () => void;

const useError = (): {
  errorMessage: ErrorMessage;
  setErrorMessage: SetErrorMessage;
  onCloseError: OnCloseError;
} => {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  const onCloseError = () => setErrorMessage(null);

  return { errorMessage, setErrorMessage, onCloseError };
};

export { useError };
