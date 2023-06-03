import { useCallback, useEffect, useState } from 'react'

import { repositoryService } from '@services/repository'

import { useDebounce } from '@hooks/debounce'
import { useAppDispatch } from '@hooks/redux'

import { addToHistory } from '@store/history'

import { TRepository } from '@typings/global'

export const useRepositoriesSearch = () => {
  const [repositories, setRepositories] = useState<TRepository[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term)
  const dispatch = useAppDispatch()

  const searchRepositories = async () => {
    setIsLoading(true)
    try {
      const fetchedRepositories = await repositoryService.searchByTerm(debouncedTerm)
      setRepositories(fetchedRepositories)
    } catch (error) {
      console.error('error:', error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!debouncedTerm.trim()) {
      return setRepositories(null)
    }
    dispatch(addToHistory(debouncedTerm))
    searchRepositories()
  }, [debouncedTerm])

  const refetch = useCallback(async () => {
    setIsError(false)
    await searchRepositories()
  }, [])

  return {
    refetch,
    setTerm,
    repositories,
    isLoading,
    isError,
    term,
  }
}
