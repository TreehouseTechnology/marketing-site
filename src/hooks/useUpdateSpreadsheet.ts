import UPDATE_CONTACT_API_ENDPOINT from "@/constants/environment";

type UseUpdateSpreadsheetHookInput = {
  name: string;
  email: string;
  message: string;
};

type UseUpdateSpreadsheetHookResult = (
  input: UseUpdateSpreadsheetHookInput
) => Promise<void>;

type UseUpdateSpreadsheetHook = () => UseUpdateSpreadsheetHookResult;

export const useUpdateSpreadsheet: UseUpdateSpreadsheetHook = () => {
  return async ({ name, email, message }) => {
    const response = await fetch(UPDATE_CONTACT_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const json = await response.json();
    return json;
  };
};

export default useUpdateSpreadsheet;
