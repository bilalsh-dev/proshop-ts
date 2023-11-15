import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface ApiErrorResponse {
  status: number;
  data: { message: string };
}
export function isApiResponse(error: unknown): error is ApiErrorResponse {
  return (
    typeof error === "object" &&
    error != null &&
    "status" in error &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (error as any).status === "number"
  );
}
/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (error as any).message === "string"
  );
}

export function getErrorMessage(error: unknown): string {
  if (isApiResponse(error)) {
    return error.data.message;
  } else if (isFetchBaseQueryError(error)) {
    const errMsg = "error" in error ? error.error : JSON.stringify(error.data);
    return errMsg;
  } else if (isErrorWithMessage(error)) {
    return error.message;
  }
  return "some thing went wrong";
}
