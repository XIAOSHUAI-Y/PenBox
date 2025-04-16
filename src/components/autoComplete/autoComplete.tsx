import React, { ChangeEvent, FC, ReactElement, useEffect, useRef, useState } from 'react'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'
import classNames from 'classnames'
import useClickOutside from '../../hooks/useClickOutside'

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject 

export interface AutoCompleteProps<T = {}> extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType<T>[] | Promise<DataSourceType<T>[]> // 自定义筛选方法： 展示筛选后的数组
  onSelect?: (item: DataSourceType<T>) => void
  renderOption?: (item: DataSourceType<T>) => ReactElement // 自定义展示: 在使用时传入自定义方法
}

export const AutoComplete = <T extends {}>(props: AutoCompleteProps<T>) => {
  const {
    fetchSuggestions,
    onSelect,
    renderOption,
    value,
    ...restProps
  } = props
  const [ inputValue, setInputValue ] = useState(value as string)
  const [ suggestions, setSuggestions ] = useState<DataSourceType<T>[]>([])
  const [ loading, setLoading ] = useState(false) // 是否还在加载
  const [highlightIndex, setHighlightIndex] = useState(-1)
  // const [state, setState] = useState(false)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 500)
  useClickOutside(componentRef, () => { setSuggestions([])})

  // 监听防抖后的输入值变化
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        console.log('triggered')
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
    }
    setHighlightIndex(-1)
  }, [debouncedValue])

  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch(e.key) {
      // 回车键
      case 'Enter': 
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      // 向上键
      case 'ArrowUp': 
        highlight(highlightIndex - 1)
        break
      // 向下键
      case 'ArrowDown': 
        highlight(highlightIndex + 1)
        break
      // ESc键
      case 'Escape': 
        setSuggestions([])
        break
      default: 
        break  
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    // setState(true)
    triggerSearch.current = true
  }

  const handleSelect = (item: DataSourceType<T>) => {
    setInputValue(item.value)
    setSuggestions([])
    onSelect?.(item)
    // setState(false)
    triggerSearch.current = false
  }

  // 根据自定义方法筛选所展示的Item
  const renderTemplate = (item: DataSourceType<T>) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = () => (
    <ul className={classNames({ show: suggestions.length > 0 })}>
      {suggestions.map((item, index) => {
        const cnames = classNames('suggestion-item', {
          'item-highlighted': index === highlightIndex
        })
        return (
          <li key={index} className={cnames} onClick={() => handleSelect(item)}>
            {/* 在展示时，展示筛选后的内容 */}
            {renderTemplate(item)}
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className="yjy-auto-complete" ref={componentRef}>
      <Input 
        value={inputValue} 
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
        {...restProps} />
      {/* 加载图标 */}
      { loading && <ul><Icon icon="spinner" spin/></ul>} 
      {suggestions.length > 0 && generateDropdown()}
    </div>
  )
}