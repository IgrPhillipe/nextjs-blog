interface FilterParams {
  filter: string;
  value?: string | number;
  operation: string;
  field?: string;
}

export const formatFilterParams = ({ filter, operation, value, field }: FilterParams) => {
  const key = `filters[${filter}]${field ? `[${field}]` : ''}[$${operation}]`

  return {
    [key]: value
  }
}