// Final tree should be something similar to this

// <WrapperContainer /> holds state and high level logics

// <ControlContainer /> handles behaviour of searching, rendering selected value(s) clearing, focusing, bluring of input

// <MenuContainer /> handles dropdown logic, and arrow navigation

// <ValueContainer /> holds logic for rendering selection
//// <SingleValueContainer /> styling and dispatching of single value rendering
//// <MultiValueContainer /> iterates trough values, dispatch value rendering for each
//// value item and passes down indivitial value item action handlers

// <InputContainer /> renders placeholder when no value presented, and if select is searchable renders
// the search input
// <PlaceholderRenderer /> renders placeholder node
// <SearchInput /> renders search input with related event handlers and props

// <ControlIndicatorContainer /> renders clear button (isClearable), dropdown indicator
//// <ClearButton /> renders a node and on click element value should be cleared
////

const outline = ({ isSearchable, isClearable, isMultiple, hasValue }) => (
  <WrapperContainer>
    <ControlContainer>
      <ValueContainer>
        {isMultiple ? (
          <MultiValueContainer>
            <MultiValueItemRenderer />
            <MultiValueItemRenderer />
            <MultiValueItemRenderer />
          </MultiValueContainer>
        ) : (
          <SingleValueContainer>
            <SingleValueItemRenderer />
          </SingleValueContainer>
        )}
        <InputContainer>
          {!hasValue && <PlaceholderRenderer />}
          {isSearchable && <SearchInput />}
        </InputContainer>
      </ValueContainer>
      <ControlIndicatorContainer>
        {isClearable && hasValue && <ClearButton />}
        <DropdownIndicator />
      </ControlIndicatorContainer>
    </ControlContainer>
    <MenuContainer>
      <MenuList>
        <Option />
        <Option />
        <Option />
        <Option />
      </MenuList>
    </MenuContainer>
  </WrapperContainer>
);
