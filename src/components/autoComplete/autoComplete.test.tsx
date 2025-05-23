import React from "react";                              
import { config } from 'react-transition-group'
import { render, RenderResult, fireEvent, waitFor } from '@testing-library/react'
import { AutoComplete, AutoCompleteProps } from "./autoComplete"; 

config.disabled = true // 将config.disabled设置为true，则测试中所有的异步性都会变成同步发生

const testArray = [
  {value: 'ab', number: 11},
  {value: 'abc', number: 1},
  {value: 'b', number: 4},
  {value: 'c', number: 15},
]
const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => {return testArray.filter(item => item.value.includes(query))},
  onSelect: jest.fn(),
  placeholder: 'auto-complete'
}

let wrapper: RenderResult, inputNode: HTMLInputElement
describe('test AutoComlete component', () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
  })
  it('test basic AutoComplete behavior', async () => {
    // input change
    fireEvent.change(inputNode, {target: {value: 'a'}})
    await waitFor(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument()
    })
    // should have two suggestion items
    expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2)
    // click the first item
    fireEvent.click(wrapper.getByText('ab'))
    expect(testProps.onSelect).toHaveBeenCalledWith({value: 'ab', number: 11})
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
    // fill the input
    expect(inputNode.value).toBe('ab')
  })
  it('should provide keyboard support', async () => {
    // input change
    fireEvent.change(inputNode, {target: {value: 'a'}})
    await waitFor(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument()
    })
    const firstResult = wrapper.queryByText('ab')
    const secondResult = wrapper.queryByText('abc')

    // arrow down
    fireEvent.keyDown(inputNode, { key: 'ArrowDown'})
    expect(firstResult).toHaveClass('item-highlighted')
    // arrow down
    fireEvent.keyDown(inputNode, { key: 'ArrowDown'})
    expect(secondResult).toHaveClass('item-highlighted')

    // arrow up
    fireEvent.keyDown(inputNode, { key: 'ArrowUp'})
    expect(firstResult).toHaveClass('item-highlighted')

    // press enter
    fireEvent.keyDown(inputNode, { key: 'Enter'})
    expect(firstResult).toHaveClass('item-highlighted')
    expect(testProps.onSelect).toHaveBeenCalledWith({value: 'ab', number: 11})
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
  })
  it('click outside should hide the dropdown', async () => {
    // input change
    fireEvent.change(inputNode, {target: {value: 'a'}})
    await waitFor(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument()
    })
    fireEvent.click(document)
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
  })
  it('renderOption should generate the right template', () => {

  })
  it('async fetchSuggestions should works fine', () => {

  })
})