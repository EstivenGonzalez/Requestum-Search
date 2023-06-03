export interface ISearchBarProps {
  value: string
  placeholder?: string
  isLoading?: boolean
  onChangeText: (value: string) => void
}
