import React from "react";
import Downshift from "downshift";

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" }
];

const stateReducer = (state, changes) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      return {
        ...changes,
        highlightedIndex: state.highlightedIndex,
        isOpen: true,
        inputValue: ""
      };
    default:
      return changes;
  }
};

export default () => (
  <Downshift
    onChange={selection =>
      alert(selection ? `You selected ${selection.value}` : "Selection Cleared")
    }
    stateReducer={stateReducer}
    itemToString={item => (item ? item.value : "")}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
      getRootProps
    }) => (
      <div>
        <label {...getLabelProps()}>Enter a fruit</label>
        <div
          style={{ display: "inline-block" }}
          {...getRootProps({}, { suppressRefError: true })}
        >
          <input {...getInputProps()} />
        </div>
        <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: selectedItem === item ? "bold" : "normal"
                      }
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
);
