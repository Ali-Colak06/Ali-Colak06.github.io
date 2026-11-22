export function nonBlank(value: string | undefined): true | string {
  return value === undefined || value.trim().length > 0
    ? true
    : 'Must not be blank.';
}
